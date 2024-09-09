// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devServer:{
    host: 'http://127.0.0.1:8000/'
  },

  modules: ['nuxt-auth-sanctum'],

  sanctum:{
    baseUrl: 'http://localhost:8000',
    redirect:{
      onLogin: '/dashboard',

    }
  }
})