import type { RouterConfig } from "@nuxt/schema";
import type { RouterScrollBehavior } from "vue-router";
import { START_LOCATION } from "vue-router";

// Nuxt enables browser scroll restoration on first paint, then re-applies
// history.state.scroll via scrollBehavior(to, START_LOCATION, savedPosition).
// That is what lands reloads mid-page — ignore that saved position on boot.
const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  const nuxtApp = useNuxtApp();

  if (to.hash) {
    const position = () => ({
      el: to.hash,
      top: hashScrollMargin(to.hash),
      behavior: "smooth" as const,
    });

    // Same-route hash change (e.g. /#work → /#about): no page navigation,
    // so page:finish never fires — scroll immediately.
    const samePage =
      from !== START_LOCATION &&
      from.matched.length > 0 &&
      to.path === from.path;

    if (samePage || from === START_LOCATION || !from.matched.length) {
      return new Promise((resolve) => {
        requestAnimationFrame(() => resolve(position()));
      });
    }

    // Coming from another route (e.g. /projects → /#work)
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce("page:finish", () => {
        requestAnimationFrame(() => resolve(position()));
      });
    });
  }

  // Back/forward within the SPA only — not the initial browser-restored offset
  if (savedPosition && from.matched.length > 0) {
    return savedPosition;
  }

  const hasTransition = (route: typeof to) =>
    !!(route.meta.pageTransition ?? true);

  const hookToWait =
    from.matched.length > 0 && hasTransition(from) && hasTransition(to)
      ? "page:transition:finish"
      : "page:finish";

  return new Promise((resolve) => {
    if (from === START_LOCATION || !from.matched.length) {
      requestAnimationFrame(() => resolve({ left: 0, top: 0 }));
      return;
    }

    nuxtApp.hooks.hookOnce(hookToWait, () => {
      requestAnimationFrame(() => resolve({ left: 0, top: 0 }));
    });
  });
};

function hashScrollMargin(selector: string) {
  try {
    const elem = document.querySelector(selector);
    if (!elem) return 80;
    return (
      (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) +
      (Number.parseFloat(
        getComputedStyle(document.documentElement).scrollPaddingTop
      ) || 0)
    );
  } catch {
    return 80;
  }
}

export default <RouterConfig>{ scrollBehavior };
