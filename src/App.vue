<template>
  <div id="app">
    <Header />
    <router-view />
    <!-- Remplace les sections statiques par le routeur -->
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
