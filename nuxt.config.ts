// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },
  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
  modules: ['nuxt-graphql-client'],
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_theming.scss" as *;',
        },
      },
    },
  },
})
