// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Inlining small font files puts them in the render-blocking CSS, though unicode-range would rarely fetch them.
  vite: { build: { assetsInlineLimit: 0 } },
});
