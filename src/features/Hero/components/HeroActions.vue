<template>
  <div class="flex flex-col items-center mt-10 space-y-4 anime-actions">
    <button
      @click="handleServicesClick"
      class="inline-flex items-center px-6 py-3 text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700 w-max"
      :disabled="isScrolling"
    >
      Découvrir nos services
      <ChevronDownIcon
        class="w-5 h-5 ml-2 transition-transform"
        :class="{ 'animate-bounce': !isScrolling }"
      />
    </button>

    <a
      href="https://cal.com/prisma-creation/consultation-pour-la-creation-dun-site-web"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center px-4 py-2 text-indigo-600 transition-all duration-200 rounded-lg group hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <span>Prendre un rendez-vous</span>
      <ArrowRightIcon
        class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";
import { useScrollTo } from "../../../composables/useScrollTo";

const { scrollTo, isScrolling } = useScrollTo();

const handleServicesClick = () => {
  scrollTo("#services");
};
</script>

<style scoped>
.anime-actions {
  opacity: 0;
  transform: translateY(20px);
  animation: actions-fade-in 1s ease-out 0.5s forwards;
}

@keyframes actions-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
