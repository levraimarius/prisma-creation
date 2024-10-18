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
import Hero from "@/sections/Hero.vue";
import Services from "@/sections/Services.vue";
// import Testimonials from "@/sections/Testimonials.vue";
import Faq from "@/sections/Faq.vue";
import Contact from "@/sections/Contact.vue";

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
