<template>
  <div class="absolute inset-0 overflow-hidden">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white">
      <div
        class="absolute inset-0 bg-grid-pattern opacity-[0.03] animate-grid"
      ></div>
    </div>

    <!-- Background Image -->
    <img
      class="absolute inset-0 object-cover w-full h-full pointer-events-none select-none"
      :src="fondImage"
      alt="Fond décoratif"
      draggable="false"
    />

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90"
    ></div>
  </div>
</template>

<script setup lang="ts">
const fondImage = new URL("../../../assets/fond.svg", import.meta.url).href;
</script>

<style scoped>
.bg-grid-pattern {
  background-size: 30px 30px;
  background-image: linear-gradient(
      to right,
      rgb(99 102 241 / 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgb(99 102 241 / 0.1) 1px, transparent 1px);
}

@keyframes grid {
  0% {
    transform: translateX(-30px) translateY(30px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

.animate-grid {
  animation: grid 20s linear infinite;
}
</style>
