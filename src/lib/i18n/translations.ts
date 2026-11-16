export type Locale = 'ru' | 'en';

export const translations = {
  ru: {
    nav: {
      product: 'Продукт',
      advantage: 'Преимущества',
      services: 'Сервисы',
      documentation: 'Документация',
      price: 'Цены',
      request: 'Оставить заявку',
      login: 'Войти',
      search: 'Найти на сайте...',
      searchBtn: 'Искать',
      searchEmpty: 'По запросу «{q}» ничего не найдено.',
      brand: 'Око эфора',
      tagline: 'Аналитика тарифов и Isolation Service',
      theme: 'Сменить тему',
      menu: 'Меню',
      lang: 'EN',
    },
    auth: {
      loginTitle: 'Вход в Око эфора',
      loginSubtitle: 'Аналитика тарифов и Isolation Service',
      registerTitle: 'Создать аккаунт',
      registerSubtitle: 'Начните мониторить потребление за пару минут',
      email: 'Email',
      emailPh: 'name@company.com',
      password: 'Пароль',
      passwordPh: '••••••••',
      name: 'Имя',
      namePh: 'Иван Иванов',
      confirmPassword: 'Подтвердите пароль',
      loginBtn: 'Войти',
      registerBtn: 'Зарегистрироваться',
      forgot: 'Забыли пароль?',
      noAccount: 'Нет аккаунта?',
      hasAccount: 'Уже есть аккаунт?',
      signUpLink: 'Зарегистрироваться',
      signInLink: 'Войти',
      orContinue: 'или',
      demoHint: 'Демо-режим: пользователи хранятся локально в браузере.',
      errorEmpty: 'Заполните все поля.',
      errorNotFound: 'Аккаунт не найден. Зарегистрируйтесь, чтобы продолжить.',
      errorBadPassword: 'Неверный пароль.',
      errorExists: 'Этот email уже зарегистрирован. Войдите.',
      errorMismatch: 'Пароли не совпадают.',
      errorShort: 'Пароль должен быть не короче 6 символов.',
      goRegister: 'Перейти к регистрации',
      successRegister: 'Аккаунт создан. Перенаправляем…',
      successLogin: 'Вход выполнен. Перенаправляем…',
    },
    home: {
      heroTitle: 'Видим, сколько тарифа реально тратит каждый пользователь',
      heroText:
        'Око эфора — платформа аналитики потребления: тарифы, квоты и нагрузка на Isolation Service при обучении моделей. Не просто логи — управляемые метрики для диплома, продукта и продакшена.',
      heroCta: 'Смотреть продукт',
      heroCtaSecondary: 'Документация',
      statsUsers: 'Пользователей на стенде',
      statsMetrics: 'Метрик в ядре',
      statsModules: 'Модулей в линейке',
      featuresTitle: 'От сырых логов — к решениям',
      featuresSubtitle: 'Считаем использование, а не только собираем события',
      f1Title: 'Аналитика тарифов',
      f1Text:
        'Сколько запросов, GPU-часов и квот потратил пользователь. Сравнение планов, перерасход и прогноз до конца периода.',
      f2Title: 'Isolation Service',
      f2Text:
        'Мониторинг изолированных сред обучения: сколько раз поднимался сервис, длительность сессий, потребление ресурсов модели.',
      f3Title: 'Инфобез и аудит',
      f3Text:
        'Цепочки событий, аномалии доступа и трассировка действий — база для раздела информационной безопасности в дипломе.',
      f4Title: 'Единый кабинет',
      f4Text:
        'Дашборды по пользователям, тарифам и экспериментам. Экспорт отчётов для защиты и для заказчика.',
      howTitle: 'Как это работает',
      howSubtitle: 'Четыре шага от события до решения',
      howSteps: [
        {
          title: 'Сбор',
          text: 'Агенты и API забирают события тарифов, квот и телеметрию Isolation Service без изменения бизнес-логики.',
        },
        {
          title: 'Нормализация',
          text: 'Сырые события приводятся к единой схеме: пользователь, план, сессия, ресурс, результат.',
        },
        {
          title: 'Аналитика',
          text: 'Дашборды, срезы, алерты перерасхода и аномалий — для админа и для самого пользователя.',
        },
        {
          title: 'Отчёты',
          text: 'CSV/PDF и API для диплома, аудита инфобеза и интеграции с внешним биллингом.',
        },
      ],
      audienceTitle: 'Кому подходит',
      audience: [
        {
          title: 'Диплом / ВКР',
          text: 'Готовый контур: метрики, инфобез, прогноз и демо-сценарий защиты.',
        },
        {
          title: 'Команды MLOps',
          text: 'Прозрачность Isolation Service и стоимости обучения моделей.',
        },
        {
          title: 'Продуктовые SaaS',
          text: 'Понимание, кто сжигает квоту и когда предлагать апгрейд тарифа.',
        },
      ],
      scenariosTitle: 'Сценарии использования',
      scenariosSubtitle: 'Типовые истории, которые закрывает Око эфора',
      scenarios: [
        {
          title: 'Перерасход тарифа',
          text: 'Пользователь упёрся в лимит запросов. Pulse показывает, какие сервисы и Isolation-сессии съели квоту, и предлагает апгрейд до конца периода.',
        },
        {
          title: 'Дорогое обучение модели',
          text: 'Isolation Trace связывает GPU-часы сессии с тарифом. Команда видит «цену» эксперимента до следующего прогона.',
        },
        {
          title: 'Подозрительный доступ',
          text: 'InfoBez Ledger фиксирует аномальный вход и цепочку действий. Sentinel поднимает алерт; Compliance сохраняет неизменяемый след.',
        },
        {
          title: 'Защита диплома',
          text: 'Пять минут живого демо: дашборд → сессия Isolation → алерт → audit-отчёт. Комиссия видит путь от данных до вывода.',
        },
      ],
      metricsStrip: [
        { value: '≤ 2 мин', label: 'от события до дашборда' },
        { value: '99.5%', label: 'целевая доставка метрик' },
        { value: '30/180', label: 'дни hot / warm хранения' },
        { value: 'RU+EN', label: 'интерфейс и отчёты' },
      ],
      faqTitle: 'Коротко о платформе',
      faq: [
        {
          q: 'Это SIEM или биллинг?',
          a: 'Ни то ни другое целиком: Око эфора — аналитика потребления тарифов и Isolation Service с аудитом инфобеза поверх нормализованных событий.',
        },
        {
          q: 'Нужно ли менять Isolation Service?',
          a: 'Нет. Сбор идёт через агенты и API; бизнес-логика обучения не переписывается.',
        },
        {
          q: 'Подойдёт ли для диплома?',
          a: 'Да: ядро, раздел ИБ, ML-расширения и готовый сценарий защиты входят в дорожную карту продукта.',
        },
      ],
      qualityTitle: 'Платформа, которую можно расширять',
      qualityP1:
        'Архитектура заточена под модули: сначала метрики тарифов и Isolation Service, затем прогноз квот, детект аномалий и compliance-журнал.',
      qualityP2:
        'Данные нормализуются один раз — поверх них можно строить новые продукты без переписывания пайплайна сбора.',
      qualityCta: 'Подробнее о продукте',
      ctaTitle: 'Нужна аналитика под ваш контур?',
      ctaText:
        'Расскажем, как подключить метрики тарифов и Isolation Service к вашему стенду или дипломному проекту.',
      productsTitle: 'Линейка модулей',
      productsSubtitle:
        'Ядро — аналитика тарифов и Isolation Service. Остальное — идеи для расширения дипломной работы.',
      p1Badge: 'Ядро',
      p1Title: 'Ephor Pulse',
      p1Desc: 'Дашборд тарифов и квот пользователей',
      p1Price: 'Базовый',
      p2Title: 'Isolation Trace',
      p2Desc: 'Учёт запусков Isolation Service и обучения',
      p2Price: 'Базовый',
      p3Badge: 'Диплом+',
      p3Title: 'InfoBez Ledger',
      p3Desc: 'Журнал событий и аудит доступа',
      p3Price: 'Модуль',
      p4Title: 'Quota Forecast',
      p4Desc: 'Прогноз расхода тарифа на ML',
      p4Price: 'Модуль',
    },
    product: {
      badge: 'Продуктовая линейка',
      title: 'Око эфора — экосистема аналитики потребления',
      lead:
        'Главная задача платформы — показать, как пользователи расходуют тарифы и сколько Isolation Service используется для обучения моделей. Ниже — ядро и модули, которые можно доработать в дипломе.',
      introExtra:
        'В отличие от классических лог-агрегаторов, Око эфора сразу отвечает на продуктовые вопросы: кто перерасходовал план, какая сессия обучения «съела» GPU, есть ли аномалия доступа. Это и есть основа дипломной работы — от сбора данных до управленческих выводов.',
      coreTitle: 'Модули платформы',
      flowTitle: 'Поток данных',
      flowSteps: [
        'Событие тарифа / Isolation → очередь',
        'Нормализатор и обогащение (user, plan, model)',
        'Time-series + журнал инфобеза',
        'API дашбордов, алерты, экспорт',
      ],
      thesisTitle: 'Дорожная карта для диплома',
      thesisSteps: [
        {
          title: 'Глава 1 — Ядро',
          text: 'Реализовать Ephor Pulse и Isolation Trace: учёт квот и сессий обучения.',
        },
        {
          title: 'Глава 2 — Инфобез',
          text: 'InfoBez Ledger: роли, журнал доступов, корреляция событий.',
        },
        {
          title: 'Глава 3 — ML-слой',
          text: 'Quota Forecast и Anomaly Sentinel на исторических метриках.',
        },
        {
          title: 'Глава 4 — Compliance',
          text: 'Compliance Trace и Sandbox Lab для демонстрации на защите.',
        },
      ],
      moduleCompareTitle: 'Сравнение модулей',
      moduleCompareHeaders: ['Модуль', 'Задача', 'Данные на входе', 'Артефакт'],
      moduleCompareRows: [
        ['Ephor Pulse', 'KPI тарифов и квот', 'usage events, plans', 'Дашборд + CSV/PDF'],
        ['Isolation Trace', 'Учёт обучения', 'session telemetry', 'Карточка сессии'],
        ['InfoBez Ledger', 'Аудит доступа', 'auth/access events', 'Журнал + роли'],
        ['Quota Forecast', 'Прогноз расхода', 'time-series usage', 'Прогноз + what-if'],
        ['Anomaly Sentinel', 'Детект аномалий', 'метрики + журнал', 'Алерт / инцидент'],
        ['Compliance Trace', 'Неизменяемый след', 'audit records', 'Хеш-цепочка'],
        ['Sandbox Lab', 'Безопасные эксперименты', 'isolated quotas', 'Сравнение прогонов'],
      ],
      products: [
        {
          name: 'Ephor Pulse',
          tag: 'Ядро',
          desc: 'Аналитика тарифов: запросы, квоты, GPU/CPU-часы, сравнение планов, алерты о перерасходе.',
          points: ['Пользовательские дашборды', 'Срезы по тарифам', 'Экспорт CSV / PDF'],
        },
        {
          name: 'Isolation Trace',
          tag: 'Ядро',
          desc: 'Учёт Isolation Service: число сессий обучения, длительность, потребление памяти и артефакты прогонов.',
          points: ['Трассировка сессий', 'Метрики модели', 'Связь с тарифом пользователя'],
        },
        {
          name: 'InfoBez Ledger',
          tag: 'Инфобез',
          desc: 'Не «просто логи», а структурированный журнал: кто, когда, к какому ресурсу, с каким результатом.',
          points: ['Цепочки событий', 'Роли и доступы', 'Отчёты для аудита'],
        },
        {
          name: 'Quota Forecast',
          tag: 'ML',
          desc: 'Прогноз расхода квоты до конца биллинг-периода на основе истории и паттернов Isolation Service.',
          points: ['Временные ряды', 'Рекомендации апгрейда', 'Сценарии «что если»'],
        },
        {
          name: 'Anomaly Sentinel',
          tag: 'Диплом+',
          desc: 'Детекция аномалий: всплески запросов, подозрительные сессии обучения, отклонения от профиля тарифа.',
          points: ['Базовые правила + ML', 'Алерты в Telegram', 'Карточки инцидентов'],
        },
        {
          name: 'Compliance Trace',
          tag: 'Диплом+',
          desc: 'Неизменяемый след действий для защиты диплома и демонстрации соответствия политикам ИБ.',
          points: ['Хеш-цепочки записей', 'Политики хранения', 'Выгрузка для комиссии'],
        },
        {
          name: 'Sandbox Lab',
          tag: 'R&D',
          desc: 'Песочница для экспериментов с Isolation Service без влияния на прод-квоты пользователей.',
          points: ['Изолированные квоты', 'Сравнение прогонов', 'Шаблоны экспериментов'],
        },
      ],
    },
    advantage: {
      badge: 'Почему Око эфора',
      title: 'Преимущества для продукта и диплома',
      lead: 'Платформа закрывает и прикладную задачу мониторинга, и исследовательскую часть — метрики, инфобез, прогноз.',
      leadExtra:
        'Ниже — сравнительный взгляд: что даёт Око эфора относительно «просто собрать логи» и типичных дашбордов без семантики тарифов.',
      compareTitle: 'Сравнение подходов',
      compareHeaders: ['Критерий', 'Сырые логи', 'Око эфора'],
      compareRows: [
        ['Смысл для бизнеса', 'Нужна ручная интерпретация', 'KPI тарифов и Isolation из коробки'],
        ['Инфобез', 'Разрозненные записи', 'Журнал, роли, аудит-отчёты'],
        ['Прогноз', 'Обычно отсутствует', 'Quota Forecast как модуль'],
        ['Демо на защите', 'Сложно показать ценность', 'Сценарий: метрика → алерт → отчёт'],
      ],
      items: [
        {
          title: 'Смысл, а не сырые логи',
          text: 'События превращаются в KPI: расход тарифа, утилизация Isolation Service, риск перерасхода. Админ видит картину за минуты, а не часы разбора.',
        },
        {
          title: 'Два слоя данных',
          text: 'Операционный слой для дашбордов и аудиторский слой для инфобеза — без смешивания в одном потоке. Это упрощает и разработку, и защиту ВКР.',
        },
        {
          title: 'Готово к расширению',
          text: 'Модульная схема: Pulse + Trace сейчас, Forecast / Sentinel / Compliance — следующие главы диплома без переписывания пайплайна.',
        },
        {
          title: 'Прозрачные тарифы',
          text: 'Пользователь видит, на что уходит квота; администратор — кто и как нагружает Isolation Service. Меньше споров о «куда делись лимиты».',
        },
        {
          title: 'Безопасность по умолчанию',
          text: 'Роли, маскирование чувствительных полей, журнал доступов к самой аналитике — отдельный блок для раздела информационной безопасности.',
        },
        {
          title: 'Демонстрабельность',
          text: 'Отчёты и визуализации, которые можно показать на защите без «чёрного ящика». Комиссия видит путь от данных до вывода.',
        },
      ],
      casesTitle: 'Кейсы',
      casesSubtitle: 'Как аналитика тарифов и Isolation меняет решения',
      cases: [
        {
          title: 'Стенд ВКР: от логов к защите',
          text: 'Студент подключил Pulse + Trace за неделю. На защите показал перерасход квоты, сессию Isolation и audit-выгрузку — без «чёрного ящика».',
          result: 'Защита принята, раздел ИБ закрыт метриками',
        },
        {
          title: 'MLOps: контроль GPU-бюджета',
          text: 'Команда видела суммарные GPU-часы, но не связывала их с тарифами пользователей. Isolation Trace + Forecast снизили сюрпризы в конце месяца.',
          result: '−27% незапланированного перерасхода квот',
        },
        {
          title: 'SaaS: апселл по фактам',
          text: 'Продукт предлагал апгрейд «вслепую». Pulse показал топ пользователей у потолка лимита и триггеры Isolation — sales получил список с цифрами.',
          result: 'Конверсия в апгрейд выросла на 18%',
        },
      ],
    },
    services: {
      badge: 'Сервисы',
      title: 'Что входит в контур Ока эфора',
      lead: 'От сбора метрик до отчётов для защиты и продакшена.',
      leadExtra:
        'Каждый сервис можно внедрять поэтапно: сначала метрики тарифов и Isolation, затем инфобез и прогноз. Ниже — состав работ и ожидаемые артефакты.',
      processTitle: 'Этапы внедрения',
      process: [
        {
          title: 'Диагностика',
          text: 'Разбираем текущий биллинг, Isolation Service и требования к инфобезу. Фиксируем модель данных.',
        },
        {
          title: 'Подключение',
          text: 'Ставим сборщики, нормализуем события, проверяем корректность квот и сессий на тестовом стенде.',
        },
        {
          title: 'Дашборды',
          text: 'Собираем панели для админа и пользователя, пороги алертов, роли доступа.',
        },
        {
          title: 'Расширение',
          text: 'Подключаем Forecast, Sentinel, Compliance — под задачи диплома или продакшена.',
        },
      ],
      deliverTitle: 'Что вы получаете',
      deliverables: [
        'Рабочий контур метрик тарифов и Isolation Service',
        'Документацию модели данных и API',
        'Набор дашбордов и шаблонов отчётов',
        'Сценарий демо для защиты / заказчика',
        'Матрицу ролей и политику хранения журнала',
        'Чек-лист приёмки стенда (метрики, алерты, экспорт)',
      ],
      items: [
        {
          title: 'Сбор метрик тарифов',
          text: 'Интеграция с биллингом / API квот: запросы, лимиты, фактическое потребление по пользователям. Поддержка срезов по дням и сервисам.',
        },
        {
          title: 'Мониторинг Isolation Service',
          text: 'Телеметрия сессий обучения: старт/стоп, длительность, ресурсы, статус модели. Связь каждой сессии с квотой пользователя.',
        },
        {
          title: 'Инфобез-журнал',
          text: 'Нормализованные события безопасности и доступ к ресурсам с возможностью поиска и корреляции. Готово к разделу ИБ в дипломе.',
        },
        {
          title: 'Дашборды и алерты',
          text: 'Панели для админа и пользователя, пороги, уведомления о перерасходе и аномалиях (email / Telegram).',
        },
        {
          title: 'Экспорт и API',
          text: 'REST/вебхуки для внешних систем, выгрузки для диплома и отчётности. Документированные эндпоинты.',
        },
        {
          title: 'Консалтинг внедрения',
          text: 'Помощь с моделью данных, ролями и сценариями под ваш стенд или ВКР. Академический режим для диплома.',
        },
      ],
    },
    price: {
      badge: 'Тарифы платформы',
      title: 'Прозрачные планы под стенд и прод',
      lead: 'Цены-ориентиры для презентации; в дипломе можно заменить на фактическую модель биллинга.',
      leadExtra:
        'Observer — для защиты и демо. Analyst — для небольшой команды. Ephor Pro — полный контур с ML и compliance.',
      includedTitle: 'Что входит во все планы',
      included: [
        'Базовые дашборды тарифов',
        'Учёт Isolation Service (с лимитами по плану)',
        'Экспорт отчётов',
        'Тема светлая / тёмная, RU / EN',
        'Базовые алерты перерасхода',
        'Документация модели данных',
      ],
      faqTitle: 'Частые вопросы по тарифам',
      faq: [
        {
          q: 'Можно ли использовать бесплатно для диплома?',
          a: 'Да. План Observer и академический режим рассчитаны на стенд ВКР с полным функционалом на ограниченной нагрузке.',
        },
        {
          q: 'Что считается «сессией» Isolation?',
          a: 'Один непрерывный прогон обучения в изолированной среде: от старта контейнера/сервиса до завершения или аварии.',
        },
        {
          q: 'Как сменить план позже?',
          a: 'Данные сохраняются. При апгрейде открываются модули Forecast, Sentinel, Compliance без миграции истории.',
        },
        {
          q: 'Что входит в Analyst, но не в Observer?',
          a: 'InfoBez Ledger, роли доступа, расширенные алерты и до 10 пользователей на проекте.',
        },
        {
          q: 'Нужен ли Ephor Pro для защиты?',
          a: 'Не обязательно. Observer/Analyst достаточно для ядра. Pro нужен, если демонстрируете Forecast, Sentinel, Compliance и Sandbox Lab.',
        },
      ],
      plans: [
        {
          name: 'Observer',
          price: '0 ₽',
          period: 'для демо / диплома',
          features: [
            'Ephor Pulse (базовый)',
            'Isolation Trace (лимит сессий)',
            '1 проект',
            'Экспорт CSV',
          ],
          cta: 'Начать',
          featured: false,
        },
        {
          name: 'Analyst',
          price: '4 900 ₽',
          period: '/ мес',
          features: [
            'Все модули ядра',
            'InfoBez Ledger',
            'Алерты и роли',
            'До 10 пользователей',
            'Поддержка по email',
          ],
          cta: 'Выбрать',
          featured: true,
        },
        {
          name: 'Ephor Pro',
          price: '14 900 ₽',
          period: '/ мес',
          features: [
            'Quota Forecast + Sentinel',
            'Compliance Trace',
            'Sandbox Lab',
            'Безлимит проектов',
            'Приоритетная поддержка',
          ],
          cta: 'Связаться',
          featured: false,
        },
      ],
      note: 'Для дипломной работы доступен академический режим: полный функционал на ограниченном стенде.',
    },
    docs: {
      badge: 'Документация',
      title: 'Как устроена платформа',
      lead: 'Карта для разработки и защиты. Детали API и схемы БД дополняйте по ходу реализации.',
      leadExtra:
        'Ниже — расширенные разделы: архитектура, метрики, Isolation Service, инфобез, расширения диплома и сценарий защиты.',
      sections: [
        {
          title: 'Архитектура',
          text: 'Сборщики метрик → очередь (например NATS/Redis/Kafka) → нормализатор → хранилище временных рядов + журнал событий → API дашбордов. Разделение write-path и read-path позволяет масштабировать сбор независимо от UI. Для диплома достаточно одной ноды; в проде — горизонтальное масштабирование воркеров.',
          bullets: [
            'Write-path: collectors → queue → normalizer',
            'Read-path: time-series + journal → dashboard API',
            'Одна нода для стенда ВКР, воркеры — для прода',
            'Идемпотентность событий по event_id',
          ],
        },
        {
          title: 'Метрики тарифов',
          text: 'Сущности: user, plan, period. Меры: requests, gpu_hours, storage_gb, overage. Измерения: day, service, region. Рекомендуемые агрегаты: расход за сутки, % утилизации квоты, топ пользователей по перерасходу. Экспорт: CSV для Excel и PDF для приложения к ВКР.',
          bullets: [
            'Сущности: user, plan, period',
            'Меры: requests, gpu_hours, storage_gb, overage',
            'Срезы: day, service, region',
            'Экспорт: CSV и PDF',
          ],
        },
        {
          title: 'Isolation Service',
          text: 'Поля сессии: session_id, model_id, started_at, ended_at, resource_profile, training_status, linked_user_quota. Считайте длительность, пиковое потребление RAM/GPU и число рестартов. Связка с тарифом показывает «цену» каждого обучения в единицах квоты.',
          bullets: [
            'session_id + model_id + статус обучения',
            'Длительность и пик RAM/GPU',
            'Число рестартов сессии',
            'Связь с квотой пользователя',
          ],
        },
        {
          title: 'Инфобез',
          text: 'Типы событий: auth, access, config_change, anomaly. Роли: viewer / analyst / admin. Политики хранения: hot 30 дней, warm 180, cold архив. Маскируйте PII в журнале. Для диплома подготовьте выборку инцидентов и цепочку «событие → расследование → отчёт».',
          bullets: [
            'События: auth, access, config_change, anomaly',
            'Роли: viewer / analyst / admin',
            'Хранение: hot 30 / warm 180 / cold архив',
            'Маскирование PII в журнале',
          ],
        },
        {
          title: 'Расширения диплома',
          text: 'Forecast — прогноз расхода квоты (ARIMA/Prophet/простая регрессия). Sentinel — правила + ML на отклонениях. Compliance — хеш-цепочка записей. Sandbox Lab — отдельный namespace квот для экспериментов без влияния на прод.',
          bullets: [
            'Quota Forecast — прогноз burn-rate',
            'Anomaly Sentinel — правила + ML',
            'Compliance Trace — хеш-цепочка',
            'Sandbox Lab — изолированные квоты',
          ],
        },
        {
          title: 'Демо-сценарий защиты',
          text: '1) Показать расход тарифа пользователя. 2) Открыть сессию Isolation и ресурсы. 3) Спровоцировать/показать алерт аномалии. 4) Выгрузить audit-отчёт. 5) Кратко описать, какой модуль добавите следующим. Уложитесь в 5–7 минут живого демо.',
          bullets: [
            'Дашборд тарифа пользователя',
            'Карточка Isolation-сессии',
            'Алерт аномалии вживую',
            'Выгрузка audit-отчёта',
            'План следующего модуля (30 сек)',
          ],
        },
        {
          title: 'API (черновик)',
          text: 'GET /api/v1/usage?user=&from=&to= — расход тарифа. GET /api/v1/isolation/sessions — список сессий. GET /api/v1/security/events — журнал. POST /api/v1/alerts/test — проверка алерта. Авторизация: Bearer token (в демо — mock session).',
          bullets: [
            'GET /api/v1/usage',
            'GET /api/v1/isolation/sessions',
            'GET /api/v1/security/events',
            'POST /api/v1/alerts/test',
            'Auth: Bearer (demo mock session)',
          ],
        },
      ],
    },
    footer: {
      contact: 'Свяжитесь с нами',
      telegram: 'Наш телеграм',
      namePh: 'Ваше имя',
      emailPh: 'Ваша почта',
      msgPh: 'Интересует аналитика тарифов / Isolation Service...',
      send: 'Отправить запрос',
      sending: 'Отправка...',
      successTitle: 'Заявка отправлена!',
      successText: 'Скоро с вами свяжутся',
      wait: 'Буду ждать',
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
      consent: 'Согласие на обработку данных',
      offer: 'Публичная оферта',
      fixErrors: 'Пожалуйста, исправьте ошибки в форме.',
    },
    common: {
      learnMore: 'Подробнее',
    },
  },
  en: {
    nav: {
      product: 'Product',
      advantage: 'Advantages',
      services: 'Services',
      documentation: 'Docs',
      price: 'Pricing',
      request: 'Request demo',
      login: 'Sign in',
      search: 'Search the site...',
      searchBtn: 'Search',
      searchEmpty: 'Nothing found for “{q}”.',
      brand: 'Eye of Ephor',
      tagline: 'Tariff & Isolation Service analytics',
      theme: 'Toggle theme',
      menu: 'Menu',
      lang: 'RU',
    },
    auth: {
      loginTitle: 'Sign in to Eye of Ephor',
      loginSubtitle: 'Tariff & Isolation Service analytics',
      registerTitle: 'Create an account',
      registerSubtitle: 'Start monitoring consumption in minutes',
      email: 'Email',
      emailPh: 'name@company.com',
      password: 'Password',
      passwordPh: '••••••••',
      name: 'Name',
      namePh: 'Jane Doe',
      confirmPassword: 'Confirm password',
      loginBtn: 'Sign in',
      registerBtn: 'Sign up',
      forgot: 'Forgot password?',
      noAccount: 'No account?',
      hasAccount: 'Already have an account?',
      signUpLink: 'Sign up',
      signInLink: 'Sign in',
      orContinue: 'or',
      demoHint: 'Demo mode: users are stored locally in your browser.',
      errorEmpty: 'Please fill in all fields.',
      errorNotFound: 'Account not found. Sign up to continue.',
      errorBadPassword: 'Incorrect password.',
      errorExists: 'This email is already registered. Sign in.',
      errorMismatch: 'Passwords do not match.',
      errorShort: 'Password must be at least 6 characters.',
      goRegister: 'Go to registration',
      successRegister: 'Account created. Redirecting…',
      successLogin: 'Signed in. Redirecting…',
    },
    home: {
      heroTitle: 'See how every user actually spends their tariff',
      heroText:
        'Eye of Ephor is a consumption analytics platform: plans, quotas, and Isolation Service load during model training. Not just logs — actionable metrics for your thesis, product, and production.',
      heroCta: 'Explore product',
      heroCtaSecondary: 'Documentation',
      statsUsers: 'Users on the lab stand',
      statsMetrics: 'Core metrics',
      statsModules: 'Modules in the suite',
      featuresTitle: 'From raw logs to decisions',
      featuresSubtitle: 'We measure usage — we don’t only collect events',
      f1Title: 'Tariff analytics',
      f1Text:
        'Requests, GPU hours, and quotas per user. Plan comparison, overages, and forecasts to period end.',
      f2Title: 'Isolation Service',
      f2Text:
        'Monitor isolated training environments: service spins, session length, and model resource burn.',
      f3Title: 'Security & audit',
      f3Text:
        'Event chains, access anomalies, and action tracing — a solid info-sec chapter for your thesis.',
      f4Title: 'One control plane',
      f4Text:
        'Dashboards by user, plan, and experiment. Export reports for defense boards and customers.',
      howTitle: 'How it works',
      howSubtitle: 'Four steps from event to decision',
      howSteps: [
        {
          title: 'Collect',
          text: 'Agents and APIs pull tariff events, quotas, and Isolation Service telemetry without changing business logic.',
        },
        {
          title: 'Normalize',
          text: 'Raw events map to one schema: user, plan, session, resource, outcome.',
        },
        {
          title: 'Analyze',
          text: 'Dashboards, slices, overage and anomaly alerts — for admins and end users.',
        },
        {
          title: 'Report',
          text: 'CSV/PDF and APIs for thesis defense, security audits, and external billing.',
        },
      ],
      audienceTitle: 'Who it’s for',
      audience: [
        {
          title: 'Thesis / diploma',
          text: 'Ready contour: metrics, info-sec, forecasting, and a defense demo script.',
        },
        {
          title: 'MLOps teams',
          text: 'Visibility into Isolation Service and the cost of model training.',
        },
        {
          title: 'SaaS products',
          text: 'Know who burns quota and when to suggest a plan upgrade.',
        },
      ],
      scenariosTitle: 'Use cases',
      scenariosSubtitle: 'Typical stories Eye of Ephor covers',
      scenarios: [
        {
          title: 'Tariff overage',
          text: 'A user hits the request limit. Pulse shows which services and Isolation sessions burned quota and suggests an upgrade before period end.',
        },
        {
          title: 'Expensive model training',
          text: 'Isolation Trace ties GPU hours of a session to the tariff. The team sees the “price” of an experiment before the next run.',
        },
        {
          title: 'Suspicious access',
          text: 'InfoBez Ledger records an anomalous login and action chain. Sentinel raises an alert; Compliance keeps an immutable trail.',
        },
        {
          title: 'Thesis defense',
          text: 'Five minutes live: dashboard → Isolation session → alert → audit export. The committee sees the path from data to conclusion.',
        },
      ],
      metricsStrip: [
        { value: '≤ 2 min', label: 'event to dashboard' },
        { value: '99.5%', label: 'target metric delivery' },
        { value: '30/180', label: 'hot / warm retention days' },
        { value: 'RU+EN', label: 'UI and reports' },
      ],
      faqTitle: 'Platform FAQ',
      faq: [
        {
          q: 'Is this a SIEM or billing?',
          a: 'Neither fully: Eye of Ephor is tariff and Isolation Service consumption analytics with a security audit layer on normalized events.',
        },
        {
          q: 'Do we need to change Isolation Service?',
          a: 'No. Collection uses agents and APIs; training business logic stays untouched.',
        },
        {
          q: 'Is it thesis-ready?',
          a: 'Yes: core, info-sec chapter, ML extensions, and a defense demo script are part of the product roadmap.',
        },
      ],
      qualityTitle: 'A platform built to grow',
      qualityP1:
        'Modular by design: start with tariff + Isolation Service metrics, then add quota forecasts, anomaly detection, and a compliance ledger.',
      qualityP2:
        'Normalize data once — ship new products on top without rewriting the ingestion pipeline.',
      qualityCta: 'Product details',
      ctaTitle: 'Need analytics for your stack?',
      ctaText:
        'We’ll show how to wire tariff and Isolation Service metrics into your lab or thesis project.',
      productsTitle: 'Module lineup',
      productsSubtitle:
        'Core = tariff analytics + Isolation Service. The rest are expansion ideas for your diploma.',
      p1Badge: 'Core',
      p1Title: 'Ephor Pulse',
      p1Desc: 'User tariff & quota dashboard',
      p1Price: 'Core',
      p2Title: 'Isolation Trace',
      p2Desc: 'Isolation Service run accounting',
      p2Price: 'Core',
      p3Badge: 'Thesis+',
      p3Title: 'InfoBez Ledger',
      p3Desc: 'Security event journal & access audit',
      p3Price: 'Module',
      p4Title: 'Quota Forecast',
      p4Desc: 'ML tariff burn prediction',
      p4Price: 'Module',
    },
    product: {
      badge: 'Product suite',
      title: 'Eye of Ephor — consumption analytics ecosystem',
      lead:
        'The platform’s job is to show how users spend tariffs and how much Isolation Service is used for model training. Below: core and diploma-ready modules.',
      introExtra:
        'Unlike classic log aggregators, Eye of Ephor answers product questions immediately: who overspent the plan, which training session burned GPU, is there an access anomaly. That path — from data to decisions — is the backbone of a thesis.',
      coreTitle: 'Platform modules',
      flowTitle: 'Data flow',
      flowSteps: [
        'Tariff / Isolation event → queue',
        'Normalizer + enrichment (user, plan, model)',
        'Time-series + security journal',
        'Dashboard API, alerts, export',
      ],
      thesisTitle: 'Thesis roadmap',
      thesisSteps: [
        {
          title: 'Chapter 1 — Core',
          text: 'Ship Ephor Pulse and Isolation Trace: quotas and training sessions.',
        },
        {
          title: 'Chapter 2 — Security',
          text: 'InfoBez Ledger: roles, access journal, event correlation.',
        },
        {
          title: 'Chapter 3 — ML layer',
          text: 'Quota Forecast and Anomaly Sentinel on historical metrics.',
        },
        {
          title: 'Chapter 4 — Compliance',
          text: 'Compliance Trace and Sandbox Lab for the defense demo.',
        },
      ],
      moduleCompareTitle: 'Module comparison',
      moduleCompareHeaders: ['Module', 'Job', 'Input data', 'Artifact'],
      moduleCompareRows: [
        ['Ephor Pulse', 'Tariff & quota KPIs', 'usage events, plans', 'Dashboard + CSV/PDF'],
        ['Isolation Trace', 'Training accounting', 'session telemetry', 'Session card'],
        ['InfoBez Ledger', 'Access audit', 'auth/access events', 'Journal + roles'],
        ['Quota Forecast', 'Burn forecast', 'time-series usage', 'Forecast + what-if'],
        ['Anomaly Sentinel', 'Anomaly detection', 'metrics + journal', 'Alert / incident'],
        ['Compliance Trace', 'Immutable trail', 'audit records', 'Hash chain'],
        ['Sandbox Lab', 'Safe experiments', 'isolated quotas', 'Run comparison'],
      ],
      products: [
        {
          name: 'Ephor Pulse',
          tag: 'Core',
          desc: 'Tariff analytics: requests, quotas, GPU/CPU hours, plan comparison, overage alerts.',
          points: ['User dashboards', 'Plan slices', 'CSV / PDF export'],
        },
        {
          name: 'Isolation Trace',
          tag: 'Core',
          desc: 'Isolation Service accounting: training sessions, duration, memory, run artifacts.',
          points: ['Session tracing', 'Model metrics', 'Linked to user quota'],
        },
        {
          name: 'InfoBez Ledger',
          tag: 'Security',
          desc: 'Not “just logs” — a structured journal: who, when, which resource, what result.',
          points: ['Event chains', 'Roles & access', 'Audit reports'],
        },
        {
          name: 'Quota Forecast',
          tag: 'ML',
          desc: 'Predict quota burn to billing period end from history and Isolation Service patterns.',
          points: ['Time series', 'Upgrade hints', 'What-if scenarios'],
        },
        {
          name: 'Anomaly Sentinel',
          tag: 'Thesis+',
          desc: 'Anomaly detection: request spikes, suspicious training sessions, plan-profile drift.',
          points: ['Rules + ML', 'Telegram alerts', 'Incident cards'],
        },
        {
          name: 'Compliance Trace',
          tag: 'Thesis+',
          desc: 'Immutable action trail for thesis defense and policy compliance demos.',
          points: ['Hash-chained records', 'Retention policies', 'Export for committee'],
        },
        {
          name: 'Sandbox Lab',
          tag: 'R&D',
          desc: 'Sandbox for Isolation Service experiments without touching production user quotas.',
          points: ['Isolated quotas', 'Run comparison', 'Experiment templates'],
        },
      ],
    },
    advantage: {
      badge: 'Why Eye of Ephor',
      title: 'Advantages for product and thesis',
      lead: 'Covers applied monitoring and research: metrics, info-sec, forecasting.',
      leadExtra:
        'Below is a comparison: Eye of Ephor versus “just collect logs” and dashboards without tariff semantics.',
      compareTitle: 'Approach comparison',
      compareHeaders: ['Criterion', 'Raw logs', 'Eye of Ephor'],
      compareRows: [
        ['Business meaning', 'Manual interpretation', 'Tariff & Isolation KPIs out of the box'],
        ['Info security', 'Scattered records', 'Journal, roles, audit reports'],
        ['Forecasting', 'Usually missing', 'Quota Forecast as a module'],
        ['Defense demo', 'Hard to show value', 'Script: metric → alert → report'],
      ],
      items: [
        {
          title: 'Meaning, not raw logs',
          text: 'Events become KPIs: tariff burn, Isolation Service utilization, overage risk. Admins see the picture in minutes, not hours of digging.',
        },
        {
          title: 'Two data layers',
          text: 'Operational dashboards and an audit layer for security — never mixed in one stream. Easier to build and to defend as a thesis.',
        },
        {
          title: 'Built to extend',
          text: 'Modular: Pulse + Trace now; Forecast / Sentinel / Compliance as next thesis chapters without rewriting ingestion.',
        },
        {
          title: 'Transparent plans',
          text: 'Users see where quota goes; admins see who loads Isolation Service and how. Fewer debates about “where the limits went”.',
        },
        {
          title: 'Secure by default',
          text: 'Roles, sensitive-field masking, and an access journal for the analytics itself — a ready info-sec chapter.',
        },
        {
          title: 'Demo-ready',
          text: 'Reports and visuals you can show at defense — no black box. The committee sees the path from data to conclusion.',
        },
      ],
      casesTitle: 'Case studies',
      casesSubtitle: 'How tariff and Isolation analytics change decisions',
      cases: [
        {
          title: 'Thesis lab: from logs to defense',
          text: 'A student wired Pulse + Trace in a week. At defense they showed quota overage, an Isolation session, and an audit export — no black box.',
          result: 'Defense passed; info-sec chapter backed by metrics',
        },
        {
          title: 'MLOps: GPU budget control',
          text: 'The team saw total GPU hours but not the link to user tariffs. Isolation Trace + Forecast cut end-of-month surprises.',
          result: '−27% unplanned quota overage',
        },
        {
          title: 'SaaS: evidence-based upsell',
          text: 'Upgrades were offered blindly. Pulse surfaced users near the limit and Isolation triggers — sales got a list with numbers.',
          result: '+18% upgrade conversion',
        },
      ],
    },
    services: {
      badge: 'Services',
      title: 'What’s inside the Eye of Ephor contour',
      lead: 'From metric collection to thesis and production reports.',
      leadExtra:
        'Roll out services in stages: tariffs and Isolation first, then security and forecasting. Below — scope of work and expected artifacts.',
      processTitle: 'Implementation stages',
      process: [
        {
          title: 'Discovery',
          text: 'Review billing, Isolation Service, and security requirements. Lock the data model.',
        },
        {
          title: 'Connect',
          text: 'Deploy collectors, normalize events, validate quotas and sessions on a lab stand.',
        },
        {
          title: 'Dashboards',
          text: 'Build admin and user panels, alert thresholds, access roles.',
        },
        {
          title: 'Extend',
          text: 'Add Forecast, Sentinel, Compliance for thesis or production goals.',
        },
      ],
      deliverTitle: 'What you get',
      deliverables: [
        'Working tariff + Isolation Service metrics contour',
        'Data model and API documentation',
        'Dashboard set and report templates',
        'Demo script for defense / customer',
        'Role matrix and journal retention policy',
        'Lab acceptance checklist (metrics, alerts, export)',
      ],
      items: [
        {
          title: 'Tariff metric collection',
          text: 'Billing / quota API integration: requests, limits, actual consumption per user. Day and service slices supported.',
        },
        {
          title: 'Isolation Service monitoring',
          text: 'Training session telemetry: start/stop, duration, resources, model status. Each session linked to user quota.',
        },
        {
          title: 'Security journal',
          text: 'Normalized security events and resource access with search and correlation. Ready for the thesis security chapter.',
        },
        {
          title: 'Dashboards & alerts',
          text: 'Admin and user panels, thresholds, overage and anomaly notifications (email / Telegram).',
        },
        {
          title: 'Export & API',
          text: 'REST/webhooks for external systems, exports for thesis and reporting. Documented endpoints.',
        },
        {
          title: 'Implementation consulting',
          text: 'Help with data model, roles, and scenarios for your lab or thesis. Academic mode available.',
        },
      ],
    },
    price: {
      badge: 'Platform plans',
      title: 'Clear plans for lab and production',
      lead: 'Orientative pricing for the pitch; replace with your real billing model in the thesis.',
      leadExtra:
        'Observer — for defense and demos. Analyst — for a small team. Ephor Pro — full contour with ML and compliance.',
      includedTitle: 'Included in every plan',
      included: [
        'Basic tariff dashboards',
        'Isolation Service accounting (plan limits apply)',
        'Report export',
        'Light / dark theme, RU / EN',
        'Basic overage alerts',
        'Data model documentation',
      ],
      faqTitle: 'Pricing FAQ',
      faq: [
        {
          q: 'Can I use it free for a thesis?',
          a: 'Yes. Observer and academic mode target a thesis lab stand with full features under limited load.',
        },
        {
          q: 'What counts as an Isolation “session”?',
          a: 'One continuous training run in an isolated environment: from service/container start to completion or failure.',
        },
        {
          q: 'Can I change plans later?',
          a: 'Data is kept. Upgrading unlocks Forecast, Sentinel, and Compliance without migrating history.',
        },
        {
          q: 'What does Analyst add over Observer?',
          a: 'InfoBez Ledger, access roles, richer alerts, and up to 10 users per project.',
        },
        {
          q: 'Do I need Ephor Pro for defense?',
          a: 'Not required. Observer/Analyst cover the core. Pro is for demos of Forecast, Sentinel, Compliance, and Sandbox Lab.',
        },
      ],
      plans: [
        {
          name: 'Observer',
          price: '$0',
          period: 'demo / thesis',
          features: [
            'Ephor Pulse (basic)',
            'Isolation Trace (session cap)',
            '1 project',
            'CSV export',
          ],
          cta: 'Start',
          featured: false,
        },
        {
          name: 'Analyst',
          price: '$59',
          period: '/ mo',
          features: [
            'All core modules',
            'InfoBez Ledger',
            'Alerts & roles',
            'Up to 10 users',
            'Email support',
          ],
          cta: 'Choose',
          featured: true,
        },
        {
          name: 'Ephor Pro',
          price: '$179',
          period: '/ mo',
          features: [
            'Quota Forecast + Sentinel',
            'Compliance Trace',
            'Sandbox Lab',
            'Unlimited projects',
            'Priority support',
          ],
          cta: 'Contact us',
          featured: false,
        },
      ],
      note: 'Academic mode available for thesis work: full features on a limited lab stand.',
    },
    docs: {
      badge: 'Documentation',
      title: 'How the platform works',
      lead: 'A map for development and defense. Extend API and DB schemas as you implement.',
      leadExtra:
        'Expanded sections below: architecture, metrics, Isolation Service, security, thesis extensions, and defense script.',
      sections: [
        {
          title: 'Architecture',
          text: 'Collectors → queue (NATS/Redis/Kafka) → normalizer → time-series store + event journal → dashboard API. Separating write-path and read-path scales collection independently of the UI. One node is enough for a thesis; production adds worker replicas.',
          bullets: [
            'Write-path: collectors → queue → normalizer',
            'Read-path: time-series + journal → dashboard API',
            'Single node for thesis lab; workers for production',
            'Idempotent events via event_id',
          ],
        },
        {
          title: 'Tariff metrics',
          text: 'Entities: user, plan, period. Measures: requests, gpu_hours, storage_gb, overage. Dimensions: day, service, region. Recommended aggregates: daily burn, % quota used, top overspenders. Export: CSV for Excel and PDF for thesis appendices.',
          bullets: [
            'Entities: user, plan, period',
            'Measures: requests, gpu_hours, storage_gb, overage',
            'Slices: day, service, region',
            'Export: CSV and PDF',
          ],
        },
        {
          title: 'Isolation Service',
          text: 'Session fields: session_id, model_id, started_at, ended_at, resource_profile, training_status, linked_user_quota. Track duration, peak RAM/GPU, restart count. Linking to the tariff shows the “cost” of each training run in quota units.',
          bullets: [
            'session_id + model_id + training status',
            'Duration and peak RAM/GPU',
            'Session restart count',
            'Link to user quota',
          ],
        },
        {
          title: 'Info security',
          text: 'Event types: auth, access, config_change, anomaly. Roles: viewer / analyst / admin. Retention: hot 30 days, warm 180, cold archive. Mask PII in the journal. For the thesis, prepare an incident sample and the chain “event → investigation → report”.',
          bullets: [
            'Events: auth, access, config_change, anomaly',
            'Roles: viewer / analyst / admin',
            'Retention: hot 30 / warm 180 / cold archive',
            'PII masking in the journal',
          ],
        },
        {
          title: 'Thesis extensions',
          text: 'Forecast — quota burn prediction. Sentinel — rules + ML on deviations. Compliance — hash-chained records. Sandbox Lab — a separate quota namespace for experiments.',
          bullets: [
            'Quota Forecast — burn-rate prediction',
            'Anomaly Sentinel — rules + ML',
            'Compliance Trace — hash chain',
            'Sandbox Lab — isolated quotas',
          ],
        },
        {
          title: 'Defense demo script',
          text: '1) Show a user’s tariff burn. 2) Open an Isolation session and resources. 3) Show an anomaly alert. 4) Export an audit report. 5) Briefly state the next module. Aim for a 5–7 minute live demo.',
          bullets: [
            'User tariff dashboard',
            'Isolation session card',
            'Live anomaly alert',
            'Audit report export',
            'Next module plan (30 sec)',
          ],
        },
        {
          title: 'API (draft)',
          text: 'GET /api/v1/usage?user=&from=&to= — tariff usage. GET /api/v1/isolation/sessions — sessions. GET /api/v1/security/events — journal. POST /api/v1/alerts/test — alert check. Auth: Bearer token (demo uses a mock session).',
          bullets: [
            'GET /api/v1/usage',
            'GET /api/v1/isolation/sessions',
            'GET /api/v1/security/events',
            'POST /api/v1/alerts/test',
            'Auth: Bearer (demo mock session)',
          ],
        },
      ],
    },
    footer: {
      contact: 'Contact us',
      telegram: 'Our Telegram',
      namePh: 'Your name',
      emailPh: 'Your email',
      msgPh: 'Interested in tariff / Isolation Service analytics...',
      send: 'Send request',
      sending: 'Sending...',
      successTitle: 'Request sent!',
      successText: 'We will contact you soon',
      wait: 'Got it',
      rights: 'All rights reserved.',
      privacy: 'Privacy policy',
      consent: 'Consent to data processing',
      offer: 'Public offer',
      fixErrors: 'Please fix the errors in the form.',
    },
    common: {
      learnMore: 'Learn more',
    },
  },
} as const;

export type Translations = (typeof translations)['ru'];
