import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/App"),
      "@shared": path.resolve(__dirname, "./src/App/shared"),
      "@entities": path.resolve(__dirname, "./src/App/entities"),
      "@features": path.resolve(__dirname, "./src/App/features"),
      "@widgets": path.resolve(__dirname, "./src/App/widgets"),
      "@pages": path.resolve(__dirname, "./src/App/pages"),
      "@settings": path.resolve(__dirname, "./src/App/settings"),
    }
  }
})
