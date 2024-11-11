<template>
  <Disclosure
    as="nav"
    class="sticky top-0 z-50 bg-white backdrop-blur-lg bg-opacity-80"
    v-slot="{ open }"
  >
    <div class="px-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-20">
        <div class="flex items-center">
          <a href="/">
            <LogoPrismaCreation class="w-auto h-16" />
          </a>
        </div>
        <div class="hidden sm:ml-6 md:block">
          <div class="flex items-center space-x-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                activeSection === item.href
                  ? 'text-indigo-600'
                  : 'text-gray-500 hover:text-indigo-600',
                'rounded-md px-3 py-2 text-md font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              @click.prevent="navigateToSection(item.href)"
              >{{ item.name }}</a
            >

            <a
              href="https://cal.com/prisma-creation/consultation-pour-la-creation-dun-site-web"
              target="_blank"
              class="px-6 py-3 text-white transition bg-indigo-600 rounded-md text-md hover:bg-indigo-700 w-max"
              aria-label="Prendre un rendez-vous"
            >
              Prendre un rendez-vous
            </a>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center p-2 text-gray-500 rounded-md hover:text-indigo-600"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block w-8 h-8" aria-hidden="true" />
            <XMarkIcon v-else class="block w-8 h-8" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden" ref="menuPanel" v-show="open">
      <div class="px-4 pt-2 pb-3 space-y-1">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            activeSection === item.href
              ? 'text-indigo-600'
              : 'text-gray-500 hover:text-indigo-600',
            'block rounded-md px-3 py-2 text-lg font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          @click.prevent="navigateToSection(item.href)"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import { Disclosure, DisclosureButton } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import anime from "animejs";
import LogoPrismaCreation from "../../assets/logo_prismacreation.svg";

const navigation = [
  { name: "Accueil", href: "#accueil", current: true },
  { name: "Nos services", href: "#services", current: false },
  { name: "Questions", href: "#faq", current: false },
  { name: "Avis", href: "#avis", current: false },
  { name: "Contact", href: "#contact", current: false },
];

const activeSection = ref("#accueil");
const router = useRouter();
const menuPanel = ref(null);

const navigateToSection = (href) => {
  if (window.location.pathname !== "/") {
    router.push(`/${href}`);
  } else {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const detectSectionInView = () => {
  const sections = navigation.map((item) => document.querySelector(item.href));
  const scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    if (
      section &&
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      activeSection.value = `#${section.id}`;
    }
  });
};

// Fonction d'animation d'ouverture du menu avec calcul de la hauteur dynamique
const openMenuAnimation = async () => {
  await nextTick(); // S'assurer que le DOM est mis à jour
  const height = menuPanel.value.scrollHeight; // Obtenir la hauteur du contenu

  anime({
    targets: menuPanel.value,
    height: [0, `${height}px`],
    opacity: [0, 1],
    duration: 500,
    easing: "easeInOutQuad",
    complete: () => {
      menuPanel.value.style.height = "auto"; // Réinitialiser à auto après l'animation
    },
  });
};

// Fonction d'animation de fermeture du menu
const closeMenuAnimation = () => {
  const height = menuPanel.value.scrollHeight;

  anime({
    targets: menuPanel.value,
    height: [`${height}px`, 0],
    opacity: [1, 0],
    duration: 500,
    easing: "easeInOutQuad",
  });
};

// Détecter l'ouverture/fermeture du menu
watch(
  () => open,
  (newValue) => {
    if (newValue) {
      openMenuAnimation();
    } else {
      closeMenuAnimation();
    }
  }
);

onMounted(() => {
  window.addEventListener("scroll", detectSectionInView);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", detectSectionInView);
});
</script>
