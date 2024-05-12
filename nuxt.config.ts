// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages:true,
  modules: [
    "@nuxtjs/tailwindcss", 
    // "@nuxtjs/supabase",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    "nuxt-lodash",
    'nuxt-icon'
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  app: {
    head: {
      script: [
        { src: 'https://js.stripe.com/v3/', defer: true }
      ],
    }
  },
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
}) 