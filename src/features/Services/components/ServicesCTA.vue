<template>
  <div
    class="p-8 mt-16 shadow-lg bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl"
  >
    <h3 class="mb-4 text-2xl font-bold text-white">
      Vous ne savez pas quelle formule choisir ?
    </h3>
    <p class="mb-6 text-indigo-100">
      Prenez rendez-vous pour une consultation gratuite et découvrez la solution
      adaptée à vos besoins.
    </p>
    <a
      href="https://cal.com/prisma-creation/consultation-pour-la-creation-dun-site-web"
      target="_blank"
      class="inline-flex items-center px-6 py-3 text-indigo-600 transition-colors duration-200 bg-white rounded-lg hover:bg-indigo-50 group"
    >
      Prendre rendez-vous
      <ArrowRightIcon
        class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
      />
    </a>
  </div>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>
