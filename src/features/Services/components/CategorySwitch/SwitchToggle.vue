<template>
  <Switch
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    class="relative inline-flex items-center transition-colors duration-200 ease-in-out rounded-full cursor-pointer group h-7 w-14 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75"
    :class="[
      category === 'wordpress'
        ? 'bg-wordpress hover:bg-wordpress-600 focus-visible:ring-wordpress'
        : 'bg-custom hover:bg-custom-600 focus-visible:ring-custom',
    ]"
  >
    <span class="sr-only">{{ label }}</span>
    <span
      aria-hidden="true"
      class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow-lg pointer-events-none ring-0"
      :class="[modelValue ? 'translate-x-8' : 'translate-x-1']"
    />
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue";
import type { ServiceCategory } from "../../types";

defineProps<{
  modelValue: boolean;
  label: string;
  category: ServiceCategory;
}>();

defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();
</script>
