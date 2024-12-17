<template>
  <router-link
    :to="city.path"
    class="relative px-4 py-2 transition-all duration-200 rounded-md group hover:bg-indigo-50"
  >
    <div class="flex items-center space-x-2">
      <MapPinIcon class="w-5 h-5 text-indigo-600" />
      <span class="text-gray-900 group-hover:text-indigo-600">{{
        city.name
      }}</span>
    </div>
    <span class="text-sm text-gray-500 capitalize">
      {{ city.department }}
    </span>
  </router-link>
</template>

<script setup lang="ts">
import { MapPinIcon } from "@heroicons/vue/24/outline";

defineProps({
  city: {
    type: Object,
    required: true,
  },
});
</script>
