<template>
  <div>
    <Hero />
    <Services />
    <CitiesSection />
    <Faq />
    <Testimonials />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import { useSEO } from "../composables/useSEO";
import { Hero } from "../features/Hero";
import Services from "../features/Services/Services.vue";
import { CitiesSection } from "../features/Cities";
import Faq from "../features/Faq/Faq.vue";
import Testimonials from "../features/Testimonials/Testimonials.vue";
import Contact from "../features/ContactForm/Contact.vue"; // Fixed import path

// Apply SEO metadata for homepage
useSEO({
  title: "Agence Web - Votre site internet à prix réduit",
  description:
    "Prisma Création : Création de sites web professionnels à prix réduit. Découvrez nos services adaptés à vos besoins pour un site performant et moderne.",
  region: "Hauts-de-France",
  city: "Beauvais",
  coordinates: "49.4295;2.0809",
  latitude: 49.4295,
  longitude: 2.0809,
  url: "https://prismacreation.fr",
});
</script>