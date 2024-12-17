<template>
  <div class="space-y-4">
    <h4 class="text-lg font-semibold text-gray-900">Tarification</h4>
    <div
      class="p-6 rounded-xl"
      :class="[category === 'wordpress' ? 'bg-wordpress-50' : 'bg-custom-50']"
    >
      <div class="flex flex-col items-start gap-2">
        <span
          class="text-sm font-medium"
          :class="[category === 'wordpress' ? 'text-wordpress' : 'text-custom']"
          >{{ priceLabel }}</span
        >
        <div class="flex items-baseline gap-1">
          <span class="text-4xl font-bold text-gray-900">{{ price }}</span>
          <span class="text-gray-900">{{ period }}</span>
        </div>
        <p class="mt-2 text-sm italic text-gray-600">
          *Prix variable en fonction du devis
        </p>
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
