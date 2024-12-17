<template>
  <div>
    <CityHero :city-name="cityName" :background-image="fondImage" />
    <CityStats />
    <Services />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { CityHero, CityStats } from "../features/CityPage/components";
import { useSEO } from "../composables/useSEO";
import { getCityMetadata } from "../composables/useSEO/cityMetadata";
import Services from "../features/Services/Services.vue";
import Contact from "../features/ContactForm/Contact.vue";
import { useCityMetadata } from "../features/Cities/composables/useCityMetadata";

const route = useRoute();
const fondImage = new URL("../assets/fond.svg", import.meta.url).href;

// Extract city slug and get metadata
const citySlug = computed(() => {
  const pathParts = route.path.split("/");
  return pathParts[pathParts.length - 1] || "";
});

const { metadata, cityName } = useCityMetadata();

// Apply SEO metadata
useSEO(metadata.value);
</script>
