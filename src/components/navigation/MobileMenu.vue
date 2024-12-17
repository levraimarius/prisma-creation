<template>
  <div
    class="fixed inset-0 z-50 lg:hidden"
    :class="{ 'pointer-events-none': !isOpen }"
  >
    <!-- Backdrop -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm"
        @click="onClose"
      />
    </transition>

    <!-- Menu Panel -->
    <transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-show="isOpen"
        class="fixed inset-0 flex flex-col w-full h-screen bg-white shadow-xl pointer-events-auto"
      >
        <!-- Header -->
        <div
          class="flex items-center justify-between h-20 px-4 py-3 border-b border-gray-200"
        >
          <router-link
            to="/"
            class="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <LogoPrismaCreation class="w-auto h-12 sm:h-16" />
          </router-link>
          <button
            type="button"
            class="p-2 -mr-1 text-gray-500 rounded-md hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            @click="onClose"
          >
            <span class="sr-only">Fermer le menu</span>
            <XMarkIcon class="w-6 h-6" />
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="flex-1 px-4 py-6 overflow-y-auto bg-white">
          <div class="flex flex-col space-y-1">
            <NavigationLink
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :is-active="activeSection === item.href.substring(1)"
              class="w-full py-3 text-lg"
              @click.prevent="onNavigate(item.href)"
            >
              {{ item.name }}
            </NavigationLink>
          </div>
        </nav>

        <!-- CTA Button -->
        <div class="p-4 border-t border-gray-200">
          <a
            href="https://cal.com/prisma-creation/consultation-pour-la-creation-dun-site-web"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-full px-6 py-3 text-white transition-all duration-200 bg-indigo-600 rounded-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Prendre un rendez-vous
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/outline";
import NavigationLink from "./NavigationLink.vue";
import LogoPrismaCreation from "../../assets/logo_prismacreation.svg";
import type { NavigationItem } from "../../composables/useNavigation";

defineProps<{
  isOpen: boolean;
  navigation: NavigationItem[];
  activeSection: string;
  onClose: () => void;
  onNavigate: (href: string) => void;
}>();
</script>
