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
            <img
              class="w-auto h-16"
              src="../../assets/logo_prismacreation.svg"
              alt="Logo Prisma Création"
            />
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

    <DisclosurePanel class="md:hidden">
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
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Accueil", href: "#accueil", current: true },
  { name: "Nos services", href: "#services", current: false },
  { name: "Questions", href: "#faq", current: false },
  { name: "Avis", href: "#avis", current: false },
  { name: "Contact", href: "#contact", current: false },
];

const activeSection = ref("#accueil");

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

onMounted(() => {
  window.addEventListener("scroll", detectSectionInView);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", detectSectionInView);
});
</script>
