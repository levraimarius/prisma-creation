<template>
  <div
    class="relative overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded-2xl hover:shadow-xl hover:-translate-y-1"
    :class="[
      category === 'wordpress'
        ? 'hover:border-wordpress border-2 border-transparent'
        : 'hover:border-custom border-2 border-transparent',
    ]"
  >
    <PopularBadge v-if="popular" :category="category" />

    <div class="p-4 sm:p-6 lg:p-8">
      <!-- Header -->
      <div class="flex flex-row items-center gap-4 mb-6 sm:gap-6 sm:mb-8">
        <ServiceIcon :icon="icon" :category="category" />
        <h3
          class="text-xl font-bold text-left text-gray-900 transition-colors sm:text-2xl"
          :class="[
            category === 'wordpress'
              ? 'group-hover:text-wordpress'
              : 'group-hover:text-custom',
          ]"
        >
          {{ title }}
        </h3>
      </div>

      <!-- Pricing -->
      <ServicePrice
        :price-type="priceType"
        :price-label="priceLabel"
        :price="price"
        :period="period"
        :category="category"
        class="mb-6 sm:mb-8"
      />

      <p class="my-6 text-sm text-left text-gray-600 sm:text-base">
        {{ description }}
      </p>

      <!-- CTA Button -->
      <button
        type="button"
        @click="handleSelect"
        class="relative w-full px-4 py-3 text-white transition-all duration-200 transform sm:px-6 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2"
        :class="[
          category === 'wordpress'
            ? 'bg-wordpress hover:bg-wordpress-600 focus:ring-wordpress'
            : 'bg-custom hover:bg-custom-600 focus:ring-custom',
        ]"
      >
        <div class="relative z-10 flex items-center justify-center">
          <span class="text-sm sm:text-base">En savoir plus</span>
          <ArrowRightIcon
            class="w-4 h-4 ml-2 transition-transform sm:w-5 sm:h-5 group-hover:translate-x-1"
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import type { Service, ServiceCategory } from "../../types";
import ServiceIcon from "./ServiceIcon.vue";
import ServicePrice from "./ServicePrice.vue";
import PopularBadge from "./PopularBadge.vue";

const props = defineProps<{
  id: string;
  title: string;
  priceType: Service["priceType"];
  priceLabel: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: Service["icon"];
  category: ServiceCategory;
}>();

const emit = defineEmits<{
  (e: "select", id: string): void;
}>();

const handleSelect = () => {
  emit("select", props.id);
};
</script>
