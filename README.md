# Andrew Berezovskyi — Portfolio

A personal portfolio built with Astro and Tailwind CSS. The home page has sections for the author, skills, projects, education, and contact details.

## Run locally

Install Node.js and npm, then run from the repository root:

```bash
npm install
npm run dev
```

The terminal prints the local URL (usually `http://localhost:4321`). Use `npm run build` for a static build and `npm run preview` to inspect that build locally.

## Where to edit content

- `src/pages/index.astro` — order of home page sections.
- `src/components/` — sections and their content.
- `src/data/projects.ts` — project cards, technologies, and links.
- `src/layouts/Layout.astro` — shared page layout.
- `src/styles/` and `tailwind.config.mjs` — styles and theme.
- `public/` — static assets.

`src/data/projects.ts` still contains a placeholder second project and `#` links for the first one. Replace those with current information before presenting the portfolio publicly. For a project screenshot, add an image under `public/projects/` and set `image` to a path such as `/projects/example.png`. Cards without images use a placeholder.

## Deploy

`npm run build` writes static output to `dist/`. Host those files on a static hosting service or connect the repository to a platform that runs the npm build.
