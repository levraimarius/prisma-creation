<template>
  <div>
    <nav aria-label="Breadcrumb" class="px-6 py-4">
      <ol class="flex items-center space-x-2 text-sm">
        <li>
          <router-link to="/" class="text-gray-500 hover:text-gray-700"
            >Accueil</router-link
          >
        </li>
        <li class="text-gray-400">/</li>
        <li>
          <span class="text-gray-500">Nos agences</span>
        </li>
        <li class="text-gray-400">/</li>
        <li>
          <span class="text-gray-900">{{ cityName }}</span>
        </li>
      </ol>
    </nav>

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
  title: `Agence Web à ${metadata.value.city} - Création de Site Internet`,
  description: `Prisma Création, votre agence web à ${metadata.value.city}. Création de sites internet professionnels, développement sur mesure et référencement local. Experts en création de site vitrine et e-commerce à ${metadata.value.city}.`,
  region: metadata.value.region,
  city: metadata.value.city,
  coordinates: `${metadata.value.coordinates.latitude};${metadata.value.coordinates.longitude}`,
  latitude: metadata.value.coordinates.latitude,
  longitude: metadata.value.coordinates.longitude,
  url: metadata.value.url,
  image: "/prismacreation.png",
});
</script>
