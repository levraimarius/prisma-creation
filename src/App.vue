<template>
  <div id="app">
    <div>
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
