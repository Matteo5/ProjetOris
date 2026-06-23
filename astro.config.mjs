// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // ⚠️ À synchroniser avec SITE_URL dans src/config.ts
  site: 'https://loopa-digital.fr',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
