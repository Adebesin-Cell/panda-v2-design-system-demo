import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  designSystem: '@bethelflow/ds',
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
})
