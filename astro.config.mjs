import { defineConfig } from 'astro/config';

// On GitHub Pages the deploy workflow sets SITE_URL and BASE_PATH from the
// Pages settings, so the same code works at
// https://<user>.github.io/<repo>/ now and at a custom domain later.
const site = process.env.SITE_URL || 'https://healingbeatsvolunteers.org';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
