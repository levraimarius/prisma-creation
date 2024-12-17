<template>
  <div class="flex items-center justify-end gap-4 px-6 py-4 bg-gray-50">
    <button
      type="button"
      @click="$emit('close')"
      class="px-4 py-2 text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
    >
      Fermer
    </button>
    <a
      href="https://cal.com/prisma-creation/consultation-pour-la-creation-dun-site-web"
      target="_blank"
      class="inline-flex items-center px-4 py-2 text-white transition-colors rounded-lg"
      :class="[
        category === 'wordpress'
          ? 'bg-wordpress hover:bg-wordpress-600'
          : 'bg-custom hover:bg-custom-600',
      ]"
    >
      Prendre rendez-vous
      <ArrowTopRightOnSquareIcon class="w-4 h-4 ml-2" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import type { ServiceCategory } from "../../types";

defineProps<{
  category: ServiceCategory;
}>();

defineEmits<{
  (e: "close"): void;
}>();
</script>
