<template>
  <div
    class="relative flex items-center justify-center gap-6 p-2 category-switch"
  >
    <!-- Custom Category Label -->
    <CategoryLabel
      label="Sur mesure"
      :is-active="selectedCategory === 'custom'"
      category="custom"
    />

    <!-- Switch Toggle -->
    <SwitchToggle
      v-model="isWordPress"
      label="Changer de catégorie"
      :category="selectedCategory"
      class="z-10"
    />

    <!-- WordPress Category Label -->
    <CategoryLabel
      label="WordPress"
      :is-active="selectedCategory === 'wordpress'"
      category="wordpress"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CategoryLabel from "./CategoryLabel.vue";
import SwitchToggle from "./SwitchToggle.vue";
import type { ServiceCategory } from "../../types";

const props = defineProps<{
  modelValue: ServiceCategory;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: ServiceCategory): void;
}>();

const isWordPress = computed({
  get: () => props.modelValue === "wordpress",
  set: (value) => emit("update:modelValue", value ? "wordpress" : "custom"),
});

const selectedCategory = computed(() => props.modelValue);
</script>
