<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-50" @close="close">
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
              <div class="px-8 py-6 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <DialogTitle as="h3" class="text-2xl font-bold text-gray-900">
                    Paramètres des cookies
                  </DialogTitle>
                  <button
                    @click="close"
                    class="text-gray-400 transition-colors hover:text-gray-500"
                  >
                    <span class="sr-only">Fermer</span>
                    <XMarkIcon class="w-6 h-6" />
                  </button>
                </div>
                <p class="mt-2 text-gray-600">
                  Gérez vos préférences concernant l'utilisation des cookies sur
                  notre site.
                </p>
              </div>

              <!-- Content -->
              <div class="px-8 py-6 max-h-[calc(100vh-16rem)] overflow-y-auto">
                <div class="space-y-8">
                  <div
                    v-for="category in cookieCategories"
                    :key="category.name"
                    class="space-y-6"
                  >
                    <div class="pb-4 border-b border-gray-100">
                      <h4 class="text-xl font-semibold text-gray-900">
                        {{ category.name }}
                      </h4>
                      <p class="mt-2 text-gray-600">
                        {{ category.description }}
                      </p>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-2">
                      <div
                        v-for="cookie in category.cookies"
                        :key="cookie.name"
                        class="p-6 transition-colors bg-gray-50 rounded-xl hover:bg-gray-100"
                      >
                        <div class="space-y-4">
                          <div>
                            <h5 class="text-lg font-medium text-gray-900">
                              {{ cookie.name }}
                            </h5>
                            <p class="mt-2 text-gray-600">
                              {{ cookie.purpose }}
                            </p>
                          </div>
                          <div class="pt-4 border-t border-gray-200">
                            <dl class="grid grid-cols-2 gap-4 text-sm">
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
              <div class="px-8 py-6 border-t border-gray-200 bg-gray-50">
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-500">
                    Pour plus d'informations, consultez notre
                    <a
                      href="/politique-de-confidentialite"
                      class="text-indigo-600 hover:text-indigo-500"
                    >
                      politique de confidentialité
                    </a>
                  </p>
                  <div class="flex gap-3">
                    <button
                      @click="close"
                      class="px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Fermer
                    </button>
                  </div>
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
