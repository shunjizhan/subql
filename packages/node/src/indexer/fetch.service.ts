// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Interval } from '@nestjs/schedule';
import { ApiPromise } from '@polkadot/api';
import {
  isRuntimeDataSourceV0_2_0,
  RuntimeDataSourceV0_0_1,
  isCustomDs,
  isRuntimeDs,
} from '@subql/common';
import {
  SubqlCallFilter,
  SubqlEventFilter,
  SubqlHandlerKind,
  SubqlHandler,
  SubqlDatasource,
  SubqlHandlerFilter,
} from '@subql/types';
import { isUndefined, range, sortBy, uniqBy } from 'lodash';
import { lastValueFrom, take } from 'rxjs';
import { NodeConfig } from '../configure/NodeConfig';
import { SubqueryProject } from '../configure/project.model';
import { getLogger } from '../utils/logger';
import { profiler, profilerWrap } from '../utils/profiler';
import { isBaseHandler, isCustomHandler } from '../utils/project';
import * as SubstrateUtil from '../utils/substrate';
import { getYargsOption } from '../yargs';
import { ApiService } from './api.service';
import { AutoQueue } from './BlockedQueue';
import {
  Dictionary,
  DictionaryQueryEntry,
  DictionaryService,
} from './dictionary.service';
import { DsProcessorService } from './ds-processor.service';
import { IndexerEvent } from './events';
import { BlockContent } from './types';

const logger = getLogger('fetch');
const BLOCK_TIME_VARIANCE = 5;
const DICTIONARY_MAX_QUERY_SIZE = 10000;
const { argv } = getYargsOption();

const fetchBlocksBatches = argv.profiler
  ? profilerWrap(
      SubstrateUtil.fetchBlocksBatches,
      'SubstrateUtil',
      'fetchBlocksBatches',
    )
  : SubstrateUtil.fetchBlocksBatches;

function eventFilterToQueryEntry(
  filter: SubqlEventFilter,
): DictionaryQueryEntry {
  return {
    entity: 'events',
    conditions: [
      { field: 'module', value: filter.module },
      {
        field: 'event',
        value: filter.method,
      },
    ],
  };
}

function callFilterToQueryEntry(filter: SubqlCallFilter): DictionaryQueryEntry {
  return {
    entity: 'extrinsics',
    conditions: [
      { field: 'module', value: filter.module },
      {
        field: 'call',
        value: filter.method,
      },
    ],
  };
}

@Injectable()
export class FetchService implements OnApplicationShutdown {
  private latestBestHeight: number;
  private latestFinalizedHeight: number;
  private latestProcessedHeight: number;
  private latestBufferedHeight: number;
  private blockBuffer: AutoQueue<void>;
  private blockBufferSubscription?: () => void;
  private isShutdown = false;
  private parentSpecVersion: number;
  private useDictionary: boolean;
  private dictionaryQueryEntries?: DictionaryQueryEntry[];

  constructor(
    private apiService: ApiService,
    private nodeConfig: NodeConfig,
    private project: SubqueryProject,
    private dictionaryService: DictionaryService,
    private dsProcessorService: DsProcessorService,
    private eventEmitter: EventEmitter2,
  ) {
    this.blockBuffer = new AutoQueue(this.nodeConfig.batchSize * 3);
  }

  onApplicationShutdown(): void {
    this.isShutdown = true;
    this.blockBuffer.abort();
    this.blockBufferSubscription?.();
  }

  get api(): ApiPromise {
    return this.apiService.getApi();
  }

  // TODO: if custom ds doesn't support dictionary, use baseFilter, if yes, let
  getDictionaryQueryEntries(): DictionaryQueryEntry[] {
    const queryEntries: DictionaryQueryEntry[] = [];

    const dataSources = this.project.dataSources.filter(
      (ds) =>
        isRuntimeDataSourceV0_2_0(ds) ||
        !(ds as RuntimeDataSourceV0_0_1).filter?.specName ||
        (ds as RuntimeDataSourceV0_0_1).filter.specName ===
          this.api.runtimeVersion.specName.toString(),
    );
    for (const ds of dataSources) {
      for (const handler of ds.mapping.handlers) {
        const baseHandlerKind = this.getBaseHandlerKind(ds, handler);
        const filterList = isRuntimeDs(ds)
          ? [handler.filter as SubqlHandlerFilter].filter(Boolean)
          : this.getBaseHandlerFilters<SubqlHandlerFilter>(ds, handler.kind);
        if (!filterList.length) return [];
        switch (baseHandlerKind) {
          case SubqlHandlerKind.Block:
            return [];
          case SubqlHandlerKind.Call: {
            for (const filter of filterList as SubqlCallFilter[]) {
              if (filter.module !== undefined && filter.method !== undefined) {
                queryEntries.push(callFilterToQueryEntry(filter));
              } else {
                return [];
              }
            }
            break;
          }
          case SubqlHandlerKind.Event: {
            for (const filter of filterList as SubqlEventFilter[]) {
              if (filter.module !== undefined && filter.method !== undefined) {
                queryEntries.push(eventFilterToQueryEntry(filter));
              } else {
                return [];
              }
            }
            break;
          }
          default:
        }
      }
    }

    return uniqBy(
      queryEntries,
      (item) =>
        `${item.entity}|${JSON.stringify(
          sortBy(item.conditions, (c) => c.field),
        )}`,
    );
  }

