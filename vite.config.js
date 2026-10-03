import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const r = (p) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: r('index.html'),
        en: r('en/index.html'),
        webDevelopment: r('services/web-development/index.html'),
        telegramMiniApp: r('services/telegram-mini-app/index.html'),
        mobileMvp: r('services/mobile-mvp/index.html'),
      },
    },
  },
})
