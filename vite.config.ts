/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import { resolve } from 'path'

import eslintPlugin from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      fix: true,
      emitError: true,
      include: ['./src/**/*.{ts,tsx}']
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
    coverage: {
      reporter: ['text', 'json', 'html']
    },
    watch: false
  }
})
