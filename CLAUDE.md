# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal website built on the [developer-portfolio](https://github.com/saadpasta/developer-portfolio) React template. Despite the repo name (`psicomayara.github.io`) and stale README (which still references a previous owner/`rchags.dev`), the live content is the psychology practice site for **Mayara Costa, psicóloga clínica** — deployed to `www.mayaracosta.com` (see `public/CNAME`). Most user-facing copy is in Brazilian Portuguese.

## Commands

```bash
npm start            # runs `node fetch.js` then starts the dev server (localhost:3000)
npm run build        # runs `node fetch.js` then builds to /build
npm test             # react-scripts test (Jest + Enzyme, watch mode)
npm run deploy       # builds, then publishes /build to the gh-pages branch via gh-pages
npm run format       # prettier --write over **/*.{js,css,json,scss}
npm run check-format # prettier -c (verify formatting without writing)
```

Run a single test: `npx react-scripts test src/App.test.js` (or a name pattern with `-t "<name>"`). There is essentially one test file (`src/App.test.js`); testing is not a focus of this repo.

Prettier config (`.prettierrc`) is non-default: double quotes, semicolons, **no bracket spacing** (`{foo}` not `{ foo }`), no trailing commas, `arrowParens: avoid`. A pre-commit hook (`.pre-commit-config.yaml`) runs prettier on js/json/css.

## Architecture

Standard Create React App (react-scripts 5, React 16). Two files carry almost all the intent:

- **`src/portfolio.js`** — the single source of content and configuration. Every section's text, images, links, and a per-section `display` boolean are defined here as exported objects (`greeting`, `skillsSection`, `workExperiences`, `testimonials`, `media`, `faq`, `publicationInfo`, `contactInfo`, etc.). To change what the site says, edit this file — not the components. Note the template's original placeholder data (e.g. `bigProjects` "Saayahealth", `blogSection`, `talkSection`) is still present but disabled.
- **`src/containers/Main.js`** — composes the page by importing each container and rendering them in order. Sections are toggled in **two** independent places: the `display` flag in `portfolio.js` **and** whether the component is commented out in `Main.js`'s JSX. To hide/show a section reliably, check both.

Everything else follows the template's `container` (page section) + `component` (reusable card/widget) split under `src/containers/` and `src/components/`, each with a co-located `.scss`.

### Styling

- SCSS via `sass`. Global colors/theme variables live in **`src/_globalColor.scss`**; edit there for site-wide color changes.
- Dark/light theming exists in the template via `StyleContext` (`src/contexts/StyleContext.js`), but here it is **hardcoded to light mode** in `Main.js` (`value={{isDark: false, changeTheme: () => {}}}`). The theme toggle is effectively disabled.

### Data fetching (`fetch.js`)

Runs before every `start`/`build`. It optionally pulls remote data into `public/*.json` (git-ignored), gated by `.env`:
- `USE_GITHUB_DATA="true"` + `GITHUB_USERNAME` + `REACT_APP_GITHUB_TOKEN` → writes `public/profile.json` (pinned repos via GitHub GraphQL). Currently **off** (`USE_GITHUB_DATA="false"`).
- `MEDIUM_USERNAME` (currently commented out) → writes `public/blogs.json` from the Medium RSS feed.

With both disabled, the app renders entirely from the hardcoded values in `portfolio.js`; GitHub/Medium-dependent sections are turned off. The committed `.env` is a documented example (real secrets are git-ignored) — do not commit a real token.

## Deploy

`npm run deploy` pushes the built `/build` to the `gh-pages` branch (GitHub Pages serves it, with the custom domain from `public/CNAME`). `homepage` in `package.json` is set to `https://mayaracosta.com` so asset paths resolve at the domain root. Work happens on `main`.
