<template>
  <div
    class="inline-flex h-9 items-center border border-line text-sm font-medium"
    role="group"
    aria-label="Language"
  >
    <button
      type="button"
      class="h-full px-2.5 transition-colors duration-300"
      :class="
        locale === 'en'
          ? 'bg-ink text-surface'
          : 'text-ink-soft hover:text-ink'
      "
      :aria-pressed="locale === 'en'"
      @click="switchTo('en')"
    >
      EN
    </button>
    <span class="h-full w-px bg-line" aria-hidden="true" />
    <button
      type="button"
      class="h-full px-2.5 transition-colors duration-300"
      :class="
        locale === 'fa'
          ? 'bg-ink text-surface'
          : 'text-ink-soft hover:text-ink'
      "
      :aria-pressed="locale === 'fa'"
      @click="switchTo('fa')"
    >
      FA
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Locale } from "~/locales/messages";

const { locale, setLocale, initLocale } = useLocale();

const switchTo = (next: Locale) => {
  if (next === locale.value) return;
  setLocale(next);
};

onMounted(() => initLocale());
</script>
