import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  designSystem: '@bethelflow/ds',
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',

  // Grace Chapel brand colour
  // theme: { extend: { semanticTokens: { colors: { primary: { value: '#7c3aed' } } } } },
})
