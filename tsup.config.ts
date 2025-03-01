import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.{ts,tsx}'],
  format: 'esm',
  outDir: 'dist',
  clean: true
})
