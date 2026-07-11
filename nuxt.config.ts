// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-11',
  css: ['~/assets/css/styles.css'],
  site: {
    url: process.env.PUBLIC_SITE_URL || 'https://erwan-decoster.com',
  },
  image: {
    // @nuxt/image v2 a supprimé le breakpoint xs (320px), on le restaure
    // car les attributs sizes des NuxtImg l'utilisent
    screens: {
      xs: 320,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  security: {
    headers: {
      xFrameOptions: 'DENY',
    },
  },
  devtools: { enabled: true },
  build: {
    transpile: ['gsap'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-security',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    'nuxt-delay-hydration',
    // '@nuxtjs/i18n',
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.PUBLIC_SITE_URL || 'https://erwan-decoster.com',
    },
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
  },
})
