import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001",
        // target: "https://aliiapi.sitras.id",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    }
  }
});