<template>
  <div>
    <Hero />
    <Services />
    <Faq />
    <Testimonials />
    <Contact />
  </div>
</template>

<script lang="ts">
import Hero from "../components/layout/Hero.vue";
import Services from "../features/Services/Services.vue";
import Faq from "../features/Faq/Faq.vue";
import Testimonials from "../features/Testimonials/Testimonials.vue";
import Contact from "../features/ContactForm/Contact.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Services,
    Faq,
    Testimonials,
    Contact,
  },
};
</script>
