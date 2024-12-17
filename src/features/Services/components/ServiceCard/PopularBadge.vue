<template>
  <div
    class="absolute px-3 py-1 text-xs font-bold text-white transition-opacity duration-200 rounded-full shadow-md opacity-0 top-4 right-4 group-hover:opacity-100"
    :class="[category === 'wordpress' ? 'bg-wordpress' : 'bg-custom']"
  >
    Populaire
  </div>
</template>

<script setup lang="ts">
import type { ServiceCategory } from "../../types";

defineProps<{
  category: ServiceCategory;
}>();
</script>
