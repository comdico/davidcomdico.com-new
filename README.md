# davidcomdico.com-new

Monorepo for:

- **Main site (Vite)** → `sites/main`
- **Photography site (Eleventy + Tailwind + Handlebars)** → `sites/photo`

Production output is a single deployable folder:

```
sites/main/dist/
```

which includes:

```
dist/photography/**
```

(the Eleventy site copied under `/photography`)

---

## Prerequisites

- Node.js + npm installed
- All commands below are run from the repo root unless otherwise noted.

---

## Folder structure

```
davidcomdico.com-new/
  package.json            # root orchestrator
  sites/
    main/                 # Vite site
    photo/                # Eleventy + Tailwind site
```

---

## Root-level commands

### Install dependencies (optional)

Normally you don’t need to run this because the build scripts call `npm ci` internally.

```bash
npm --prefix sites/main install
npm --prefix sites/photo install
```

---

## Build everything (Photo → copy → Main)

This is the production build used by Cloudflare Pages.

```bash
npm run build
```

**What it does:**

1. Builds the photo site (`sites/photo`) into `sites/photo/_site`
2. Copies `sites/photo/_site/*` into `sites/main/public/photography/`
3. Builds the main site (`sites/main`) into `sites/main/dist/`

**Final deployable output:**

```
sites/main/dist/
  index.html
  photography/
    index.html
    assets/
    ...
```

---

## Build only one site

### Main site (Vite)

```bash
npm run build:main
```

### Photo site (Eleventy)

```bash
npm run build:photo
```

---

## Development

### Develop the main site (Vite)

```bash
npm run dev:main
```

Vite will print a local URL (usually `http://localhost:5173`).

### Develop the photography site (Eleventy + Tailwind)

```bash
npm run dev:photo
```

This runs:

- Tailwind in watch mode
- Eleventy in serve/watch mode (port 8080)

Open:

```
http://localhost:8080
```

This is the recommended way to edit Handlebars templates, layouts, and content.  
The photo site runs at `/` in dev, but is hosted at `/photography` in production.

---

## Commands inside each site

### Main site (Vite)

Run from:

```bash
cd sites/main
```

```bash
npm install
npm run dev
npm run build
npm run preview
```

### Photo site (Eleventy)

Run from:

```bash
cd sites/photo
```

```bash
npm install
npm run start
npm run build
npm run debug
```

---

## Photography site at `/photography`

The photography site is deployed under:

```
https://davidcomdico.com/photography
```

To support this, the photo site uses:

- `pathPrefix: "/photography/"` in `sites/photo/.eleventy.js`
- Eleventy’s built-in **EleventyHtmlBasePlugin** to rewrite absolute URLs in generated HTML so:  
  `/assets/css/main.css` → `/photography/assets/css/main.css`

This allows the same Eleventy site to work both at `/` (dev) and `/photography` (production).

---

## Deployment (Cloudflare Pages)

Single Pages project:

### Build command

```bash
npm run build
```

### Output directory

```
sites/main/dist
```

Domain setup:

- `davidcomdico.com` → Cloudflare Pages project
- `comdicophoto.com/*` → `https://davidcomdico.com/photography/$1` (301 redirect via Cloudflare)

---

## Troubleshooting

### “My photo site changes don’t show up”

If you’re editing Handlebars and viewing `/photography` via Vite, Eleventy is not rebuilding into that folder in dev. Use:

```bash
npm run dev:photo
```

and view:

```
http://localhost:8080
```

That is Eleventy’s live server.

### npm auth warnings (“need to run adduser/login”)

Only required if you are installing or updating packages. Fix with:

```bash
npm logout
npm login
```

---

## Quick workflows

Editing the main site:

```bash
npm run dev:main
```

Editing the photography site:

```bash
npm run dev:photo
```

Deploying:

```bash
npm run build
```

Upload `sites/main/dist` (or let Cloudflare Pages do it automatically).
