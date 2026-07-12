import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "hybrid",
  site: 'https://marcin.sztukowski.com',
  base: '/',
  trailingSlash: 'always',
  adapter: cloudflare()
});