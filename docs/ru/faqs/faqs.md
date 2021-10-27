# Часто задаваемые вопросы

## Что такое SubQuery?

SubQuery - это проект с открытым исходным кодом, который позволяет разработчикам индексировать, преобразовывать и запрашивать данные цепи Substrate для питания своих приложений.

SubQuery также предоставляет бесплатный хостинг проектов по производству для разработчиков, позволяя им снять ответственность за построение инфраструктуры, и также позволяет разработчикам делать то, что они делают лучше всего - строить.

## Какой лучший способ начать работу с SubQuery?

Лучший способ начать работу с SubQuery - попробовать наш [Урок «Приветствуем мир»](../quickstart/helloworld-localhost.md). Это простая 5-минутная прогулка по загрузке начального шаблона, построению проекта, а затем с помощью использования Docker для запуска узла на вашем локальном хосте и выполнения простого запроса.

## Как я могу внести свой вклад или оставить отзыв для SubQuery?

Нам нравится вклад и отзывы сообщества. Чтобы внести свой код, форкните интересующее вас хранилище и внесите свои изменения. Затем отправьте PR или Pull Request. Ах, не забудь еще и протестировать! Также ознакомьтесь с нашими рекомендациями внесению дополнений (скоро).

Чтобы оставить отзыв, свяжитесь с нами по адресу hello@subquery.network или перейдите на наш [discord channel](https://discord.com/invite/78zg8aBSMG)

## Сколько стоит разместить мой проект в SubQuery?

Размещение вашего проекта в SubQuery Projects абсолютно бесплатно - это наш способ отблагодарить сообщество. Чтобы научиться каким образом размещать ваш проект у нас, пожалуйста ознакомьтесь с руководством [Hello World (SubQuery hosted)](../quickstart/helloworld-hosted.md).

## Что такое слоты развертывания?

Слоты развертывания - это функция в [SubQuery Projects](https://project.subquery.network), которая является эквивалентом среды разработки. Например, в любой организации занимающейся программным обеспечением обычно есть как минимум среда разработки и производственная среда (без учета localhost). Обычно дополнительные условия, такие как постановка и пре-продакшен или даже QA, включаются в зависимости от потребностей организации и их разработки.

SubQuery в настоящее время имеет два доступных слота. Промежуточный слот и производственный слот. Это позволяет разработчикам установить свой SubQuery в промежуточную среду и если все хорошо, "продвинуть в производство" щелчком по кнопке.

## В чем преимущество промежуточного слота?

Основное преимущество использования промежуточного слота состоит в том, что он позволяет вам подготовить новую версию вашего проекта SubQuery, не раскрывая ее публично. Вы можете подождать, пока промежуточный слот переиндексирует все данные, не затрагивая рабочие приложения.

Промежуточный слот не отображается публично в [Explorer](https://explorer.subquery.network/) и имеет уникальный URL, который видим только вам. И, конечно же, отдельная среда позволяет вам тестировать новый код, не ущерба вашему производству.

## Что такое надстройки?

Если вы уже знакомы с понятиями блокчейна, вы можете подумать о дополнительных функциях, сопоставимых с транзакциями. Однако более формально надстройками является часть информации, которая поступает извне цепи и включена в блок. Есть три категории надстроек. Они являются неотъемлемыми элементами, подписанными транзакциями и неподписанными транзакциями.

Inherent Extrinsics - это части информации, которые не подписаны и вставляются в блок автором блока.

Внешние подписанные транзакции - это транзакции, которые содержат подпись учетной записи, выданного транзакцией. Они должны заплатить комиссию за включение транзакции в цепочку.

Неподписанные транзакции – это транзакции, которые не содержат подписи счета, который выдает транзакцию. Неподписанные транзакции должны использоваться с осторожностью, потому что никто не платит комиссию, так как она подписана. Из-за этого в очереди транзакций отсутствует экономическая логика для предотвращения спама.

Для получения дополнительной информации нажмите [here](https://substrate.dev/docs/en/knowledgebase/learn-substrate/extrinsics).