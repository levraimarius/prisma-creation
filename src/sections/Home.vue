<template>
  <div>
    <Hero />
    <Services />
    <!-- <Testimonials /> -->
    <Faq />
    <Contact />
  </div>
</template>

<script lang="ts">
import Hero from "./Hero.vue";
import Services from "./Services.vue";
// import Testimonials from "@/sections/Testimonials.vue";
import Faq from "./Faq.vue";
import Contact from "./Contact.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Services,
    // Testimonials,
    Faq,
    Contact,
  },
};
</script>
