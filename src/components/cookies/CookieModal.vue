<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-50" @close="close">
      <!-- Backdrop -->
      <TransitionChild
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" />
      </TransitionChild>

      <!-- Modal -->
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-full p-4">
          <TransitionChild
            enter="ease-out duration-300"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-4xl overflow-hidden transition-all transform bg-white shadow-xl rounded-xl"
            >
              <!-- Header -->
              <div class="px-4 py-4 border-b border-gray-200 sm:px-6 sm:py-6">
                <div class="flex items-center justify-between">
                  <DialogTitle
                    as="h3"
                    class="text-lg font-bold text-gray-900 sm:text-2xl"
                  >
                    Paramètres des cookies
                  </DialogTitle>
                  <button
                    @click="close"
                    class="text-gray-400 transition-colors hover:text-gray-500"
                  >
                    <span class="sr-only">Fermer</span>
                    <XMarkIcon class="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
                <p class="mt-2 text-sm text-gray-600 sm:text-base">
                  Gérez vos préférences concernant l'utilisation des cookies sur
                  notre site.
                </p>
              </div>

              <!-- Content -->
              <div
                class="px-4 py-4 max-h-[calc(100vh-16rem)] overflow-y-auto sm:px-6 sm:py-6"
              >
                <div class="space-y-6 sm:space-y-8">
                  <div
                    v-for="category in cookieCategories"
                    :key="category.name"
                    class="space-y-4 sm:space-y-6"
                  >
                    <div class="pb-4 border-b border-gray-100">
                      <h4
                        class="text-base font-semibold text-gray-900 sm:text-xl"
                      >
                        {{ category.name }}
                      </h4>
                      <p class="mt-1 text-sm text-gray-600 sm:text-base">
                        {{ category.description }}
                      </p>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-2">
                      <div
                        v-for="cookie in category.cookies"
                        :key="cookie.name"
                        class="p-4 transition-colors bg-gray-50 rounded-xl hover:bg-gray-100 sm:p-6"
                      >
                        <div class="space-y-3 sm:space-y-4">
                          <div>
                            <h5
                              class="text-base font-medium text-gray-900 sm:text-lg"
                            >
                              {{ cookie.name }}
                            </h5>
                            <p class="mt-1 text-sm text-gray-600">
                              {{ cookie.purpose }}
                            </p>
                          </div>
                          <div class="pt-3 border-t border-gray-200 sm:pt-4">
                            <dl class="grid grid-cols-2 gap-3 text-sm sm:gap-4">
                              <div>
                                <dt class="font-medium text-gray-500">
                                  Fournisseur
                                </dt>
                                <dd class="mt-1 text-gray-900">
                                  {{ cookie.provider }}
                                </dd>
                              </div>
                              <div>
                                <dt class="font-medium text-gray-500">Durée</dt>
                                <dd class="mt-1 text-gray-900">
                                  {{ cookie.duration }}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div
                class="px-4 py-4 border-t border-gray-200 bg-gray-50 sm:px-6 sm:py-6"
              >
                <div
                  class="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6"
                >
                  <p
                    class="text-xs text-center text-gray-500 sm:text-sm sm:text-left"
                  >
                    Pour plus d'informations, consultez notre
                    <a
                      href="/politique-de-confidentialite"
                      class="text-indigo-600 hover:text-indigo-500"
                    >
                      politique de confidentialité
                    </a>
                  </p>
                  <button
                    @click="close"
                    class="w-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-md sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { cookieCategories } from "./data/cookieData";

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const close = () => {
  emit("close");
};
</script>
