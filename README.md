# Browser Extensions Manager — Frontend Mentor solution

This repository contains a React + Vite solution for the "Browser extensions manager UI" challenge on Frontend Mentor.

## Table of contents

- Overview
- Features
- Quick start
- Available scripts
- Project structure
- Theming notes
- Contributing
- Author

## Overview

This is a small responsive UI that lets users manage browser extensions: toggle them on/off, filter by status, and remove items from the list. It uses React with Emotion for styling and a small JSON file as data source.

### Live / Demo
Add your hosted demo URL here if available.

## Features

- Toggle extensions between active and inactive states
- Filter list by All / Active / Inactive
- Remove extensions from the list
- Light and Dark themes (toggle in the header)
- Responsive layout using CSS Grid + Flexbox

## Quick start

Prerequisites

- Node.js (recommended >= 16)
- npm (or yarn/pnpm if you prefer)

Clone and run locally

```bash
# install dependencies
npm install

# start dev server (Vite)
npm run dev
```

Open the development server (usually http://localhost:5173) in your browser.

## Available scripts

These are the standard scripts included with a Vite React setup. Confirm they exist in `package.json` or adapt if different.

- npm run dev — start development server
- npm run build — build the production bundle
- npm run preview — locally preview the production build

If you use yarn:

```bash
yarn
yarn dev
```

## Project structure (important files)

- `src/` — application source
  - `App.tsx` — root app; mounts theme provider and layout
  - `main.tsx` — app entry
  - `components/` — React components (Header, Main, UI, Theme, Wrapper)
  - `styles/` — global styles and breakpoints
  - `data/data.json` — sample extension data used by the UI

- `public/` — static assets
- `index.html` — Vite HTML template

### Notable components

- `src/components/Theme/ThemeContext.tsx` — provides Light/Dark theme, updates body background via Emotion Global
- `src/components/Main/main.tsx` — main list + filter buttons
- `src/components/UI/extensionCard.tsx` — card UI for each extension (remove button + toggle)

## Theming notes

The app exposes a theme toggle in the header. The `ThemeProvider` sets CSS custom properties via Emotion's `Global` and also supplies a theme to Emotion's `ThemeProvider`. The toggle flips between "Light" and "Dark" and updates background and text color.

If you need to customize colors or spacing, update `src/styles/GlobalStyles.tsx` and CSS variables defined there.

## Contributing

Small contributions or fixes are welcome. Recommended workflow:

1. Fork the repo
2. Create a branch for your change
3. Run locally and add tests (if applicable)
4. Open a PR with a clear description

## Author

- Frontend Mentor - [@mayor-creator](https://www.frontendmentor.io/profile/mayor-creator)
