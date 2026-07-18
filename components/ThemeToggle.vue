<template>
  <button
    type="button"
    class="inline-flex size-9 items-center justify-center border border-line text-ink-soft transition-colors duration-300 hover:border-ink hover:text-ink"
    :aria-label="isDark ? t.themeToLight : t.themeToDark"
    @click="toggleDark()"
  >
    <svg
      v-if="isDark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      class="size-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      class="size-4"
      aria-hidden="true"
    >
      <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const { t } = useLocale();

const isDark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "dark",
  valueLight: "",
  storageKey: "portfolio-color-mode",
});

const toggleDark = useToggle(isDark);
</script>
