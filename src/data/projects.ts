export type Project = {
  id: string;
  title: string;
  status: 'done' | 'in-progress';
  summary: string;
  highlights: string[];
  stack: string[];
  links: { label: string; url: string }[];
  // Поки немає скріна — картка покаже плейсхолдер.
  // Коли надішлеш скрін, поклади файл у /public/projects/ і встав шлях сюди, напр:
  // image: '/projects/hotel-management.png'
  image?: string;
};

export const projects: Project[] = [
  {
    id: 'hotel-management-system',
    title: 'Hotel Management System',
    status: 'done',
    summary:
      'Десктоп-застосунок для керування готелем: бронювання, персонал, номери, фінансові звіти.',
    highlights: [
      '7-рівнева модульна архітектура: UI, Business Logic, Data Access, Models — з чітким розділенням шарів',
      'Подієво-орієнтована система (EventBus) для асинхронного оновлення стану між формами',
      'Рольовий доступ (Admin/Guest) з SHA-256 хешуванням паролів, SMTP-сповіщення, відновлення пароля через OTP',
      'Адмін-панель з повним CRUD для номерів, персоналу, бронювань + голосове керування навігацією',
      'Реляційна SQLite база з автоініціалізацією, генерація фінансових звітів в Excel/CSV',
    ],
    stack: ['C#', '.NET 8', 'Windows Forms', 'SQLite', 'ReaLTaiizor'],
    links: [
      { label: 'GitHub — C# App', url: '#' },
      { label: 'GitHub — Web Version', url: '#' },
    ],
    // TODO: встав реальні посилання на GitHub-репозиторії замість "#"
  },
  {
    id: 'project-in-progress-1',
    title: 'Назва другого проєкту',
    status: 'in-progress',
    summary: 'Короткий опис — заміни на реальний, коли надішлеш деталі.',
    highlights: ['Замінити на реальні пункти'],
    stack: ['TODO'],
    links: [],
  },
];
