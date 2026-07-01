import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo at /farhan-solaiman-developer-portfolio-2026/.
// Use root base for `vite dev`/preview locally, repo base for production build.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/farhan-solaiman-developer-portfolio-2026/' : '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'es2020',
  },
}))
