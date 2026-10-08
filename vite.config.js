import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Integración de Tailwind CSS con Vite
export default defineConfig({
  plugins: [react(), tailwindcss()],
})