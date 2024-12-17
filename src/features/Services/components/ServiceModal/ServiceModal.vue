<template>
  <TransitionRoot appear :show="true" as="template">
    <Dialog as="div" class="relative z-50" @close="$emit('close')">
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
              class="w-full max-w-3xl overflow-hidden transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <ServiceModalHeader
                :title="service.title"
                :icon="service.icon"
                :category="service.category"
                @close="$emit('close')"
              />

              <div class="p-6 space-y-8">
                <ServiceModalPricing
                  :price-type="service.priceType"
                  :price-label="service.priceLabel"
                  :price="service.price"
                  :period="service.period"
                  :category="service.category"
                />

                <ServiceModalDescription :description="service.description" />

                <ServiceModalFeatures
                  :features="service.features"
                  :category="service.category"
                />
              </div>

              <ServiceModalFooter
                :category="service.category"
                @close="$emit('close')"
              />
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
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import type { Service } from "../../types";
import ServiceModalHeader from "./ServiceModalHeader.vue";
import ServiceModalDescription from "./ServiceModalDescription.vue";
import ServiceModalPricing from "./ServiceModalPricing.vue";
import ServiceModalFeatures from "./ServiceModalFeatures.vue";
import ServiceModalFooter from "./ServiceModalFooter.vue";

defineProps<{
  service: Service;
}>();

defineEmits<{
  (e: "close"): void;
}>();
</script>
