import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vueDevTools(),
    quasar({
      sassVariables: '@/styles/_quasar-variables.sass',
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {},
      sass: {}
    }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      //__ ALTERAR DE ACORDO COM A MAQUINA __//
      'dpmg-ui-kit': path.resolve(__dirname, 'D:/DEV/DPMG/dpmg-ui-kit/src')
    },
  },

  optimizeDeps: {
    include: ['quasar'],
  }
})