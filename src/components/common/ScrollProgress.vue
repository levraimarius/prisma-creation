<template>
  <div class="fixed top-0 left-0 z-50 w-full h-1 bg-gray-200">
    <div
      class="h-full transition-all duration-200 bg-indigo-600"
      :style="{ width: `${scrollProgress}%` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollProgress = ref(0);

const updateProgress = () => {
  const winScroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  scrollProgress.value = (winScroll / height) * 100;
};

onMounted(() => {
  window.addEventListener("scroll", updateProgress);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgress);
});
</script>
