<template>
  <Disclosure
    as="nav"
    class="sticky top-0 bg-white backdrop-blur-lg bg-opacity-80 z-50"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
      <div class="relative flex h-20 items-center justify-between">
        <div class="flex items-center">
          <a href="/">
            <img
              class="h-16 w-auto"
              src="../../assets/logo_prismacreation.svg"
              alt="Logo Prisma Création"
            />
          </a>
        </div>
        <div class="hidden sm:ml-6 md:block">
          <div class="flex space-x-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                activeSection === item.href
                  ? 'text-indigo-600'
                  : 'text-gray-500 hover:text-indigo-600',
                'rounded-md px-3 py-2 text-lg font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              >{{ item.name }}</a
            >
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-indigo-600"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-8 w-8" aria-hidden="true" />
            <XMarkIcon v-else class="block h-8 w-8" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-4 pb-3 pt-2">
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
