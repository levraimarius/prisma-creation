<template>
  <footer class="text-gray-400 bg-gray-900">
    <!-- Main Footer Content -->
    <div class="container px-6 pt-16 pb-8 mx-auto">
      <div class="grid gap-12 lg:grid-cols-4 lg:gap-8">
        <!-- Brand Section -->
        <div class="space-y-6">
          <div class="space-y-4">
            <LogoPrismaCreationFooter class="w-auto h-24" />
            <p class="text-lg">Votre présence en ligne, sans complexité.</p>
            <div class="flex items-center space-x-2">
              <span class="flex w-2 h-2 bg-green-400 rounded-full"></span>
              <span class="text-sm">Disponible pour vos projets</span>
            </div>
          </div>

          <!-- Social Links -->
          <!-- <div class="space-y-4">
            <h3 class="text-sm font-semibold text-white">Suivez-nous</h3>
            <div class="flex space-x-4">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.href"
                :aria-label="social.name"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 transition-colors hover:text-white"
              >
                <component :is="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div> -->
        </div>

        <!-- Navigation Columns -->
        <div class="grid grid-cols-2 gap-8 lg:col-span-2">
          <div
            v-for="(column, index) in navigationColumns"
            :key="index"
            class="space-y-4"
          >
            <h3 class="text-sm font-semibold text-white">{{ column.title }}</h3>
            <ul class="space-y-2">
              <li v-for="link in column.links" :key="link.name">
                <a
                  :href="link.href"
                  :target="link.external ? '_blank' : undefined"
                  :rel="link.external ? 'noopener noreferrer' : undefined"
                  class="transition-colors hover:text-white"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-white">Newsletter</h3>
          <p>Restez informé de nos dernières actualités et offres.</p>
          <form
            @submit.prevent="handleSubscribe"
            class="mt-6 sm:flex sm:max-w-md"
          >
            <label for="email-address" class="sr-only">Adresse email</label>
            <input
              v-model="email"
              type="email"
              name="email-address"
              id="email-address"
              required
              class="w-full min-w-0 px-4 py-2 text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-md appearance-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="Entrez votre email"
            />
            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                :disabled="isLoading"
                class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isLoading">S'inscrire</span>
                <ArrowPathIcon v-else class="w-5 h-5 animate-spin" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 mt-12 border-t border-gray-700">
        <div
          class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0"
        >
          <p class="text-sm">
            © {{ currentYear }} Prisma Création. Tous droits réservés.
          </p>
          <div class="flex space-x-6 text-sm">
            <a
              v-for="link in legalLinks"
              :key="link.name"
              :href="link.href"
              class="transition-colors hover:text-white"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Back to Top Button -->
    <BackToTop />
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { LinkedInIcon, ArrowPathIcon } from "@heroicons/vue/24/outline";
import LogoPrismaCreationFooter from "../../assets/logo_prismacreation_footer.svg";
import BackToTop from "../common/BackToTop.vue";

const email = ref("");
const isLoading = ref(false);
const currentYear = computed(() => new Date().getFullYear());

const navigationColumns = [
  {
    title: "À propos",
    links: [
      { name: "Nos services", href: "/#services" },
      { name: "Questions", href: "/#faq" },
      { name: "Avis", href: "/#avis" },
    ],
  },
  {
    title: "Un projet en tête ?",
    links: [
      { name: "Contactez-nous", href: "/#contact" },
      {
        name: "Prendre un rendez-vous",
        href: "https://cal.com/prisma-creation/consultation-de-site-web",
        external: true,
      },
    ],
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/prisma-creation",
    icon: ArrowPathIcon,
  },
];

const legalLinks = [
  {
    name: "Politique de confidentialité",
    href: "/politique-de-confidentialite",
  },
  { name: "Conditions d'utilisation", href: "/conditions-utilisation" },
];

const handleSubscribe = async () => {
  if (!email.value) return;

  isLoading.value = true;
  try {
    // Implementation for newsletter subscription would go here
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Subscribed:", email.value);
    email.value = "";
  } catch (error) {
    console.error("Subscription failed:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
footer svg g {
  fill: #ffffff !important;
}
</style>
