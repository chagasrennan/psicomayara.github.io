# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Start development server (also fetches GitHub/Medium data if env vars set)
npm start

# Build for production
npm run build

# Deploy to GitHub Pages (gh-pages branch)
npm run deploy

# Run tests
npm test

# Run a single test file
npx react-scripts test --testPathPattern=<filename>

# Format code
npm run format

# Check formatting
npm run check-format
```

## Architecture

This is a React 16 portfolio website for a psychologist (Mayara Costa), adapted from the [developer-portfolio](https://github.com/saadpasta/developer-portfolio) template. It is deployed as a static site to GitHub Pages via the `gh-pages` branch at `mayaracosta.com`.

### Data & Configuration

**`src/portfolio.js`** is the single source of truth for all site content. Every section's data (text, images, links, display toggles) lives here. Each exported object has a `display: true/false` flag to show or hide sections.

**`fetch.js`** runs before build/start via npm scripts. It optionally fetches GitHub profile data (to `public/profile.json`) and Medium blog posts (to `public/blogs.json`) if the relevant env vars are set (`USE_GITHUB_DATA`, `GITHUB_USERNAME`, `REACT_APP_GITHUB_TOKEN`, `MEDIUM_USERNAME`).

### Component Structure

```
src/
  portfolio.js          # All site content and section configs
  _globalColor.scss     # Global SCSS color variables (edit here for theme changes)
  App.js                # Root: renders <Main />
  containers/
    Main.js             # Page layout — controls section order and which are rendered
    greeting/           # Hero section
    skills/             # About/skills section
    workExperience/     # "How can I help" cards
    testimonials/       # Patient testimonials carousel
    mediaSlider/        # YouTube video slider
    faq/                # FAQ accordion
    [other sections]/   # Most are hidden via display:false in portfolio.js
  components/
    header/             # Navigation header
    footer/             # Site footer
    LargeButton/        # Reusable CTA button (used in contactInfo title)
    socialMedia/        # Social media icons (Instagram, WhatsApp, YouTube)
    [other components]/ # Cards, toggles, etc.
  contexts/
    StyleContext.js     # React context for theme (isDark is hardcoded false — dark mode removed)
```

### Active Sections (in render order)

From `Main.js`, the currently rendered sections are:
1. `Header`
2. `Greeting` — hero with logo image
3. `Skills` — about text
4. `WorkExperience` — "how can I help" cards with images
5. `Testimonials` — patient quotes carousel
6. `Projects` — (controlled by `openSource.display`)
7. `MediaSlider` — YouTube videos from `media` export
8. `Faq` — FAQ items from `faq` export
9. `Footer`

Many sections (Education, StackProgress, Achievement, Blogs, Publications, etc.) are commented out in `Main.js` or set to `display: false` in `portfolio.js`.

### Styling

- **`src/_globalColor.scss`** — change brand colors globally here. Current palette uses warm browns (`#60391E`) and creams (`#F9F4EF`).
- Each container/component has its own `.scss` file for component-specific styles.
- Dark mode is removed: `StyleProvider` in `Main.js` hardcodes `isDark: false`.

### Content Updates

To update site content, edit `src/portfolio.js`:
- Section visibility: toggle `display: true/false`
- Colors: edit `src/_globalColor.scss`
- Section order: edit the JSX in `src/containers/Main.js`
- Images: place in `src/assets/images/` and `require()` them in `portfolio.js`
