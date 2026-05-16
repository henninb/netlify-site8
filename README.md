# netlify-site8

A Next.js (App Router) navigation dashboard linking to all bhenning.com / brianhenning.com sites. Deployed to `site8.bhenning.com`.

## Tech Stack

- Next.js (App Router, `app/` directory)
- React 18 (client components)
- Netlify deployment

## Features

- Dashboard grid with links to all nine sites
- Dynamically resolves the base domain from `window.location`

## Setup

```bash
npm install
```

## Running

```bash
./run.sh
```

## Build

```bash
npm run build
```

Static export is configured in `next.config.mjs`.

## Deployment

Deploys to Netlify via `netlify.toml`.
