/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'

import eslintPlugin from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin({
    fix: true,
    emitError: true,
    include: ["./src/**/*.{ts,tsx}"]
  })],
  resolve: {
    alias: {
      '@': './src/'
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
})
