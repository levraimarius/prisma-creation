<template>
  <div
    v-if="loading"
    class="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm"
  >
    <LoadingSpinner size="lg" />
  </div>
</template>

<script setup lang="ts">
import LoadingSpinner from "./LoadingSpinner.vue";

defineProps<{
  loading: boolean;
}>();
</script>
