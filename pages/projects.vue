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
      class="flex flex-col gap-4 container max-w-7xl mx-auto justify-center h-full"
    >
      <h1 class="text-5xl">Projects</h1>

      <BentoGrid
        class="grid w-full auto-rows-[22rem] grid-cols-3 gap-4 lg:grid-rows-3"
      >
        <BentoGridCard
          v-for="(feature, index) in features"
          :key="index"
          v-bind="feature"
          :class="feature.class"
        >
          <template v-if="feature.image" #background>
            <div
              class="absolute right-0 top-0 size-full bg-center opacity-20 transition duration-150 ease-in-out group-hover:opacity-20"
              :style="`background-image: url('${feature.image}')`"
              style="background-size: cover; background-repeat: no-repeat"
            ></div>
          </template>
        </BentoGridCard>
      </BentoGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    name: "Cheats Game",
    description: "Shopping website with a a focus on gaming built with Nuxt",
    href: {
      external: true,
      link: "https://cheatsg.ir",
    },
    image:
      "https://ik.imagekit.io/p1ff3xmg5n/image.png?updatedAt=1739400991595",
    cta: "Visit",
    class: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },

  {
    name: "Advent Of Code 2024",
    description: "Check out my advent of code solutions for 2024.",
    href: {
      external: true,
      link: "https://github.com/kaynec/advent-of-code-2024",
    },

    image:
      "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Visit",
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    name: "Caption",
    description: "a video subtitle editing app built with react",
    href: {
      external: true,
      link: "https://caption.darkube.app",
    },
    cta: "Visit",
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "Herfeh Plus Pwa",
    description: "a pwa app built with vue and vuetify",
    href: {
      external: true,
      link: "https://webapp.herfehplus.ir/",
    },
    cta: "Visit",
    class: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Saei Shop",
    description: "A general purpose shopping website built with nuxt",
    href: {
      external: true,
      link: "https://cheatsg.ir",
    },
    images: [
      "https://ik.imagekit.io/p1ff3xmg5n/image.png?updatedAt=1739399354454",
      "https://ik.imagekit.io/p1ff3xmg5n/image.png?updatedAt=1739399037367",
    ],
    image:
      "https://ik.imagekit.io/p1ff3xmg5n/image.png?updatedAt=1739401875675",

    cta: "Visit",
    class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
];
</script>
