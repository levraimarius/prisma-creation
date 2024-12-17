<template>
  <transition name="fade">
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed z-40 p-3 text-white transition-all duration-300 bg-indigo-600 rounded-full shadow-lg bottom-8 right-8 hover:bg-indigo-700"
      aria-label="Retour en haut"
    >
      <ArrowUpIcon class="w-6 h-6" />
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ArrowUpIcon } from "@heroicons/vue/24/outline";

const showButton = ref(false);

const checkScroll = () => {
  showButton.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