  async init(): Promise<void> {
    this.dictionaryQueryEntries = this.getDictionaryQueryEntries();
    this.useDictionary =
      !!this.dictionaryQueryEntries?.length &&
      !!this.project.network.dictionary;

    this.eventEmitter.emit(IndexerEvent.UsingDictionary, {
      value: Number(this.useDictionary),
    });
    await this.getFinalizedBlockHead();
    await this.getBestBlockHead();
  }

  @Interval(BLOCK_TIME_VARIANCE * 1000)
  async getFinalizedBlockHead(): Promise<void> {
    if (!this.api) {
      logger.debug(`Skip fetch finalized block until API is ready`);
      return;
    }
    try {
      const finalizedHead = await this.api.rpc.chain.getFinalizedHead();
      const finalizedBlock = await this.api.rpc.chain.getBlock(finalizedHead);
      const currentFinalizedHeight =
        finalizedBlock.block.header.number.toNumber();
      if (this.latestFinalizedHeight !== currentFinalizedHeight) {
        this.latestFinalizedHeight = currentFinalizedHeight;
        this.eventEmitter.emit(IndexerEvent.BlockTarget, {
          height: this.latestFinalizedHeight,
        });
      }
    } catch (e) {
      logger.error(e, `Having a problem when get finalized block`);
    }
  }

  @Interval(BLOCK_TIME_VARIANCE * 1000)
  async getBestBlockHead(): Promise<void> {
    if (!this.api) {
      logger.debug(`Skip fetch best block until API is ready`);
      return;
    }
    try {
      const bestHeader = await this.api.rpc.chain.getHeader();
      const currentBestHeight = bestHeader.number.toNumber();
      if (this.latestBestHeight !== currentBestHeight) {
        this.latestBestHeight = currentBestHeight;
        this.eventEmitter.emit(IndexerEvent.BlockBest, {
          height: this.latestBestHeight,
        });
      }
    } catch (e) {
      logger.error(e, `Having a problem when get best block`);
    }
  }

  latestProcessed(height: number): void {
    this.latestProcessedHeight = height;
  }

  async startLoop(
    initBlockHeight: number,
    processor: (value: BlockContent) => Promise<void> | void,
  ): Promise<void> {
    if (isUndefined(this.latestProcessedHeight)) {
      this.latestProcessedHeight = initBlockHeight - 1;
    }

    this.setLatestBufferedHeight(this.latestProcessedHeight);
    await this.fetchMeta(this.latestProcessedHeight);

    let isFetchingBlocks = false;

    // Resolves on shutdown or rejects on error
    const task = new Promise<void>((resolve, reject) => {
      // Monitor queue size to replenish
      const sub = this.blockBuffer.on('size', async (size) => {
        try {
          if (this.isShutdown) {
            resolve();
            return;
          }
          if (this.blockBuffer.freeSpace < this.nodeConfig.batchSize) return;
          if (isFetchingBlocks) return;

          isFetchingBlocks = true;

          await this.queueBlocks(processor);

          isFetchingBlocks = false;
        } catch (e) {
          logger.error(e, `Failed to enqueue blocks for processing`);
          // TODO should blockBufferSubscription be cleaned up
          reject(e);
          sub();
        }
      });

      this.blockBufferSubscription = () => {
        sub();
        resolve();
      };
    });

    // Load initial blocks
    await this.queueBlocks(processor);

    return task;
  }

  private async queueBlocks(
    processor: (value: BlockContent) => Promise<void> | void,
  ): Promise<void> {
    let bufferBlocks = await this.nextBlocks();

    if (!bufferBlocks.length) {
      const wait = 3;
      logger.info(
        `Up to date with chain, waiting for ${wait} new blocks then trying again`,
      );
      const header = await lastValueFrom(
        this.api.rx.rpc.chain.subscribeFinalizedHeads().pipe(take(wait)),
      );

      bufferBlocks = range(
        this.latestBufferedHeight + 1,
        header.number.toNumber() + 1,
      );
    }

    const highestBufferBlock = bufferBlocks[bufferBlocks.length - 1];
    this.setLatestBufferedHeight(highestBufferBlock);
    const metadataChanged = await this.fetchMeta(highestBufferBlock);

    logger.info(
      `fetch block [${bufferBlocks[0]},${highestBufferBlock}], total ${bufferBlocks.length} blocks`,
    );
    const blocks = await fetchBlocksBatches(
      this.api,
      bufferBlocks,
      metadataChanged ? undefined : this.parentSpecVersion,
    );

    this.eventEmitter.emit(IndexerEvent.BlockBufferHeight, {
      value: highestBufferBlock,
    });

    if (!blocks) {
      // This happens with spec tests
      logger.warn('Fetching blocks result is undefined');
      return;
    }

    this.blockBuffer.putMany(
      blocks.map((block) => async () => {
        try {
          await processor(block);
        } catch (e) {
          logger.error(
            e,
            `failed to index block at height ${block.block.block.header.number.toString()} ${
              e.handler ? `${e.handler}(${e.handlerArgs ?? ''})` : ''
            }`,
          );
          process.exit(1);
        }
      }),
    );

    this.eventEmitter.emit(IndexerEvent.BlockQueueSize, {
      value: this.blockBuffer.size,
    });
  }

