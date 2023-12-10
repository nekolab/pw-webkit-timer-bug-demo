import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: 'vue',
        replacement: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
      },
    ],
  },
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
      ],
    },
  },
  preview: {
    port: 8080,
  },
  server: {
    port: 8080,
  }
})
