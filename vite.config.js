import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Deployed as a GitHub Pages *project* site at
// https://gracecheong.github.io/web/ — so assets need the "/web/" base path.
// If this ever moves to a user/org page (gracecheong.github.io) or a custom
// domain, change base back to "/".
export default defineConfig({
  base: '/web/',
  plugins: [react()],
})
