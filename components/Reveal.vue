<template>
  <div
    ref="el"
    :class="[
      'transition-all duration-700 ease-out-expo',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
      props.class,
    ]"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    delay?: number;
  }>(),
  { delay: 0 }
);

const el = ref<HTMLElement | null>(null);
const visible = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!el.value) return;

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true;
        observer?.disconnect();
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  observer.observe(el.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>
