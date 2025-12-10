import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Shannu-919_Lakshmi/',   // EXACT repo name
  build: {
    outDir: 'docs'
  }
})
