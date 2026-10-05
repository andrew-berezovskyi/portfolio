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
- `src/styles/workspace.css` — responsive layout and component styles.
- `src/styles/cosmic-theme.css` — shared color palette and cosmic backgrounds.
- `public/` — static assets.
- `public/andrew-berezovskyi-cv.pdf` — the bilingual CV downloaded from the header in both languages. Replace this file to update the CV.
- `public/cosmic-nebula.png` — original generated background artwork.

Technology marks use selectively bundled [Simple Icons](https://simpleicons.org/) SVG paths. The C# key uses a typographic label. Contact links include Gmail compose (requires a Gmail account), Telegram, GitHub and LinkedIn; the email address can also be copied for use with any mail provider.

The laptop demos are interactive simulations, clearly labeled as such. They do not run the original projects, make API calls, send messages or publish media. The WebGL scene has a lazy-loaded bundle and a CSS fallback; it does not block the static page.

## Deploy

`npm run build` writes static output to `dist/`. Deployment is handled by `.github/workflows/deploy.yml` using the official Astro action and GitHub Pages.

## Security and public data

This is a static GitHub Pages site. It has no server, database or private runtime secrets. The email address and profile links are intentionally public contact information. Never place API keys, passwords or private data in `src/`, `public/`, or variables prefixed with `PUBLIC_`: anything shipped to the browser can be read by visitors. If a future feature needs secrets, implement it in a separate server-side service and call that service from this site.

Local `.env` files are ignored by Git. Deployment uses narrowly scoped permissions and runs `npm audit` before publishing. Contact actions open external services or copy the public address; this site does not store or submit messages.

The previous design is preserved in `backup/pre-redesign-2026-09-29`.
