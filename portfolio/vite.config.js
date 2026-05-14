import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  preview: {
    host: true,
    allowedHosts: ['bmeouchi.fr', 'www.bmeouchi.fr'],
  },
})
