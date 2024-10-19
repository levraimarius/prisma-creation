<template>
  <div
    v-if="visible"
    ref="notification"
    :class="['fixed bottom-5 right-5', notificationTypeClass]"
    class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
  >
    <div class="p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <HeroCheckIcon
            v-if="type === 'success'"
            class="h-6 w-6 text-green-400"
          />
          <HeroExclamationCircleIcon v-else class="h-6 w-6 text-red-400" />
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="text-sm font-medium text-gray-900">
            {{ title }}
          </p>
          <p class="mt-1 text-sm text-gray-500">
            {{ message }}
          </p>
        </div>
        <div class="ml-4 flex-shrink-0 flex">
          <button
            @click="close"
            class="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">Fermer</span>
            <HeroXMarkIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from "vue";
import { gsap } from "gsap";
import {
  CheckCircleIcon as HeroCheckIcon,
  XMarkIcon as HeroXMarkIcon,
  ExclamationCircleIcon as HeroExclamationCircleIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
  type: {
    type: String,
    default: "success",
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  trigger: {
    type: Number,
    required: true,
  },
});

const visible = ref(false);
const notification = ref(null);
let hideTimeout = null;

const notificationTypeClass = computed(() => {
  return props.type === "success" ? "bg-green-50" : "bg-red-50";
});

const close = () => {
  gsap.to(notification.value, {
    opacity: 0,
    y: 50,
    duration: 0.5,
    onComplete: () => {
      visible.value = false;
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    },
  });
};

watch(
  () => props.trigger,
  async () => {
    visible.value = true;
    await nextTick();

    gsap.fromTo(
      notification.value,
      { opacity: 0, y: 0 },
      { opacity: 1, y: -10, duration: 0.5 }
    );

    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }

    hideTimeout = setTimeout(() => {
      close();
    }, 5000);
  }
);
</script>

<style scoped>
.fixed {
  z-index: 50;
}
</style>
