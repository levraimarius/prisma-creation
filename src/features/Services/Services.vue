<template>
  <section
    id="services"
    class="relative px-4 py-16 overflow-hidden bg-white sm:px-6 sm:py-24 lg:px-8 lg:py-32"
  >
    <BackgroundPattern />

    <div class="container relative mx-auto">
      <div class="mx-auto text-center">
        <SectionHeader />

        <CategorySwitch v-model="selectedCategory" class="inline-block my-6" />

        <!-- Services Grid -->
        <div
          class="grid gap-8 mt-12 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        >
          <TransitionGroup
            :css="false"
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @leave="onLeave"
            tag="div"
            class="contents"
          >
            <ServiceCard
              v-for="(service, index) in services"
              :key="service.id"
              v-bind="service"
              :data-index="index"
              @select="openServiceModal(service.id)"
            />
          </TransitionGroup>
        </div>

        <!-- CTA Section -->
        <div class="mt-16">
          <ServicesCTA />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <ServiceModal
        v-if="selectedService"
        :service="selectedService"
        @close="closeServiceModal"
      />
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useServices } from "./composables/useServices";
import { useServiceAnimations } from "./composables/useServiceAnimations";
import ServiceCard from "./components/ServiceCard/ServiceCard.vue";
import ServiceModal from "./components/ServiceModal/ServiceModal.vue";
import SectionHeader from "./components/SectionHeader.vue";
import ServicesCTA from "./components/ServicesCTA.vue";
import BackgroundPattern from "./components/BackgroundPattern.vue";
import CategorySwitch from "./components/CategorySwitch/CategorySwitch.vue";
import type { Service } from "./types";

const { services, selectedCategory } = useServices();
const { onBeforeEnter, onEnter, onLeave } = useServiceAnimations();
const selectedService = ref<Service | null>(null);

const openServiceModal = (serviceId: string) => {
  const service = services.value.find((s) => s.id === serviceId);
  if (service) {
    selectedService.value = service;
    document.body.style.overflow = "hidden";
  }
};

const closeServiceModal = () => {
  selectedService.value = null;
  document.body.style.overflow = "";
};
</script>
