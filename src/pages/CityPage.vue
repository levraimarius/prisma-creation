<template>
  <div>
    <CityHero :city-name="cityName" :background-image="fondImage" />
    <CityStats />
    <Services />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import { CityHero, CityStats } from "../features/CityPage/components";
import { useSEO } from "../composables/useSEO";
import Services from "../features/Services/Services.vue";
import Contact from "../features/ContactForm/Contact.vue";
import { useCityMetadata } from "../features/Cities/composables/useCityMetadata";

const fondImage = new URL("../assets/fond.svg", import.meta.url).href;
const { metadata, cityName } = useCityMetadata();

// Apply SEO metadata
useSEO({
  title: metadata.value.title,
  description: metadata.value.description,
  region: metadata.value.region,
  city: metadata.value.city,
  coordinates: `${metadata.value.coordinates.latitude};${metadata.value.coordinates.longitude}`,
  latitude: metadata.value.coordinates.latitude,
  longitude: metadata.value.coordinates.longitude,
  url: metadata.value.url,
});
</script>
