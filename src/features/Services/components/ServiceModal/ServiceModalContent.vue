<template>
  <div class="mt-4">
    <p class="text-gray-600">{{ description }}</p>

    <div class="mt-6">
      <h4 class="mb-3 font-semibold text-gray-900">
        Fonctionnalités incluses :
      </h4>
      <ul class="space-y-3">
        <li
          v-for="feature in features"
          :key="feature"
          class="flex items-start space-x-3"
        >
          <CheckCircleIcon class="flex-shrink-0 w-5 h-5 mt-1 text-indigo-600" />
          <span class="text-gray-600">{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/solid";

defineProps<{
  description: string;
  features: string[];
}>();
</script>
