<template>
  <ul class="space-y-3">
    <li
      v-for="feature in features"
      :key="feature"
      class="flex items-start gap-3 p-3 transition-colors rounded-lg bg-gray-50/50 hover:bg-gray-50"
    >
      <CheckCircleIcon
        class="w-5 h-5 flex-shrink-0 mt-0.5"
        :class="[category === 'wordpress' ? 'text-wordpress' : 'text-custom']"
      />
      <span class="text-gray-600">{{ feature }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import type { ServiceCategory } from "../../types";

defineProps<{
  features: string[];
  category: ServiceCategory;
}>();
</script>
