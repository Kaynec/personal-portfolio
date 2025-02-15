// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  tailwindcss: {
    cssPath: "assets/css/index.css",
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
