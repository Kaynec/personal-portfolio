<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-[background,border-color,backdrop-filter] duration-300"
    :class="
      scrolled
        ? 'border-line/70 bg-surface/90 backdrop-blur-md'
        : 'bg-transparent'
    "
  >
    <div
      class="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10"
    >
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight text-ink transition-colors hover:text-accent"
      >
        <BrandMark />
        <span>Ali Reza Ozbak</span>
      </NuxtLink>

      <div class="flex items-center gap-3 md:gap-5">
        <nav
          class="hidden items-center gap-5 text-sm text-ink-soft sm:flex md:gap-7"
        >
          <button
            v-for="link in links"
            :key="link.hash"
            type="button"
            class="relative cursor-pointer bg-transparent p-0 transition-colors hover:text-ink after:absolute after:-bottom-1 after:start-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            @click="goToSection(link.hash)"
          >
            {{ link.label }}
          </button>
        </nav>
        <ClientOnly>
          <div class="flex items-center gap-2">
            <LocaleToggle />
            <ThemeToggle />
          </div>
        </ClientOnly>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false);
const route = useRoute();
const router = useRouter();
const { t, initLocale } = useLocale();

const links = computed(() => [
  { label: t.value.navWork, hash: "#work" },
  { label: t.value.navExperience, hash: "#experience" },
  { label: t.value.navAbout, hash: "#about" },
  { label: t.value.navContact, hash: "#contact" },
]);

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
};

const scrollToHash = (hash: string) => {
  const el = document.querySelector(hash);
  if (!el) return false;

  const headerOffset = 88;
  const top =
    el.getBoundingClientRect().top +
    (window.pageYOffset || document.documentElement.scrollTop) -
    headerOffset;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  return true;
};

const goToSection = async (hash: string) => {
  const onHome = route.path === "/" || route.path === "";

  if (!onHome) {
    await router.push({ path: "/", hash });
    await nextTick();
    // Wait for home page content to mount
    setTimeout(() => scrollToHash(hash), 80);
    return;
  }

  if (route.hash !== hash) {
    await router.push({ hash });
  }

  await nextTick();
  requestAnimationFrame(() => {
    if (!scrollToHash(hash)) {
      setTimeout(() => scrollToHash(hash), 50);
    }
  });
};

onMounted(() => {
  initLocale();
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Deep-link support: /#experience on first load
  if (route.hash) {
    setTimeout(() => scrollToHash(route.hash), 100);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
