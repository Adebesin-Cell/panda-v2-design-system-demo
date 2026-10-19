import { fileURLToPath } from 'node:url'
import { pandacss } from '@pandacss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [pandacss(), react()],
  resolve: {
    alias: { 'styled-system': fileURLToPath(new URL('./styled-system', import.meta.url)) },
  },
  server: { port: 5180, strictPort: true },
})
