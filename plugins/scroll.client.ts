export default defineNuxtPlugin({
  name: "scroll-top",
  enforce: "post",
  setup() {
    // Nuxt's router plugin sets this back to "auto" so the browser can restore
    // scroll on reload. Pin it to manual and correct the initial position.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const pinTop = () => {
      if (window.location.hash) return;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    pinTop();

    const nuxtApp = useNuxtApp();
    nuxtApp.hook("app:mounted", () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      pinTop();
      requestAnimationFrame(pinTop);
    });
  },
});
