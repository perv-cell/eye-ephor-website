export interface SearchItem {
  title: string;
  description: string;
  url: string;
  keywords: string[];
}

export const searchData: SearchItem[] = [
  {
    title: 'Главная / Home',
    description: 'Аналитика тарифов и Isolation Service. Око эфора.',
    url: '/',
    keywords: [
      'главная',
      'око эфора',
      'eye ephor',
      'аналитика',
      'тарифы',
      'isolation',
      'home',
      'dashboard',
    ],
  },
  {
    title: 'Продукт / Product',
    description: 'Ephor Pulse, Isolation Trace, InfoBez Ledger и модули диплома.',
    url: '/product',
    keywords: [
      'продукт',
      'product',
      'pulse',
      'isolation trace',
      'infobez',
      'forecast',
      'sentinel',
      'sandbox',
    ],
  },
  {
    title: 'Преимущества / Advantages',
    description: 'Почему Око эфора для продукта и дипломной работы.',
    url: '/advantage',
    keywords: ['преимущества', 'advantages', 'диплом', 'thesis', 'метрики', 'инфобез'],
  },
  {
    title: 'Сервисы / Services',
    description: 'Сбор метрик, мониторинг Isolation Service, дашборды и API.',
    url: '/services',
    keywords: ['сервисы', 'services', 'метрики', 'мониторинг', 'api', 'алерты'],
  },
  {
    title: 'Цены / Pricing',
    description: 'Observer, Analyst, Ephor Pro — планы платформы.',
    url: '/price',
    keywords: ['цены', 'pricing', 'тарифы', 'планы', 'observer', 'analyst', 'pro'],
  },
  {
    title: 'Документация / Docs',
    description: 'Архитектура, метрики тарифов, Isolation Service, сценарий защиты.',
    url: '/documentation',
    keywords: [
      'документация',
      'docs',
      'архитектура',
      'api',
      'метрики',
      'защита',
      'диплом',
    ],
  },
  {
    title: 'Isolation Service',
    description: 'Учёт сессий обучения и потребления ресурсов модели.',
    url: '/product',
    keywords: [
      'isolation',
      'service',
      'обучение',
      'training',
      'модель',
      'model',
      'сессии',
    ],
  },
  {
    title: 'Вход / Login',
    description: 'Войти в Око эфора. Email и пароль.',
    url: '/login',
    keywords: ['вход', 'login', 'sign in', 'авторизация', 'аккаунт'],
  },
  {
    title: 'Регистрация / Register',
    description: 'Создать аккаунт Око эфора.',
    url: '/register',
    keywords: ['регистрация', 'register', 'sign up', 'signup', 'создать аккаунт'],
  },
  {
    title: 'Публичная оферта',
    description: 'Договор оказания услуг и условия работы.',
    url: '/offer',
    keywords: ['оферта', 'договор', 'условия', 'offer'],
  },
  {
    title: 'Политика конфиденциальности',
    description: 'Как обрабатываются персональные данные.',
    url: '/privacy-policy',
    keywords: ['политика', 'конфиденциальность', 'privacy', 'данные'],
  },
];
