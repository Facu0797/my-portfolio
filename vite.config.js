import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Esta es la configuración por defecto, pero asegúrate de que esté presente
  build: {
    outDir: 'dist', // Carpeta de salida para el build
  },
})
