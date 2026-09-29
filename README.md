# Andrew Berezovskyi — Portfolio

A portfolio redesign built with Astro, React islands, TypeScript, Tailwind CSS, Motion and React Three Fiber. This is the first visual-review checkpoint, not the final release. See [DESIGN-REVIEW.md](DESIGN-REVIEW.md) for completed work and remaining scope.

## Run locally

Use Node.js 24 LTS and npm, then run from the repository root:

```bash
npm ci
npm run dev
```

The terminal prints the local URL (usually `http://localhost:4321`). English is at `/`; Ukrainian is at `/uk/`. Use `npm run build` for type checking and a static build, then `npm run preview` to inspect the production build. Stop the dev server before building to avoid sharing Vite optimizer caches across environments.

## Where to edit content

- `src/components/Portfolio.astro` — static sections and translated copy.
- `src/components/interactive/` — keyboard and project demonstrations.
- `src/data/workspace.ts` — technologies, featured projects and source links.
- `src/styles/workspace.css` — responsive styles and reduced-motion handling.
- `public/` — static assets.

The laptop demos are interactive simulations, clearly labeled as such. They do not run the original projects, make API calls, send messages or publish media. The WebGL scene has a lazy-loaded bundle and a CSS fallback; it does not block the static page.

## Deploy

`npm run build` writes static output to `dist/`. The final public domain and hosting connection still need verification. No live deployment is implied by a successful build or a GitHub push.

The previous design is preserved in `backup/pre-redesign-2026-09-29`.
