import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Ajusta según sea necesario
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Directorio para los activos
  },
})
