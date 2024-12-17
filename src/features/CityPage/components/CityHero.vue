<template>
  <div class="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
    <img
      :src="backgroundImage"
      class="absolute inset-0 object-cover object-right -z-10 size-full md:object-center"
      alt="Image de fond pour l'agence web"
      draggable="false"
    />
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-3xl mx-auto lg:mx-0">
        <h1
          class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl anime-title"
        >
          Agence Web Prisma Création à
          <span class="highlight-container">
            <span class="highlight-background"></span>
            <span class="highlight">{{ cityName }}</span>
          </span>
        </h1>
        <p
          class="mt-8 text-lg font-medium text-gray-600 text-pretty sm:text-xl/8"
        >
          Découvrez Prisma Création, votre agence web à {{ cityName }}. Création
          de sites web professionnels, performants et adaptés à vos besoins.
        </p>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  cityName: string;
  backgroundImage: string;
}>();
</script>

<style scoped>
.highlight-container {
  position: relative;
  display: inline-block;
}

.highlight-background {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 90%;
  background-color: #fcd34d;
  z-index: -1;
  width: 0;
  border-radius: 8px;
}

.highlight {
  position: relative;
  z-index: 1;
  padding: 0 5px;
}
</style>
