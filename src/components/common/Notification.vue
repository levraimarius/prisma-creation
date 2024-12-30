<template>
  <div
    v-if="visible"
    ref="notification"
    :class="[
      'fixed z-50 bottom-4 right-4 sm:max-w-sm w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5',
    ]"
    role="alert"
    aria-live="assertive"
  >
    <div class="p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <CheckCircleIcon
            v-if="type === 'success'"
            class="w-6 h-6 text-green-400"
          />
          <ExclamationCircleIcon v-else class="w-6 h-6 text-red-400" />
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="text-sm font-medium text-gray-900">{{ title }}</p>
          <p class="mt-1 text-sm text-gray-500">{{ message }}</p>
        </div>
        <div class="flex flex-shrink-0 ml-4">
          <button
            @click="close"
            class="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">Fermer</span>
            <XMarkIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XMarkIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps<{
  type: "success" | "error";
  title: string;
  message: string;
  trigger: number;
}>();

const visible = ref(false);

function close() {
  visible.value = false;
}

watch(
  () => props.trigger,
  () => {
    visible.value = true;
    setTimeout(() => {
      visible.value = false;
    }, 5000);
  }
);
</script>
