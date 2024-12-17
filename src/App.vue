<template>
  <div id="app">
    <!-- <ScrollProgress /> -->
    <div>
      <Header />
      <router-view v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
          @before-leave="beforeLeave"
          @enter="enter"
          @after-enter="afterEnter"
        >
          <component :is="Component" />
        </transition>
      </router-view>
      <Footer />
    </div>
    <BackToTop />
    <CookieBanner />
  </div>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
// import ScrollProgress from "./components/common/ScrollProgress.vue";
import BackToTop from "./components/common/BackToTop.vue";
import CookieBanner from "./components/cookies/CookieBanner.vue";

const beforeLeave = () => {
  window.scrollTo(0, 0);
};

const enter = () => {
  window.scrollTo(0, 0);
};

const afterEnter = async () => {
  await nextTick();
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
