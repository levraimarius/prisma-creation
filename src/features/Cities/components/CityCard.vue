<template>
  <router-link
    :to="city.path"
    class="relative flex flex-col p-6 transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-md hover:-translate-y-1"
  >
    <!-- Card Header -->
    <div class="flex items-center gap-4 mb-4">
      <div
        class="flex items-center justify-center w-12 h-12 transition-colors bg-indigo-50 rounded-xl group-hover:bg-indigo-100"
      >
        <MapPinIcon class="w-6 h-6 text-indigo-600" />
      </div>
      <div class="flex-1 min-w-0">
        <h3
          class="text-lg font-semibold text-gray-900 truncate transition-colors group-hover:text-indigo-600"
        >
          {{ city.name }}
        </h3>
        <p class="text-sm text-gray-500 capitalize">
          {{ city.department }}
        </p>
      </div>
    </div>

    <!-- Card Footer -->
    <div
      class="flex items-center pt-4 mt-4 text-sm font-medium text-indigo-600 border-t border-gray-100"
    >
      <span class="transition-colors group-hover:text-indigo-700"
        >Découvrir l'agence</span
      >
      <ArrowRightIcon
        class="w-4 h-4 ml-2 transition-all group-hover:translate-x-1"
      />
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { MapPinIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";
import type { City } from "../types";

defineProps<{
  city: City;
}>();
</script>
