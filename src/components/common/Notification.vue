<template>
  <div
    v-if="visible"
    ref="notification"
    :class="[
      'fixed',
      notificationPositionClass,
      notificationTypeClass,
      'sm:max-w-sm md:max-w-md',
    ]"
    role="alert"
    aria-live="assertive"
    class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5"
  >
    <div class="p-4">
      <div class="flex items-start">
        <slot name="icon">
          <HeroCheckIcon
            v-if="type === 'success'"
            class="w-6 h-6 text-green-400"
          />
          <HeroExclamationCircleIcon v-else class="w-6 h-6 text-red-400" />
        </slot>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <slot name="title">
            <p class="text-sm font-medium text-gray-900">{{ title }}</p>
          </slot>
          <slot name="message">
            <p class="mt-1 text-sm text-gray-500">{{ message }}</p>
          </slot>
        </div>
        <slot name="close-button">
          <button
            @click="close"
            class="inline-flex text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Fermer"
          >
            <span class="sr-only">Fermer</span>
            <HeroXMarkIcon class="w-5 h-5" />
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from "vue";
import anime from "animejs";
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

const notificationPositionClass = computed(() => {
  return window.innerWidth < 640
    ? "bottom-5 left-2 right-2 transform-none"
    : "bottom-5 right-5";
});

function close() {
  animateOut();
  if (hideTimeout) {
    clearTimeout(hideTimeout);
  }
}

function animateIn() {
  anime({
    targets: notification.value,
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 500,
    easing: "easeOutExpo",
  });
}

function animateOut() {
  anime({
    targets: notification.value,
    opacity: [1, 0],
    translateY: [0, 20],
    duration: 500,
    easing: "easeInExpo",
    complete: () => {
      visible.value = false;
    },
  });
}

watch(
  () => props.trigger,
  async () => {
    visible.value = true;
    await nextTick();
    animateIn();

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

@media (max-width: 640px) {
  .fixed {
    max-width: calc(100% - 1rem);
    left: 0.5rem;
    right: 0.5rem;
  }
}
</style>
