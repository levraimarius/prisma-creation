<template>
  <div>
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-full opacity-0"
    >
      <div
        v-if="showBanner"
        class="fixed z-50 w-full overflow-hidden bg-white shadow-lg pointer-events-auto cookie-banner"
      >
        <div class="w-full px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div
            class="flex flex-col gap-4 sm:items-center sm:flex-row sm:justify-between"
          >
            <!-- Content Section -->
            <div class="flex items-start flex-1 gap-3">
              <div class="flex-shrink-0">
                <InformationCircleIcon
                  class="w-5 h-5 text-indigo-400 sm:w-6 sm:h-6"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 sm:text-base">
                  Cookies & Confidentialité
                </p>
                <p class="mt-1 text-xs text-gray-500 sm:text-sm">
                  Nous utilisons des cookies pour améliorer votre expérience.
                  <button
                    @click="showModal = true"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    En savoir plus
                  </button>
                </p>
              </div>
            </div>

            <!-- Actions Section -->
            <div class="flex items-center gap-3 sm:flex-shrink-0">
              <button
                @click="rejectCookies"
                class="flex-1 px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-none"
              >
                Refuser
              </button>
              <button
                @click="acceptCookies"
                class="flex-1 px-3 py-1.5 text-xs sm:text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-none"
              >
                Accepter
              </button>
              <button
                @click="closeBanner"
                class="hidden text-gray-400 rounded-md sm:flex hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Fermer</span>
                <XMarkIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Close Button (Fixed Position) -->
        <button
          @click="closeBanner"
          class="absolute text-gray-400 rounded-md top-4 right-4 sm:hidden hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span class="sr-only">Fermer</span>
          <XMarkIcon class="w-5 h-5" />
        </button>
      </div>
    </Transition>

    <CookieModal :is-open="showModal" @close="showModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { InformationCircleIcon } from "@heroicons/vue/24/solid";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import CookieModal from "./CookieModal.vue";

const showBanner = ref(false);
const showModal = ref(false);
const COOKIE_CONSENT_KEY = "cookie-consent-v1";

const acceptCookies = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
  showBanner.value = false;
};

const rejectCookies = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
  showBanner.value = false;
};

const closeBanner = () => {
  showBanner.value = false;
};

onMounted(() => {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!consent) {
    showBanner.value = true;
  }
});
</script>

<style scoped>
.cookie-banner {
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top: 1px solid rgb(229, 231, 235);
}

@media (min-width: 640px) {
  .cookie-banner {
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: 42rem;
    border-radius: 0.5rem;
    border: 1px solid rgb(229, 231, 235);
  }
}

@media (min-width: 1024px) {
  .cookie-banner {
    max-width: 48rem;
  }
}
</style>
