<template>
  <div>
    <Hero />
    <Services />
    <Faq />
    <Contact />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";

export default {
  name: "Home",
  components: {
    Hero: defineAsyncComponent(() => import("../components/layout/Hero.vue")),
    Services: defineAsyncComponent(
      () => import("../features/Services/Services.vue")
    ),
    Faq: defineAsyncComponent(() => import("../features/Faq/Faq.vue")),
    Contact: defineAsyncComponent(
      () => import("../features/ContactForm/Contact.vue")
    ),
  },
};
</script>
