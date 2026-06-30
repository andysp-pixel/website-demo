# DICA Global Travels

React + Vite conversion of the original single-file `dica-global-travels.html` website.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

The production build is created in `dist/`.

If you want to open the site directly as a file, run the build first and open
`dist/index.html`. The root `index.html` redirects there when opened with
`file://`.

## Preview Production Build

```bash
npm run preview
```

## Deploy on Cloudflare Pages

Use these settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Deploy command: leave empty

Then connect the repository or upload the project to Cloudflare Pages.

Do not set `npx wrangler deploy` as a deploy command. Cloudflare Pages deploys
the `dist` folder automatically after the build finishes.

## Push to GitHub

1. Create a new empty repository on GitHub.
2. Upload these project files to that repository, excluding `node_modules/` and `dist/`.
3. Commit and push to the main branch.
4. In Cloudflare Pages, choose the GitHub repository and use the settings above.
