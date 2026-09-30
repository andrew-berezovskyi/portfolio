# Andrew Berezovskyi — Portfolio

A bilingual portfolio built with Astro, React islands, TypeScript, Tailwind CSS, Motion and React Three Fiber.

## Live site

[andrew-berezovskyi.github.io/portfolio](https://andrew-berezovskyi.github.io/portfolio/)

Every push to `main` is checked, built and deployed automatically through GitHub Actions and GitHub Pages.

## Run locally

Use Node.js 24 LTS and npm, then run from the repository root:

```bash
npm ci
npm run dev
```

The terminal prints the local URL (usually `http://localhost:4321/portfolio/`). English is at `/portfolio/`; Ukrainian is at `/portfolio/uk/`. Use `npm run build` for type checking and a static build, then `npm run preview` to inspect the production build. Development and production builds use separate Vite caches.

## Where to edit content

- `src/components/Portfolio.astro` — static sections and translated copy.
- `src/components/interactive/` — keyboard and project demonstrations.
- `src/data/workspace.ts` — technologies, featured projects and source links.
- `src/styles/workspace.css` — responsive styles and reduced-motion handling.
- `public/` — static assets.
- `public/andrew-berezovskyi-cv.pdf` — the original supplied CV, downloaded from the header in both languages. Replace this file to update the CV.

Technology marks use selectively bundled [Simple Icons](https://simpleicons.org/) SVG paths. The C# key uses a typographic label. Contact links include Gmail compose (requires a Gmail account), Telegram, GitHub and LinkedIn; the email address can also be copied for use with any mail provider.

The laptop demos are interactive simulations, clearly labeled as such. They do not run the original projects, make API calls, send messages or publish media. The WebGL scene has a lazy-loaded bundle and a CSS fallback; it does not block the static page.

## Deploy

`npm run build` writes static output to `dist/`. Deployment is handled by `.github/workflows/deploy.yml` using the official Astro action and GitHub Pages.

The previous design is preserved in `backup/pre-redesign-2026-09-29`.
