<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    Header: defineAsyncComponent(
      () => import("./components/layout/Header.vue")
    ),
    Footer: defineAsyncComponent(
      () => import("./components/layout/Footer.vue")
    ),
  },
};
</script>
