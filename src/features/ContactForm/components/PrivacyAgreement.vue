<template>
  <SwitchGroup as="div" class="flex gap-x-2">
    <div class="flex items-center h-6">
      <Switch
        v-model="agreement"
        :class="[
          agreement ? 'bg-indigo-600' : 'bg-gray-200',
          'flex w-10 flex-none cursor-pointer rounded-full p-1 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        ]"
      >
        <span
          aria-hidden="true"
          :class="[
            agreement ? 'translate-x-4' : 'translate-x-0',
            'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
          ]"
        />
      </Switch>
    </div>
    <p class="text-sm leading-6 text-gray-600">
      En sélectionnant ceci, vous acceptez notre
      <a
        href="/politique-de-confidentialite"
        class="font-semibold text-indigo-600 hover:text-indigo-700 transition"
      >politique de confidentialité</a>.
    </p>
  </SwitchGroup>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Switch, SwitchGroup } from '@headlessui/vue';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const agreement = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
</script>