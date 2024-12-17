<template>
  <span
    class="p-2 text-sm font-medium transition-all duration-200 select-none"
    :class="[
      isActive
        ? category === 'wordpress'
          ? 'rounded-md text-wordpress bg-wordpress-50'
          : 'rounded-md text-custom bg-indigo-50'
        : 'text-gray-500',
      category === 'wordpress'
        ? 'hover:text-wordpress/90'
        : 'hover:text-custom/90',
    ]"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import type { ServiceCategory } from "../../types";

defineProps<{
  label: string;
  isActive: boolean;
  category: ServiceCategory;
}>();
</script>
