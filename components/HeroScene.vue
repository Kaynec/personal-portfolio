<template>
  <div
    class="hero-lottie relative flex aspect-square w-full max-w-md items-center justify-center md:max-w-lg"
    role="img"
    :aria-label="label"
  >
    <ClientOnly>
      <DotLottieVue
        class="h-full w-full"
        style="height: 100%; width: 100%"
        autoplay
        loop
        :src="src"
      />
      <template #fallback>
        <div class="h-full w-full animate-pulse rounded-[2rem] bg-accent-soft/50" />
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { withBase } from "ufo";

const { isFa } = useLocale();
const config = useRuntimeConfig();

const src = withBase("/animations/coding.json", config.app.baseURL);

const label = computed(() =>
  isFa.value
    ? "انیمیشن برنامه‌نویس پشت میز کار"
    : "Animation of a developer working at a desk"
);
</script>
