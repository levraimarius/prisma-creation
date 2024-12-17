<template>
  <TransitionChild v-bind="backdropTransition">
    <div class="fixed inset-0 transition-opacity">
      <div
        class="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
        @click="$emit('close')"
      />
    </div>
  </TransitionChild>
</template>

<script setup lang="ts">
import { TransitionChild } from "@headlessui/vue";
import { useModalTransitions } from "../../composables/useModalTransitions";

defineEmits<{
  (e: "close"): void;
}>();

const { backdropTransition } = useModalTransitions();
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
