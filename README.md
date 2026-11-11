# Healing Beats Volunteers website

A static site built with [Astro](https://astro.build), plain CSS and no client framework.

## Run it locally

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321. To check the production build:

```bash
npm run build && npm run preview
```

## Where things are

| What | Where |
|---|---|
| Settings: form endpoint, donation link, contact, indexing | `src/config.ts` |
| Shared facts: stats, testimonials, visit steps | `src/data/facts.ts` |
| Pages | `src/pages/` |
| Shared components | `src/components/` |
| Colours, type, spacing | `src/styles/tokens.css` |
| Items for Jake to confirm | `CONTENT-TODO.md` |
| Product context and design brief | `PRODUCT.md`, `BRIEF.md`, `DESIGN.md` |

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to `main` or `claude/wizardly-thompson-bp2q41`.

1. In the repository, open Settings, then Pages, and set Source to "GitHub Actions".
2. Push to one of those branches. The branch must be the repository's default branch, or be allowed in the `github-pages` environment settings.

The workflow reads the site address from the Pages settings, so the same code works at the `github.io` address and at a custom domain.

## Design tooling

The design was made with [Impeccable](https://impeccable.style). After a fresh clone, restore its engine and editor hooks with:

```bash
npx impeccable install -y --providers=claude --scope=project --force
```

## Fonts

Archivo and Courier Prime, both under the SIL Open Font License, are self-hosted in `src/assets/fonts/`.