  /* Gets the next block range to query, this can be nonsequential with a dictionary */
  private async nextBlocks(): Promise<number[]> {
    const startBlockHeight = this.latestBufferedHeight + 1;
    if (this.useDictionary) {
      const queryEndBlock = startBlockHeight + DICTIONARY_MAX_QUERY_SIZE;
      const dictionary = await this.dictionaryService.getDictionary(
        startBlockHeight,
        queryEndBlock,
        this.nodeConfig.batchSize,
        this.dictionaryQueryEntries,
      );
      //TODO
      // const specVersionMap = dictionary.specVersions;
      if (
        dictionary &&
        this.dictionaryValidation(dictionary, startBlockHeight)
      ) {
        const { batchBlocks } = dictionary;
        if (batchBlocks.length) {
          return batchBlocks;
        }
      }
    }

    const endHeight = this.nextEndBlockHeight(startBlockHeight);
    return range(startBlockHeight, endHeight + 1);
  }

  @profiler(argv.profiler)
  async fetchMeta(height: number): Promise<boolean> {
    const parentBlockHash = await this.api.rpc.chain.getBlockHash(
      Math.max(height - 1, 0),
    );
    const runtimeVersion = await this.api.rpc.state.getRuntimeVersion(
      parentBlockHash,
    );
    const specVersion = runtimeVersion.specVersion.toNumber();
    if (this.parentSpecVersion !== specVersion) {
      const blockHash = await this.api.rpc.chain.getBlockHash(height);
      await SubstrateUtil.prefetchMetadata(this.api, blockHash);
      this.parentSpecVersion = specVersion;
      return true;
    }
    return false;
  }

  private nextEndBlockHeight(startBlockHeight: number): number {
    const endBlockHeight = startBlockHeight + this.nodeConfig.batchSize - 1;
    return Math.min(endBlockHeight, this.latestFinalizedHeight);
  }

  private dictionaryValidation(
    { _metadata: metaData }: Dictionary,
    startBlockHeight: number,
  ): boolean {
    if (metaData.genesisHash !== this.api.genesisHash.toString()) {
      logger.warn(`Dictionary is disabled since now`);
      this.useDictionary = false;
      this.eventEmitter.emit(IndexerEvent.UsingDictionary, {
        value: Number(this.useDictionary),
      });
      this.eventEmitter.emit(IndexerEvent.SkipDictionary);
      return false;
    }
    if (metaData.lastProcessedHeight < startBlockHeight) {
      logger.warn(
        `Dictionary indexed block is behind current indexing block height`,
      );
      this.eventEmitter.emit(IndexerEvent.SkipDictionary);
      return false;
    }
    return true;
  }

  private setLatestBufferedHeight(height: number): void {
    this.latestBufferedHeight = height;
  }

  private getBaseHandlerKind(
    ds: SubqlDatasource,
    handler: SubqlHandler,
  ): SubqlHandlerKind {
    if (isRuntimeDs(ds) && isBaseHandler(handler)) {
      return handler.kind;
    } else if (isCustomDs(ds) && isCustomHandler(handler)) {
      const plugin = this.dsProcessorService.getDsProcessor(ds);
      const baseHandler =
        plugin.handlerProcessors[handler.kind]?.baseHandlerKind;
      if (!baseHandler) {
        throw new Error(
          `handler type ${handler.kind} not found in processor for ${ds.kind}`,
        );
      }
      return baseHandler;
    }
  }

  private getBaseHandlerFilters<T extends SubqlHandlerFilter>(
    ds: SubqlDatasource,
    handlerKind: string,
  ): T[] {
    if (isCustomDs(ds)) {
      const plugin = this.dsProcessorService.getDsProcessor(ds);
      const processor = plugin.handlerProcessors[handlerKind];
      return processor.baseFilter instanceof Array
        ? (processor.baseFilter as T[])
        : ([processor.baseFilter] as T[]);
    } else {
      throw new Error(`expect custom datasource here`);
    }
  }
}
