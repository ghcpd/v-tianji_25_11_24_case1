import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.js',
    exclude: ['e2e/**','node_modules/**'],
    include: ['src/**/*.test.*','src/**/*.spec.*']
  }
})
