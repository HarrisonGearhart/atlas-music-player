import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',  // <-- this is critical
    globals: true,          // so you can use `describe` / `it` / `expect` without importing
    setupFiles: './vitest.setup.ts', // optional, for jest-dom matchers
  },
});
