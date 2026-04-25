import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://allensu.github.io',
  base: '/OhMyLedgerLanding',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'zh-CN', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
