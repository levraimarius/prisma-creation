<template>
  <section
    id="accueil"
    class="relative flex items-center min-h-screen px-6 overflow-hidden lg:px-8"
  >
    <!-- Background -->
    <HeroBackground />

    <!-- Floating Elements -->
    <FloatingElements />

    <div class="container relative mx-auto">
      <div
        class="flex flex-col items-center justify-center w-full py-16 md:py-24"
      >
        <div class="w-full text-center md:w-3/4 lg:w-2/3">
          <!-- Main Content -->
          <HeroContent />

          <!-- Call to Action -->
          <HeroActions />
        </div>
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
