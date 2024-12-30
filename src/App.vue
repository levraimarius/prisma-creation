<template>
  <ErrorBoundary>
    <div id="app">
      <div>
        <Header />
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        <Footer />
      </div>
      <BackToTop />
      <CookieBanner />
    </div>
  </ErrorBoundary>
</template>

<script setup lang="ts">
import ErrorBoundary from "./components/error/ErrorBoundary.vue";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import BackToTop from "./components/common/BackToTop.vue";
import CookieBanner from "./components/cookies/CookieBanner.vue";
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
