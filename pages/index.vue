<template>
  <div class="w-full h-full relative py-8">
    <ClientOnly>
      <GridBg
        class="fixed inset-0 z-0 [mask-image:radial-gradient(650px_circle_at_center,white,transparent)]"
        :square-size="4"
        :grid-gap="6"
        color="#60A5FA"
        :max-opacity="0.3"
        :flicker-chance="0.1"
      />
    </ClientOnly>

    <div
      class="flex flex-col md:flex-row items-center justify-center mx-auto max-w-4xl px-8 gap-4 w-full min-h-[75svh] max-h-[850px]"
    >
      <div class="flex flex-col gap-2">
        <SparklesText
          text="Ali Ozbak"
          :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
          :sparkles-count="10"
        />

        <h1 class="text-4xl font-bold">Software Developer</h1>
        <p>
          I'm Ali, a passionate and dedicated software developer with over 2
          years of experience.
        </p>
        <p>
          I specialize in front end development and have a strong foundation of
          technical skills.
        </p>
        <p>
          I'm driven by the opportunity to apply my skills in the real world and
          witness the impact of my work firsthand.
        </p>
      </div>

      <ClientOnly>
        <IconCloud :images="imageUrls" />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const slugs = [
  "typescript",
  "javascript",
  "react",
  "vue",
  "nuxt",
  "quasar",
  "vuetify",
  "tailwindcss",
  "unocss",
  "primevue",
  "html5",
  "css3",
  "scss",
  "express",
  "postgresql",
  "firebase",
  "pocketbase",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "go",
];

const imageUrls = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);
</script>

<style scoped></style>
