# MAG Maps Page — Copilot Instructions

## Repository summary

This repository contains the MAG mapping home page, a client-side React application that links users to MAG's interactive mapping and analysis sites. This project does not contain ArcGIS map layers or a backend.

- JavaScript with JSX; the package is ESM (`"type": "module"`).
- React 19, Vite 8, React Router, and MobX (`mobx` / `mobx-react-lite`).
- Tailwind CSS v4 through `@tailwindcss/vite`; global styles and theme tokens are in `src/index.css`.
- npm is the package manager. The declared runtime floor is Node 24 and npm 11.

## Setup and environment

- Install dependencies with `npm install` if `node_modules` is missing.
- Vite reads local variables from `.env`; copy `.env.example` to `.env` when needed.
- The app currently reads `VITE_GA_MEASUREMENT_ID` and the environment-specific router basename (`VITE_APP_BASENAME_DEV`, `VITE_APP_BASENAME_TEST`, or `VITE_APP_BASENAME_PROD`). Do not hardcode these values in source or commit `.env`.
- `.env.example` also lists `VITE_ESRI_API_KEY`, but the current application source does not reference it.

## Commands

- `npm run dev` starts Vite at `http://localhost:3000` and opens a browser.
- `npm run lint` runs ESLint.
- `npm run check-casing` checks the repository's file and folder naming conventions.
- `npm run format` runs Prettier across the repository; avoid it for a narrow change unless formatting the whole project is intended.
- `npm run build` runs `npm run replace`, builds in production mode, then runs Windows `explorer dist`. On non-Windows systems or in CI, use `npm run replace && npx vite build --mode production` to build without the Explorer step.
- `npm run build:test` builds with Vite's `test` mode and has the same Explorer caveat. `npm run preview` serves the built output locally.
- There is no configured test script or test framework. Use lint, casing checks, and a production build as appropriate to the change.
- `npm run replace` updates version/date/copyright metadata derived from `package.json` in `README.md`, license files, `public/humans.txt`, `index.html`, and `src/config/docConfig.js`. Build scripts run it automatically; do not hand-edit those generated metadata values.

## Project layout

- `src/main.jsx` mounts the application from `src/app.jsx`.
- `src/app.jsx` configures the data provider, router basename, analytics, and scroll-to-top behavior.
- `src/routes/Routes.jsx` defines routes; `src/pages/` contains page components.
- `src/layout/` contains the header, footer, cards, heroes, and page sections.
- `src/components/` contains buttons, contact-us UI, modals, and scroll-to-top behavior.
- `src/stores/` contains the MobX store and React context provider.
- `src/config/` contains document metadata and content configuration; `src/services/` contains service integrations such as contact email.
- `src/assets/` contains images and logos; `public/` contains static public assets.

## Conventions and gotchas

- Use ESM `import`/`export` syntax in `.js` and `.jsx` files.
- Follow the configured naming checks: kebab-case folders, PascalCase `.jsx` files, and camelCase `.js` files. `src/main.jsx` and `src/app.jsx` are intentional lowercase exceptions.
- Keep Tailwind classes consistent with the project's Prettier configuration, including its Tailwind class sorting plugin.
- The app is a static front end. Do not assume a map API, ArcGIS SDK, or server-side component exists; verify current source usage before adding integrations or documenting them.
