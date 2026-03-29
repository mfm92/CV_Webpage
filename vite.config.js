// portfolio/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CV_Webpage/',  // Add this line
  plugins: [react()],
})
