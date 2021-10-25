import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/static/",
  // base: "/",
  build: {
    outDir: '../django_celery/dist/'
  },
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "src"),
      "api": path.resolve(__dirname, "src/api"),
      "comps": path.resolve(__dirname, "src/components"),
      "views": path.resolve(__dirname, "src/views"),
      "assets": path.resolve(__dirname, "src/assets"),
      "utils": path.resolve(__dirname, "src/utils"),
      "styles": path.resolve(__dirname, "src/styles"),
      "layout": path.resolve(__dirname, "src/layout"),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.102:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api/')
      },
      '/media': {
        target: 'http://192.168.1.102:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/media/, '/media/'),
      }
    }
  },
  plugins: [vue()]
})
