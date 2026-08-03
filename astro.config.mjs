import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // TODO: коли купиш/матимеш домен — онови на нього.
  // Поки що деплоїмо на Vercel, тож site можна лишити так:
  site: 'https://andrew-berezovskyi.vercel.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
