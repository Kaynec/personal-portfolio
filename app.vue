<template>
  <div class="min-h-svh">
    <AppHeader />
    <Transition name="locale" mode="out-in">
      <div :key="locale" class="locale-shell">
        <NuxtPage />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { locale, initLocale } = useLocale();

onMounted(() => initLocale());
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(4px);
}

.locale-enter-active,
.locale-leave-active {
  transition: opacity 0.38s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.38s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.38s cubic-bezier(0.16, 1, 0.3, 1);
}

.locale-enter-from {
  opacity: 0;
  filter: blur(5px);
  transform: translateY(0.6rem) scale(0.985);
}

.locale-leave-to {
  opacity: 0;
  filter: blur(5px);
  transform: translateY(-0.45rem) scale(0.985);
}
</style>
