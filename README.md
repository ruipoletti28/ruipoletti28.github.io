# Rui Poletti — Portfolio

[![Deploy to GitHub Pages](https://github.com/ruipoletti28/ruipoletti28.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/ruipoletti28/ruipoletti28.github.io/actions/workflows/deploy.yml)

Personal portfolio of **Rui Poletti** — Systems Analyst / Software Developer.
A bilingual (English / Portuguese) single-page application showcasing
experience, projects and contact information.

🔗 **Live:** https://ruipoletti28.github.io/

## Tech stack

| Area      | Choice                                  |
| --------- | --------------------------------------- |
| Framework | [React 19](https://react.dev)           |
| Language  | [TypeScript](https://www.typescriptlang.org) (strict) |
| Build     | [Vite](https://vite.dev)                |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com) |
| Linting   | [ESLint](https://eslint.org) (flat config) + typescript-eslint |
| CI/CD     | GitHub Actions → GitHub Pages           |

## Project structure

```
portfolio/
├── public/              # Static assets copied as-is (favicon, manifest, .nojekyll)
├── index.html           # Vite entry HTML
├── src/
│   ├── main.tsx         # Application bootstrap
│   ├── App.tsx          # Page composition (layout + sections)
│   ├── components/
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # About, Experience, Projects, Contact
│   │   └── ui/          # Reusable presentational pieces
│   ├── config/          # Site-wide config (contact, stats)
│   ├── data/            # Content (projects, timeline)
│   ├── i18n/            # Locale context, hook and translations
│   └── types/           # Shared TypeScript types
├── vite.config.ts
└── eslint.config.js
```

The codebase favours a clear separation between **content** (`data/`, `config/`,
`i18n/`), **types** and **presentation** (`components/`), so the page can grow
without turning into a single large file.

## Getting started

> Requires [Node.js](https://nodejs.org) 20+.

```bash
cd portfolio
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
```

## Available scripts

Run inside the `portfolio/` directory:

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with HMR           |
| `npm run build`     | Type-check and build for production (`dist/`)|
| `npm run preview`   | Preview the production build locally         |
| `npm run lint`      | Run ESLint over the project                  |
| `npm run typecheck` | Run the TypeScript compiler without emitting |

## Deployment

Deployment is fully automated. Every push to `main` triggers the
[`deploy.yml`](.github/workflows/deploy.yml) workflow, which lints, type-checks
and builds the app, then publishes `portfolio/dist` to GitHub Pages.

To enable it once: in the repository **Settings → Pages**, set
**Source** to **GitHub Actions**.

## License

[MIT](./LICENSE) © Rui Poletti
