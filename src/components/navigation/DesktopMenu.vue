<template>
  <div class="hidden md:block">
    <div class="flex items-center space-x-4">
      <NavigationLink
        v-for="item in navigationItems"
        :key="item.name"
        :href="item.href"
        :is-active="activeSection === item.href"
        :onClick="() => handleNavigate(item.href)"
      >
        {{ item.name }}
      </NavigationLink>

      <a
        href="https://cal.com/prisma-creation/consultation-pour-la-creation-dun-site-web"
        target="_blank"
        class="px-6 py-3 text-white transition-all duration-200 bg-indigo-600 rounded-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Prendre un rendez-vous
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import NavigationLink from "./NavigationLink.vue";
import type { NavigationItem } from "../../composables/useNavigation";

interface Props {
  navigation: NavigationItem[];
  activeSection: string;
  onNavigate: (href: string) => void;
}

const props = defineProps<Props>();

const navigationItems = computed(() => props.navigation);

const handleNavigate = (href: string) => {
  props.onNavigate(href);
};
</script>
