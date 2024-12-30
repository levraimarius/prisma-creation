<template>
  <div v-if="error" class="p-4 rounded-lg bg-red-50">
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon class="w-5 h-5 text-red-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-red-800">
          Une erreur est survenue
        </h3>
        <div class="mt-2 text-sm text-red-700">
          {{ error.message }}
        </div>
        <button
          @click="resetError"
          class="mt-4 text-sm font-medium text-red-600 hover:text-red-500"
        >
          Réessayer
        </button>
      </div>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from "vue";
import { XCircleIcon } from "@heroicons/vue/24/solid";

const error = ref<Error | null>(null);

onErrorCaptured((err: Error) => {
  error.value = err;
  return false;
});

const resetError = () => {
  error.value = null;
};
</script>
