<template>
  <div :class="className">
    <label
      :for="id"
      class="block text-sm font-semibold leading-6 text-gray-900"
    >
      {{ label }}
    </label>
    <div class="mt-2.5">
      <template v-if="type === 'textarea'">
        <textarea
          :id="id"
          v-model="inputValue"
          :rows="rows"
          class="form-input"
          v-bind="$attrs"
        ></textarea>
      </template>
      <template v-else>
        <input
          :id="id"
          :type="type"
          v-model="inputValue"
          class="form-input"
          v-bind="$attrs"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  id: string;
  modelValue: string;
  label: string;
  type?: string;
  rows?: number;
  className?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<style scoped>
.form-input {
  @apply block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
}
</style>
