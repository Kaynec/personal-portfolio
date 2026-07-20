<template>
  <main class="mx-auto min-h-svh max-w-content px-6 pb-16 pt-28 md:px-10">
    <Reveal>
      <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {{ t.projectsArchive }}
      </p>
      <h1 class="text-4xl font-semibold tracking-tight md:text-6xl">
        {{ t.projectsTitle }}
      </h1>
      <p class="mt-5 max-w-xl text-ink-soft">
        {{ t.projectsIntro }}
      </p>
    </Reveal>

    <ul class="mt-14 divide-y divide-line border-y border-line md:mt-20">
      <li v-for="(project, index) in t.projects" :key="project.name">
        <Reveal :delay="index * 60">
          <div
            class="grid grid-cols-1 items-baseline gap-4 py-8 md:grid-cols-[7rem_1fr_12rem] md:gap-8 md:py-10"
          >
            <span class="hidden text-sm text-muted md:block">
              {{ project.year }}
            </span>
            <div>
              <h2
                class="text-2xl font-semibold tracking-tight md:text-3xl"
              >
                {{ project.name }}
              </h2>
              <p class="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
                {{ project.description }}
              </p>
            </div>
            <p class="hidden text-sm text-muted md:block">
              {{ project.stack.join(" · ") }}
            </p>
          </div>
        </Reveal>
      </li>
    </ul>

    <Reveal :delay="100">
      <div class="mt-12">
        <NuxtLink
          to="/"
          class="text-sm text-muted transition-colors hover:text-ink"
        >
          {{ t.backHome }}
        </NuxtLink>
      </div>
    </Reveal>
  </main>
</template>

<script setup lang="ts">
const { t, initLocale } = useLocale();

useHead({
  title: computed(() => t.value.projectsPageTitle),
});

onMounted(() => initLocale());
</script>
