// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxt/image", "@hypernym/nuxt-anime"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'anime.js',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        //{ name: 'description', content: 'Création de site web et refonte graphique' },
        //{ name: 'image', content: 'https://assistanna.com/img-seo.png'}
      ],
    }
  },
  anime: {
    provide: true
  }
})