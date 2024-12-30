<template>
  <button
    type="submit"
    :disabled="isLoading"
    class="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <span v-if="!isLoading" class="flex items-center">
      <PaperAirplaneIcon class="w-4 h-4 mr-2 -rotate-45" />
      Envoyer
    </span>
    <span v-else class="flex items-center">
      <ArrowPathIcon class="w-4 h-4 mr-2 animate-spin" />
      Envoi en cours
    </span>
  </button>
</template>

<script setup lang="ts">
import { ArrowPathIcon, PaperAirplaneIcon } from "@heroicons/vue/24/outline";

defineProps<{
  isLoading: boolean;
}>();
</script>
