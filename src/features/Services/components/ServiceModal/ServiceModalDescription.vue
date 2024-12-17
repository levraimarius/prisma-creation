<template>
  <div class="space-y-4">
    <h4 class="text-lg font-semibold text-gray-900">Description du service</h4>
    <p class="leading-relaxed text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  description: string;
}>();
</script>
