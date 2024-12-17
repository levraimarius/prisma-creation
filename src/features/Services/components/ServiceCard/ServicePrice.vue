<template>
  <div class="space-y-1 sm:space-y-2">
    <div class="flex flex-col items-start gap-1">
      <span
        class="text-sm font-medium"
        :class="[category === 'wordpress' ? 'text-wordpress' : 'text-custom']"
        >{{ priceLabel }}</span
      >
      <div class="flex items-baseline gap-1">
        <span class="text-3xl font-bold text-gray-900 sm:text-4xl">{{
          price
        }}</span>
        <span class="text-sm text-gray-900 sm:text-base">{{ period }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PriceType, ServiceCategory } from "../../types";

defineProps<{
  priceType: PriceType;
  priceLabel: string;
  price: string; // Changed from any to string
  period: string;
  category: ServiceCategory;
}>();
</script>
