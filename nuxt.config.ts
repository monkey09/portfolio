// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      title: 'Monkey',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg', href: '_nuxt/monkey.svg' }
      ]
    }
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify', 'vue3touchevents']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  runtimeConfig: {
    public: {
      nytUri: process.env.NYT_URI,
      apiKey: process.env.API_KEY
    }
  }
})
