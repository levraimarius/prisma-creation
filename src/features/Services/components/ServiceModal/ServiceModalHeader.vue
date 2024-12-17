<template>
  <div class="relative px-6 pt-6 pb-4 border-b border-gray-100">
    <div class="flex items-center gap-4">
      <div
        class="flex items-center justify-center w-12 h-12 rounded-xl"
        :class="[category === 'wordpress' ? 'bg-wordpress-50' : 'bg-custom-50']"
      >
        <component
          :is="icon"
          class="w-6 h-6"
          :class="[category === 'wordpress' ? 'text-wordpress' : 'text-custom']"
        />
      </div>
      <DialogTitle as="h3" class="text-2xl font-bold text-gray-900">
        {{ title }}
      </DialogTitle>
    </div>
    <button
      type="button"
      class="absolute text-gray-400 transition-colors top-6 right-6 hover:text-gray-500"
      @click="$emit('close')"
    >
      <span class="sr-only">Fermer</span>
      <XMarkIcon class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { DialogTitle } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import type { ServiceIcon, ServiceCategory } from "../../types";

defineProps<{
  title: string;
  icon: ServiceIcon;
  category: ServiceCategory;
}>();

defineEmits<{
  (e: "close"): void;
}>();
</script>
