export type Lang = 'en' | 'uk';
export const github = 'https://github.com/andrew-berezovskyi';
export const certificate =
  'https://www.freecodecamp.org/certification/fcc-0dfe0baa-e1dc-4a26-b3cf-fb9906c7cf49/foundational-c-sharp-with-microsoft';
export const skills = [
  {
    name: 'C#',
    color: '#9456e8',
    mark: 'C#',
    project: 'Hotel Management System',
    detail: [
      'Desktop applications. Real business logic.',
      'Десктопні застосунки. Реальна бізнес-логіка.',
    ],
  },
  {
    name: '.NET',
    color: '#6947e9',
    mark: '.NET',
    project: 'Hotel Management System',
    detail: [
      'Modular services and Windows applications.',
      'Модульні сервіси та Windows-застосунки.',
    ],
  },
  {
    name: 'Python',
    color: '#eeb849',
    mark: 'Py',
    project: 'Conference Room Booking API',
    detail: [
      'APIs, automation and useful little experiments.',
      'API, автоматизація та корисні експерименти.',
    ],
  },
  {
    name: 'TypeScript',
    color: '#268aca',
    mark: 'TS',
    project: 'Portfolio',
    detail: [
      'Typed interfaces for interactive experiences.',
      'Типізовані інтерфейси для інтерактивного вебу.',
    ],
  },
  {
    name: 'React',
    color: '#4cc9c9',
    mark: '⚛',
    project: 'Portfolio',
    detail: [
      'Interactive islands and this 3D keyboard.',
      'Інтерактивні компоненти та ця 3D-клавіатура.',
    ],
  },
  {
    name: 'Django',
    color: '#358766',
    mark: 'dj',
    project: 'SkillBridge',
    detail: [
      'Workshops, authentication and booking logic.',
      'Воркшопи, авторизація та логіка бронювання.',
    ],
  },
  {
    name: 'Astro',
    color: '#ed7543',
    mark: 'A',
    project: 'The Hotel Kyiv web / Portfolio',
    detail: [
      'Fast content with just enough JavaScript.',
      'Швидкі сторінки з необхідним JavaScript.',
    ],
  },
  {
    name: 'SQLite',
    color: '#307ca7',
    mark: 'SQL',
    project: 'Hotel Management System',
    detail: [
      'Relational storage for desktop and backend.',
      'Реляційні дані для десктопу та бекенду.',
    ],
  },
  {
    name: 'Git',
    color: '#e65e47',
    mark: '⑂',
    project: 'All projects',
    detail: [
      'Small commits. Traceable decisions.',
      'Невеликі коміти. Зрозуміла історія рішень.',
    ],
  },
  {
    name: 'Docker',
    color: '#329fd4',
    mark: '▥',
    project: 'SkillBridge / Booking API',
    detail: [
      'Reproducible environments for web services.',
      'Відтворювані середовища для вебсервісів.',
    ],
  },
  {
    name: 'C',
    color: '#8a9aab',
    mark: 'C',
    project: 'B-nix OS',
    detail: [
      'Exploring the layers below the application.',
      'Дослідження рівнів нижче застосунку.',
    ],
  },
  {
    name: 'HTML / CSS',
    color: '#d589b2',
    mark: '</>',
    project: 'Web projects',
    detail: [
      'Responsive layouts, thoughtful details.',
      'Адаптивні інтерфейси та увага до деталей.',
    ],
  },
];
export const projects = [
  {
    id: 'hotel',
    title: 'The Hotel Kyiv',
    category: 'DESKTOP / WEB',
    number: '01',
    color: '#bba8ee',
    repo: 'hotel-management-system-software',
    stack: ['C#', '.NET 8', 'SQLite', 'WinForms'],
    description: [
      'From check-in to the bigger picture. A modular hotel management system connecting rooms, reservations and people.',
      'Від поселення до загальної картини. Модульна система, що поєднує номери, бронювання та людей.',
    ],
    note: [
      'Role-based access · Reporting · Modular services',
      'Рольовий доступ · Звіти · Модульні сервіси',
    ],
  },
  {
    id: 'bnix',
    title: 'B-nix OS',
    category: 'SYSTEMS / EXPERIMENT',
    number: '02',
    color: '#a99cea',
    repo: 'B-nix-OS',
    stack: ['C', 'Assembly', 'GRUB', 'QEMU'],
    description: [
      'A little closer to the metal. An experimental 32-bit operating system with its own kernel, desktop and applications.',
      'Трохи ближче до заліза. Експериментальна 32-бітна ОС із власним ядром, робочим столом і застосунками.',
    ],
    note: [
      'Kernel · Device drivers · Graphical desktop',
      'Ядро · Драйвери пристроїв · Графічний інтерфейс',
    ],
  },
  {
    id: 'skillbridge',
    title: 'SkillBridge',
    category: 'FULL STACK / COMMUNITY',
    number: '03',
    color: '#f0b66e',
    repo: 'SkillBridge-Django',
    stack: ['Python', 'Django', 'HTMX', 'Docker'],
    description: [
      'Good knowledge deserves company. A place to discover workshops, reserve a seat and share what you know.',
      'Знаннями варто ділитися. Платформа для пошуку воркшопів, бронювання місць і власних зустрічей.',
    ],
    note: [
      'Authentication · Capacity checks · Organizer dashboard',
      'Авторизація · Контроль місткості · Кабінет організатора',
    ],
  },
  {
    id: 'booking',
    title: 'Booking API',
    category: 'BACKEND / ENGINEERING',
    number: '04',
    color: '#78c7cc',
    repo: 'conference-room-booking-api',
    stack: ['Python', 'SQLite', 'OpenAPI', 'Docker'],
    description: [
      'Making room for better meetings. An API for availability, conflict-free reservations and time-based pricing.',
      'Місце для кращих зустрічей. API для пошуку залів, бронювання без перетинів і розрахунку вартості.',
    ],
    note: [
      'Atomic bookings · Validation · OpenAPI documentation',
      'Атомарні бронювання · Валідація · Документація OpenAPI',
    ],
  },
  {
    id: 'bot',
    title: 'YouTubeBot',
    category: 'AUTOMATION / PIPELINE',
    number: '05',
    color: '#e58fa5',
    repo: 'YouTubeBot',
    stack: ['Python', 'FFmpeg', 'SQLite', 'Ollama'],
    description: [
      'Turning a manual workflow into a pipeline. Media discovery, screening, human review and queue management.',
      'Від ручної роботи до конвеєра. Пошук медіа, перевірка, перегляд людиною та керування чергою.',
    ],
    note: [
      'Media checks · Duplicate detection · Human review',
      'Перевірка медіа · Пошук дублікатів · Перегляд людиною',
    ],
  },
];
