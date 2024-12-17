<template>
  <div class="space-y-6 anime-content">
    <h1 class="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
      Votre site web
      <HighlightText color="bg-amber-300">sur mesure</HighlightText>, simplement
    </h1>

    <p class="max-w-2xl mx-auto text-lg text-gray-600 md:text-xl">
      De la conception à la mise à jour, profitez d'un suivi personnalisé adapté
      à vos besoins. Que vous soyez un particulier, un artisan ou un petit
      commerçant, nous vous accompagnons à chaque étape.
    </p>

    <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
      <div
        class="flex items-center px-4 py-2 space-x-2 rounded-full shadow-sm bg-white/80 backdrop-blur-sm"
      >
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <span class="text-sm font-medium text-gray-600"
          >Disponible pour vos projets</span
        >
      </div>
      <div
        class="flex items-center px-4 py-2 space-x-2 rounded-full shadow-sm bg-white/80 backdrop-blur-sm"
      >
        <span class="text-sm font-medium text-gray-600"
          >⭐ 4.9/5 satisfaction client</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HighlightText from "./HighlightText.vue";
</script>

<style scoped>
.anime-content {
  opacity: 0;
  transform: translateY(20px);
  animation: content-fade-in 1s ease-out forwards;
}

@keyframes content-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
