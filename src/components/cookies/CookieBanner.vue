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
        class="fixed z-50 w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto bottom-4 right-4 ring-1 ring-black ring-opacity-5"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <InformationCircleIcon class="w-6 h-6 text-indigo-400" />
            </div>
            <div class="flex-1 w-0 ml-3">
              <p class="text-sm font-medium text-gray-900">
                Cookies & Confidentialité
              </p>
              <p class="mt-1 text-sm text-gray-500">
                Nous utilisons des cookies pour améliorer votre expérience.
                <button
                  @click="showModal = true"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  En savoir plus
                </button>
              </p>
              <div class="flex gap-2 mt-4">
                <button
                  @click="acceptCookies"
                  class="inline-flex justify-center px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Accepter
                </button>
                <button
                  @click="rejectCookies"
                  class="inline-flex justify-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Refuser
                </button>
              </div>
            </div>
            <div class="flex flex-shrink-0 ml-4">
              <button
                @click="closeBanner"
                class="inline-flex text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Fermer</span>
                <XMarkIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
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
