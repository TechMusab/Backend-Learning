import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'http://localhost:3000'
      //server ko lage ga k request same origin se arahi h
    }
  },
  plugins: [react()],
})
