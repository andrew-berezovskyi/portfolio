# Andrew Berezovskyi — Portfolio

Сайт-портфоліо на Astro + Tailwind CSS.

## 🚀 Як запустити у VS Code (крок за кроком)

### 1. Встанови Node.js (якщо ще не встановлено)
Завантаж LTS-версію з https://nodejs.org — постав "Next → Next → Install".
Перевір, що встановилось, в терміналі:
```
node -v
npm -v
```
Обидві команди мають показати номер версії.

### 2. Розпакуй проєкт і відкрий у VS Code
- Розпакуй завантажений архів `portfolio.zip` у зручну папку, наприклад `C:\Projects\portfolio` або `~/Projects/portfolio`
- Відкрий VS Code → `File → Open Folder...` → вибери цю папку

### 3. Встанови розширення (рекомендовано, не обов'язково)
У VS Code відкрий вкладку Extensions (Ctrl+Shift+X) і встанови:
- **Astro** (офіційне, від astro-build) — підсвітка синтаксису `.astro` файлів
- **Tailwind CSS IntelliSense** — автодоповнення класів

### 4. Встанови залежності
Відкрий вбудований термінал у VS Code: `Terminal → New Terminal` (або `` Ctrl+` ``)
```
npm install
```
Це завантажить всі потрібні пакети (Astro, Tailwind тощо) — займе 1-2 хвилини.

### 5. Запусти сайт локально
```
npm run dev
```
У терміналі з'явиться посилання типу `http://localhost:4321` — відкрий його в браузері.
Сайт перезавантажується автоматично при кожному збереженні файлу.

Щоб зупинити сервер — `Ctrl+C` у терміналі.

---

## 📁 Структура проєкту — де що редагувати

```
src/
  components/     ← кожна секція сайту окремим файлом (Hero.astro, About.astro, ...)
  data/
    projects.ts   ← ТУТ додаєш нові проєкти (масив об'єктів, не треба чіпати верстку)
  layouts/
    Layout.astro  ← спільна обгортка сторінки (head, шрифти, тема)
  pages/
    index.astro   ← збирає всі секції в один список — порядок секцій на сторінці міняється тут
  styles/
    global.css    ← глобальні стилі
public/
  favicon.svg     ← іконка вкладки (заміни на свою, якщо схочеш)
  projects/       ← сюди клади скріншоти проєктів (створи цю папку сама)
```

## ✅ Що доробити, коли з'являться матеріали

Шукай коментарі `TODO` в коді — це місця, які чекають на твій контент:

1. **Скріншоти проєктів** — поклади файли у `public/projects/`, потім у `src/data/projects.ts`
   встав шлях у поле `image`, наприклад `image: '/projects/hotel-management.png'`
2. **Другий (недороблений) проєкт** — у `src/data/projects.ts` заміни другий об'єкт
   в масиві `projects` на реальні дані (назва, опис, стек, посилання)
3. **Посилання на GitHub** — заміни `url: '#'` у `projects.ts` та `Contact.astro`
   на реальні URL твоїх репозиторіїв/профілю
4. **Резюме PDF** — якщо захочеш кнопку "Download Resume", поклади PDF у `public/resume.pdf`
   і додай кнопку в `Hero.astro` (скажи мені — я допоможу вставити)

## 🌐 Деплой на Vercel (безкоштовно)

1. Створи репозиторій на GitHub і запуш туди код:
   ```
   git init
   git add .
   git commit -m "init portfolio"
   git branch -M main
   git remote add origin https://github.com/ТВІЙ_НІК/portfolio.git
   git push -u origin main
   ```
2. Зайди на https://vercel.com → Sign up через GitHub
3. `Add New... → Project` → вибери свій репозиторій `portfolio`
4. Vercel сам розпізнає Astro — нічого не змінюй, тисни `Deploy`
5. Через ~1 хвилину отримаєш посилання типу `portfolio-xxxx.vercel.app`
6. Після цього кожен `git push` в `main` автоматично оновлює сайт

## 🎨 Кольори / тема

Всі кольори визначені в `tailwind.config.mjs` в секції `colors` —
`graphite.*` (темна тема) і `paper.*` (світла тема), акценти `copper` і `cyan`.
Змінити колір скрізь на сайті — правка в одному місці.
