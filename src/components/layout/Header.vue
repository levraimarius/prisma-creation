<template>
  <header class="sticky top-0 z-40 shadow-sm bg-white/80 backdrop-blur-lg">
    <nav class="container mx-auto">
      <div
        class="relative flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8"
      >
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0">
          <router-link
            to="/"
            class="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <LogoPrismaCreation class="w-auto h-12 sm:h-16" />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-1">
          <NavigationLink
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :is-active="activeSection === item.href.substring(1)"
            :onClick="() => navigateToSection(item.href)"
          >
            {{ item.name }}
          </NavigationLink>

          <a
            href="https://cal.com/prisma-creation/consultation-pour-la-creation-dun-site-web"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 ml-4 text-white transition-all duration-200 bg-indigo-600 rounded-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Prendre un rendez-vous
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md lg:hidden hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          @click="toggleMobileMenu"
        >
          <span class="sr-only">{{
            isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
          }}</span>
          <Bars3Icon
            v-if="!isMobileMenuOpen"
            class="w-6 h-6"
            aria-hidden="true"
          />
          <XMarkIcon v-else class="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <MobileMenu
      :is-open="isMobileMenuOpen"
      :navigation="navigation"
      :active-section="activeSection"
      :on-close="closeMobileMenu"
      :on-navigate="handleMobileNavigation"
    />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import LogoPrismaCreation from "../../assets/logo_prismacreation.svg";
import NavigationLink from "../navigation/NavigationLink.vue";
import MobileMenu from "../navigation/MobileMenu.vue";
import { useNavigation } from "../../composables/useNavigation";

const { navigation, activeSection } = useNavigation();
const isMobileMenuOpen = ref(false);

const lockBodyScroll = (lock: boolean) => {
  document.body.style.overflow = lock ? "hidden" : "";
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  lockBodyScroll(isMobileMenuOpen.value);
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  lockBodyScroll(false);
};

const navigateToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleMobileNavigation = (href: string) => {
  navigateToSection(href);
  closeMobileMenu();
};
</script>
