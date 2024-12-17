<template>
  <span class="highlight-container">
    <span class="highlight-text"><slot /></span>
    <span class="highlight-background" :class="[color]"></span>
  </span>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "bg-amber-300",
  },
});
</script>

<style scoped>
.highlight-container {
  position: relative;
  display: inline-block;
  padding: 0 0.1em;
}

.highlight-text {
  position: relative;
  z-index: 1;
}

.highlight-background {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 90%;
  width: 0;
  border-radius: 4px;
  z-index: 0;
  animation: highlight-slide 0.6s cubic-bezier(0.65, 0, 0.35, 1) 0.2s forwards;
}

@keyframes highlight-slide {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
