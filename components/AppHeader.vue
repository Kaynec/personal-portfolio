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
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="relative transition-colors hover:text-ink after:absolute after:-bottom-1 after:start-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            {{ link.label }}
          </a>
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
const { t, initLocale } = useLocale();

const links = computed(() => [
  { label: t.value.navWork, href: "/#work" },
  { label: t.value.navExperience, href: "/#experience" },
  { label: t.value.navAbout, href: "/#about" },
  { label: t.value.navContact, href: "/#contact" },
]);

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
};

onMounted(() => {
  initLocale();
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
