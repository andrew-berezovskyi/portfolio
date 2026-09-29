import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    // Development and production must not share optimized React runtimes.
    cacheDir: process.argv.includes('build')
      ? '.astro/vite-build'
      : '.astro/vite-dev',
  },
  devToolbar: { enabled: false },
});
