(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{551:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"схема-graphql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#схема-graphql"}},[t._v("#")]),t._v(" Схема GraphQL")]),t._v(" "),s("h2",{attrs:{id:"определение-объектов"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#определение-объектов"}},[t._v("#")]),t._v(" Определение объектов")]),t._v(" "),s("p",[t._v("Файл "),s("code",[t._v("schema.graphql")]),t._v(" определяет различные схемы GraphQL. Из-за того, как работает язык запросов GraphQL, схема файлов по сути диктует форму ваших данных из SubQuery. Чтобы узнать больше о том, как писать в GraphQL-языке мы рекомендуем проверить "),s("a",{attrs:{href:"https://graphql.org/learn/schema/#type-language",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schemas and Type"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("Важно: При внесении каких-либо изменений в файл, убедитесь, что вы регенерируете директорию типов, используя следующую команду "),s("code",[t._v("yarn codegen")])])]),t._v(" "),s("h3",{attrs:{id:"сущности"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#сущности"}},[t._v("#")]),t._v(" Сущности")]),t._v(" "),s("p",[t._v("Каждая сущность должна определить свои требуемые поля "),s("code",[t._v("id")]),t._v(" с типом "),s("code",[t._v("ID!")]),t._v(". Он используется в качестве первичного ключа и уникален между всеми сущностями одного типа.")]),t._v(" "),s("p",[t._v("Поля, не допускающие значения NULL, в сущности обозначены "),s("code",[t._v("!")]),t._v(". Пожалуйста, смотрите пример ниже:")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("напечатайте Пример "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" поле "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# id всегда необходимо заполнять и оно должно выглядеть следующим образом")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Это обязательное поле для заполнения")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Это необязательное поле")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"поддерживаемые-скаляры-и-типы"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#поддерживаемые-скаляры-и-типы"}},[t._v("#")]),t._v(" Поддерживаемые скаляры и типы")]),t._v(" "),s("p",[t._v("В настоящее время мы поддерживаем следующие скалярные типы:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("ID")])]),t._v(" "),s("li",[s("code",[t._v("Int")])]),t._v(" "),s("li",[s("code",[t._v("Строка")])]),t._v(" "),s("li",[s("code",[t._v("BigInt")])]),t._v(" "),s("li",[s("code",[t._v("Дата")])]),t._v(" "),s("li",[s("code",[t._v("Логический")])]),t._v(" "),s("li",[s("code",[t._v("<EntityName>")]),t._v(" для вложенных сущностей связей вы можете использовать определенное имя сущности в качестве одного из полей. Пожалуйста, смотрите в "),s("a",{attrs:{href:"#entity-relationships"}},[t._v("Entity Relationships")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("JSON")]),t._v(" может также хранить структурированные данные, см. "),s("a",{attrs:{href:"#json-type"}},[t._v("JSON type")])])]),t._v(" "),s("h2",{attrs:{id:"индексирование-с-помощью-не-первичного-ключа"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#индексирование-с-помощью-не-первичного-ключа"}},[t._v("#")]),t._v(" Индексирование с помощью не первичного ключа")]),t._v(" "),s("p",[t._v("Чтобы улучшить производительность поисковых запросов, индексируйте выбранные области просто внедрив аннотацию "),s("code",[t._v("@index")]),t._v(" в поле непервичного ключа.")]),t._v(" "),s("p",[t._v("Тем не менее, мы не позволяем пользователям добавлять аннотации "),s("code",[t._v("@index")]),t._v(" к любому объекту "),s("a",{attrs:{href:"#json-type"}},[t._v("JSON")]),t._v(". По умолчанию, индексы автоматически добавляются к внешним ключам и для полей JSON в базе данных, но только для повышения производительности службы запросов.")]),t._v(" "),s("p",[t._v("Вот пример.")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("тип пользователя "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  имя"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("unique")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# уникальное может быть установлено в true или false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Индексы автоматически добавляются в поле внешнего ключа ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nтип Title "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("  \n  имя"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("unique")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Предполагая, что мы знали имя этого пользователя, но мы не знаем его точное значение id, вместо того, чтобы извлекать всех пользователей, а затем фильтровать их по имени, мы можем добавить "),s("code",[t._v("@index")]),t._v(" за полем имени. Это делает поиск гораздо более быстрее, и мы можем дополнительно пройти "),s("code",[t._v("unique: true")]),t._v(" для обеспечения уникальности.")]),t._v(" "),s("p",[s("strong",[t._v("Если поле не уникальное, то максимальный размер набора результатов равен 100")])]),t._v(" "),s("p",[t._v("Когда выполняется генерация кода, автоматически создастся "),s("code",[t._v("getByName")]),t._v(" в соответствии с моделью "),s("code",[t._v("User")]),t._v(" "),t._v(", и внешний ключ "),s("code",[t._v("title")]),t._v(" создаст метод `getByTitleId</0>,\nк которым оба могут быть напрямую доступны в функции сопоставления.")]),s("p"),t._v(" "),s("pre",[s("code",{staticClass:"sql"},[t._v("/* Подготовить запись заголовка */\nINSERT INTO titles (id, name) VALUES ('id_1', 'Captain')\n`")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Обработчик в функции сопоставления")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../types/models/User"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../types/models/Title"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" jack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("etByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jack Sparrow'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" captainTitle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Captain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pirateLords "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByTitleId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("captainTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Список всех капитанов")]),t._v("\n")])])]),s("h2",{attrs:{id:"связи-субъектов"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#связи-субъектов"}},[t._v("#")]),t._v(" Связи субъектов")]),t._v(" "),s("p",[t._v("Сущность часто имеет вложенные отношения с другими субъектами. Установка значения поля на другое имя объекта определит связь между этими двумя объектами по умолчанию.")]),t._v(" "),s("p",[t._v("Различные отношения объектов (один-на-один, и многие) могут быть настроены с помощью приведенных ниже примеров.")]),t._v(" "),s("h3",{attrs:{id:"индивидуальные-отношения"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#индивидуальные-отношения"}},[t._v("#")]),t._v(" Индивидуальные отношения")]),t._v(" "),s("p",[t._v("Отношения «один к одному» используются по умолчанию, когда только один объект сопоставляется с другим.")]),t._v(" "),s("p",[t._v("Пример: паспорт будет принадлежать только одному человеку, и у человека есть только один паспорт (в данном примере):")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("тип Person "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nтип Passport "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  владелец"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Человек"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("или")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("тип Person "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  паспорт"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Passport"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nтип Passport "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  владелец"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"отношения-от-одного-до-нескольких"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#отношения-от-одного-до-нескольких"}},[t._v("#")]),t._v(" Отношения от одного до нескольких")]),t._v(" "),s("p",[t._v("Вы можете использовать квадратные скобки, чтобы указать, что тип поля включает несколько сущностей.")]),t._v(" "),s("p",[t._v("Пример: Человек может иметь несколько учетных записей.")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("тип Person "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  аккаунты"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nтип аккаунта "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  публичный адрес"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"отношения-многие-ко-многим"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#отношения-многие-ко-многим"}},[t._v("#")]),t._v(' Отношения "многие ко многим"')]),t._v(" "),s("p",[t._v("Отношения «многие ко многим» могут быть достигнуты путем реализации объекта сопоставления для соединения двух других объектов.")]),t._v(" "),s("p",[t._v("Пример: каждый человек является частью нескольких групп (PersonGroup), а в группах есть несколько разных людей (PersonGroup).")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("тип Person "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  имя"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  группы"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PersonGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nтип PersonGroup "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  человек"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  Группа"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Group"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nтип Group "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  имя"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("persons")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PersonGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Кроме того, можно создать соединение одной и той же сущности в нескольких полях средней сущности.")]),t._v(" "),s("p",[t._v("Например, учетная запись может иметь несколько переводов, и каждая передача имеет исходную и целевую учетные записи.")]),t._v(" "),s("p",[t._v("Это установит двусторонние отношения между двумя аккаунтами (от и до) через таблицу передачи.")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("тип Account "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  публичный адрес"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nтип Transfer "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  сумма"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BigInt\n  от"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Account"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Account"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"обратные-запросы"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#обратные-запросы"}},[t._v("#")]),t._v(" Обратные запросы")]),t._v(" "),s("p",[t._v("Чтобы разрешить обратный поиск объекта в отношении, присоедините "),s("code",[t._v("@dehibitedFrom")]),t._v(" к полю и укажите на его поле обратного просмотра другого объекта.")]),t._v(" "),s("p",[t._v("Это создает виртуальное поле на объекте, который может быть запрошен.")]),t._v(" "),s("p",[t._v("Передача «от» учетной записи доступна из объекта аккаунта путем установки значения sentTransfer или receiveTransfer, полученного из соответствующих полей from или to.")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("тип Account "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  публичный адрес"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sentTransfers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Transfer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@derivedFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("field")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"from"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("receivedTransfers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Transfer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@derivedFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("field")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"to"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transfer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  сумма"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BigInt\n  от"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Account"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  от"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Account"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"тип-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#тип-json"}},[t._v("#")]),t._v(" Тип JSON")]),t._v(" "),s("p",[t._v("Мы поддерживаем сохранение данных в формате JSON, что является быстрым способом хранения структурированных данных. Мы автоматически сгенерируем соответствующие интерфейсы JSON для запроса данных и сэкономим время для определения и управления сущностями.")]),t._v(" "),s("p",[t._v("Мы рекомендуем пользователям использовать тип JSON в следующих сценариях:")]),t._v(" "),s("ul",[s("li",[t._v("Хранение структурированных данных в одном поле более управляемо, чем создание нескольких отдельных сущностей.")]),t._v(" "),s("li",[t._v("Сохранение произвольных пользовательских настроек ключа / значения (где значение может быть логическим, текстовым или числовым, и вы не хотите иметь отдельные столбцы для разных типов данных)")]),t._v(" "),s("li",[t._v("Схема является волатильной и часто меняется")])]),t._v(" "),s("h3",{attrs:{id:"определить-директиву-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#определить-директиву-json"}},[t._v("#")]),t._v(" Определить директиву JSON")]),t._v(" "),s("p",[t._v("Определите свойство как тип JSON файла, добавив аннотацию "),s("code",[t._v("jsonField")]),t._v(" в объекте. Это автоматически создаст интерфейсы для всех JSON объектов в вашем проекте в "),s("code",[t._v("types/interfaces.ts")]),t._v(", и вы можете получить доступ к ним в функции сопоставления.")]),t._v(" "),s("p",[t._v("В отличие от объекта, директивный jsonField объект не требует поля "),s("code",[t._v("id")]),t._v(". Объект JSON также способен соединиться с другими объектами JSON.")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("тип AddressDetail "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@jsonField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  улица"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  округ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nвведите ContactCard "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@jsonField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  телефон"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  адрес"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AddressDetail "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Вложенный JSON")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nтип User "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" \n  контакт"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ContactCard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Сохраните список JSON объектов")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"запрос-полеи-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#запрос-полеи-json"}},[t._v("#")]),t._v(" Запрос полей JSON")]),t._v(" "),s("p",[t._v("Недостатком использования файлов типа JSON является слабое влияние на эффективность запроса при фильтрации, поскольку каждый раз, когда выполняется текстовый поиск, он выполняется по всему объекту.")]),t._v(" "),s("p",[t._v("Тем не менее, влияние на нашу работу по поисковым запросам все еще приемлемо. Вот пример того, как использовать "),s("code",[t._v("contains")]),t._v(" оператора в запросе GraphQL на JSON файл, чтобы найти пять первых пользователей, у которых есть номер телефона, содержащий '0064'.")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Чтобы найти первых 5 пользователей телефоны которых содержат '0064'.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  пользователь "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    первый"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("contactCard")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        содержит "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("phone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0064"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id\n      contactCard\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);