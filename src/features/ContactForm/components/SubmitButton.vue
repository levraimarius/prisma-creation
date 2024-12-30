<template>
  <button
    type="submit"
    :disabled="loading"
    class="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <span v-if="!loading">Envoyer le message</span>
    <span v-else class="flex items-center">
      <ArrowPathIcon class="w-5 h-5 mr-2 animate-spin" />
      Envoi en cours...
    </span>
  </button>
</template>

<script setup lang="ts">
import { ArrowPathIcon } from '@heroicons/vue/24/outline';

defineProps<{
  loading: boolean;
}>();
</script>