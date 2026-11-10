import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Haban22.github.io',

  output: "static",
  prefetch: true,
  compressHTML: true,
  redirects: {
    '/notes': '/projects',
  },
});
