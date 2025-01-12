// file: ~/nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['@/assets/styles/main.scss'],

  build: {
    transpile: ['@nuxtjs/axios'],
  },

  compatibilityDate: '2025-01-12',
});