<template>
  <section
    id="accueil"
    class="relative min-h-screen px-6 py-24 overflow-hidden lg:px-8"
  >
    <!-- Background -->
    <HeroBackground />

    <!-- Floating Elements -->
    <FloatingElements />

    <div
      class="container relative flex flex-col items-center justify-center mx-auto"
    >
      <div class="w-full text-center md:w-3/4 lg:w-2/3">
        <!-- Main Content -->
        <HeroContent />

        <!-- Call to Action -->
        <HeroActions />
      </div>
    </div>

    <!-- Decorative Elements -->
    <HeroDecorative />
  </section>
</template>

<script setup lang="ts">
import HeroBackground from "./components/HeroBackground.vue";
import HeroContent from "./components/HeroContent.vue";
import HeroActions from "./components/HeroActions.vue";
import HeroDecorative from "./components/HeroDecorative.vue";
import FloatingElements from "./components/FloatingElements.vue";
</script>
