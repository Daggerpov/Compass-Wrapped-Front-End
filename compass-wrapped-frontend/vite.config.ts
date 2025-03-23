import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Add @tailwindcss/vite plugin when installed
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
