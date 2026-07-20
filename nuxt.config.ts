// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: process.env.NODE_ENV === "development" },
  nitro: {
    preset: "static",
  },
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
    baseURL,
    head: {
      title: "Ali Reza Ozbak — Full-stack Developer",
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
      meta: [
        {
          name: "description",
          content:
            "Portfolio of Ali Reza Ozbak, a full-stack developer with five years of experience building web products from interface to API.",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: `${baseURL}favicon.svg` },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${baseURL}favicon-32.png`,
        },
        { rel: "apple-touch-icon", href: `${baseURL}apple-touch-icon.png` },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Vazirmatn:wght@400;500;600;700&display=swap",
        },
      ],
      script: [
        {
          innerHTML:
            "(function(){try{if('scrollRestoration' in history)history.scrollRestoration='manual';if(!location.hash)window.scrollTo(0,0);var m=localStorage.getItem('portfolio-color-mode');var d=m==='dark'||(m!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');var l=localStorage.getItem('portfolio-locale');if(l==='fa'){document.documentElement.lang='fa';document.documentElement.dir='rtl';document.documentElement.classList.add('font-fa');}}catch(e){}})();",
          type: "text/javascript",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
