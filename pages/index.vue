<template>
  <main>
    <!-- Hero -->
    <section
      class="relative mx-auto grid min-h-[100svh] max-w-content items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:px-10 md:pb-20 md:pt-24"
    >
      <div
        class="pointer-events-none absolute inset-x-6 top-24 h-px origin-left scale-x-0 animate-draw-line bg-line md:inset-x-10 rtl:origin-right"
        style="animation-delay: 0.2s"
      />

      <div class="relative z-10 order-2 md:order-1">
        <p
          class="mb-5 animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          style="animation-delay: 0.1s"
        >
          {{ t.role }}
        </p>

        <h1
          class="animate-fade-up text-[clamp(2.75rem,8vw,5.75rem)] font-bold leading-[0.95] tracking-tight text-ink"
          style="animation-delay: 0.2s"
        >
          Ali Reza Ozbak
        </h1>

        <p
          class="mt-6 max-w-md animate-fade-up text-lg leading-relaxed text-ink-soft md:mt-8 md:text-xl"
          style="animation-delay: 0.3s"
        >
          {{ t.heroLine }}
        </p>

        <div
          class="mt-8 flex flex-wrap gap-3 animate-fade-up md:mt-10"
          style="animation-delay: 0.4s"
        >
          <a
            href="#work"
            class="inline-flex items-center justify-center border border-ink bg-ink px-5 py-3 text-sm font-medium text-surface transition-colors duration-300 hover:bg-transparent hover:text-ink"
          >
            {{ t.selectedWork }}
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center border border-line bg-transparent px-5 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
          >
            {{ t.getInTouch }}
          </a>
        </div>
      </div>

      <div
        class="order-1 flex animate-fade-up justify-center md:order-2 md:justify-end"
        style="animation-delay: 0.25s"
      >
        <HeroScene />
      </div>
    </section>

    <!-- Work -->
    <section id="work" class="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <div class="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <div>
            <p
              class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
            >
              {{ t.workEyebrow }}
            </p>
            <h2 class="text-3xl font-semibold tracking-tight md:text-5xl">
              {{ t.workTitle }}
            </h2>
          </div>
          <NuxtLink
            to="/projects"
            class="hidden text-sm text-muted transition-colors hover:text-ink sm:inline-flex"
          >
            {{ t.viewAll }}
          </NuxtLink>
        </div>
      </Reveal>

      <ul class="divide-y divide-line border-y border-line">
        <li v-for="(project, index) in featured" :key="project.name">
          <Reveal :delay="index * 80">
            <div
              class="grid grid-cols-1 items-baseline gap-4 py-8 md:grid-cols-[7rem_1fr] md:gap-8 md:py-10"
            >
              <span class="hidden text-sm text-muted md:block">
                {{ project.year }}
              </span>
              <div class="min-w-0">
                <div class="flex items-baseline gap-3">
                  <h3
                    class="text-2xl font-semibold tracking-tight md:text-3xl"
                  >
                    {{ project.name }}
                  </h3>
                  <span class="text-sm text-muted md:hidden">{{ project.year }}</span>
                </div>
                <p class="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
                  {{ project.description }}
                </p>
                <p class="mt-3 text-xs tracking-wide text-muted">
                  {{ project.stack.join(" · ") }}
                </p>
              </div>
            </div>
          </Reveal>
        </li>
      </ul>
    </section>

    <!-- Experience -->
    <section id="experience" class="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <div class="mb-12 md:mb-16">
          <p
            class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          >
            {{ t.experienceEyebrow }}
          </p>
          <h2 class="text-3xl font-semibold tracking-tight md:text-5xl">
            {{ t.experienceTitle }}
          </h2>
        </div>
      </Reveal>

      <ul class="divide-y divide-line border-y border-line">
        <li
          v-for="(job, index) in t.experience"
          :key="`${job.company}-${job.period}`"
        >
          <Reveal :delay="index * 70">
            <article
              class="grid gap-3 py-8 md:grid-cols-[11rem_1fr] md:gap-10 md:py-10"
            >
              <p class="text-sm text-muted">{{ job.period }}</p>
              <div>
                <h3 class="text-xl font-semibold tracking-tight md:text-2xl">
                  {{ job.role }}
                  <span class="text-muted"> · </span>
                  <span class="text-ink-soft">{{ job.company }}</span>
                </h3>
                <p class="mt-1 text-sm text-muted">
                  {{ job.type
                  }}<template v-if="job.location"> · {{ job.location }}</template>
                </p>
                <p class="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                  {{ job.description }}
                </p>
                <p class="mt-3 text-xs tracking-wide text-muted">
                  {{ job.skills.join(" · ") }}
                </p>
              </div>
            </article>
          </Reveal>
        </li>
      </ul>
    </section>

    <!-- About -->
    <section id="about" class="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
      <div class="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal>
          <p
            class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          >
            {{ t.aboutEyebrow }}
          </p>
          <h2 class="text-3xl font-semibold tracking-tight md:text-5xl">
            {{ t.aboutTitle }}
          </h2>
        </Reveal>

        <div class="space-y-6 text-base leading-relaxed text-ink-soft md:text-lg">
          <Reveal :delay="80">
            <p>{{ t.aboutP1 }}</p>
          </Reveal>
          <Reveal :delay="140">
            <p>{{ t.aboutP2 }}</p>
          </Reveal>
          <Reveal :delay="200">
            <ul class="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-sm text-muted">
              <li v-for="skill in skills" :key="skill">{{ skill }}</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <div class="border-t border-line pt-16 md:pt-24">
          <p
            class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          >
            {{ t.contactEyebrow }}
          </p>
          <h2
            class="max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-5xl"
          >
            {{ t.contactTitle }}
          </h2>
          <p class="mt-6 max-w-lg text-ink-soft">
            {{ t.contactLine }}
          </p>

          <div class="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:mraliozbak@gmail.com"
              class="inline-flex items-center justify-center border border-ink bg-ink px-5 py-3 text-sm font-medium text-surface transition-colors duration-300 hover:bg-transparent hover:text-ink"
            >
              mraliozbak@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ali-ozbak-287860217/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center border border-line px-5 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
            >
              {{ t.linkedIn }}
            </a>
            <a
              href="https://github.com/kaynec"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center border border-line px-5 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
            >
              {{ t.github }}
            </a>
          </div>
        </div>
      </Reveal>
    </section>

    <footer class="mx-auto max-w-content px-6 pb-10 md:px-10">
      <div class="border-t border-line pt-6 text-xs text-muted">
        <span>© {{ year }} Ali Reza Ozbak</span>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
const { t, initLocale } = useLocale();

const featured = computed(() => t.value.projects.slice(0, 4));
const year = new Date().getFullYear();

const skills = [
  "JavaScript",
  "TypeScript",
  "Vue",
  "Nuxt",
  "React",
  "Node.js",
  "Tailwind",
  "PostgreSQL",
];

onMounted(() => initLocale());
</script>
