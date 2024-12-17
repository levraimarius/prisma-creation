<template>
  <div
    class="flex items-center justify-center w-16 h-16 transition-all duration-300 rounded-xl sm:w-20 sm:h-20"
    :class="[
      category === 'wordpress'
        ? 'bg-gradient-to-br from-wordpress-50 to-wordpress-100 group-hover:from-wordpress-100 group-hover:to-wordpress-200'
        : 'bg-gradient-to-br from-custom-50 to-custom-100 group-hover:from-custom-100 group-hover:to-custom-200',
    ]"
  >
    <component
      :is="icon"
      class="w-8 h-8 transition-transform duration-300 sm:w-10 sm:h-10"
      :class="[category === 'wordpress' ? 'text-wordpress' : 'text-custom']"
    />
  </div>
</template>

<script setup lang="ts">
import type { ServiceIcon } from "../../types";
import type { ServiceCategory } from "../../types";

defineProps<{
  icon: ServiceIcon;
  category: ServiceCategory;
}>();
</script>
