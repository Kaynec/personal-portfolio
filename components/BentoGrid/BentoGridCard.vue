<template>
  <div
    :key="name"
    :class="
      cn(
        'group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl',
        'transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
        props.class
      )
    "
  >
    <slot name="background" />

    <div
      class="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10"
    >
      <component
        :is="icon"
        v-if="icon"
        class="size-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
      />
      <div
        v-else
        class="size-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
      ></div>
      <h3 class="text-xl font-semibold text-neutral-300">
        {{ name }}
      </h3>
      <p class="max-w-lg text-neutral-400">{{ description }}</p>
    </div>

    <div
      class="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
    >
      <UiButton variant="ghost" as-child size="sm" class="pointer-events-auto">
        <NuxtLink v-if="typeof href === 'string'" :href="href">
          {{ cta }} →
        </NuxtLink>
        <a target="_blank" v-else :href="href.link"> {{ cta }} → </a>
      </UiButton>
    </div>
    <div
      class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"
    />
  </div>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

interface Props {
  name: string;
  class?: HTMLAttributes["class"];
  icon?: string;
  description: string;
  href:
    | {
        link: string;
        external: boolean;
      }
    | string;
  cta: string;
}

const props = defineProps<Props>();
</script>
