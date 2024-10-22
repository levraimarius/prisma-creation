<template>
  <section id="services" class="px-6 py-24 sm:py-32 lg:px-8">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold text-gray-900 mb-4" ref="servicesTitle">
        Nos services
      </h2>
      <p class="text-gray-600 mb-12 max-w-2xl mx-auto" ref="servicesSubtitle">
        Des solutions sur mesure pour votre présence en ligne.
      </p>

      <div
        class="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-8 mb-8 buttons"
        ref="billingTabs"
      >
        <button
          @click="billingCycle = 'mensuel'"
          :class="[
            billingCycle === 'mensuel'
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'text-indigo-600 hover:bg-slate-50',
            'px-6 py-2 rounded-md border border-indigo-600 transition w-max md:px-10 md:py-3 lg:px-12 lg:py-4',
          ]"
        >
          Mensuel
        </button>
        <button
          @click="billingCycle = 'annuel'"
          :class="[
            billingCycle === 'annuel'
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'text-indigo-600 hover:bg-slate-50',
            'px-6 py-2 rounded-md border border-indigo-600 transition w-max md:px-10 md:py-3 lg:px-12 lg:py-4',
          ]"
        >
          Annuel
        </button>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        ref="pricingPlans"
      >
        <div class="bg-white shadow-lg rounded-lg p-8 flex flex-col h-full">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Création de site vitrine
          </h3>
          <span class="text-lg font-normal">
            À partir de 
          </span>
          <p class="text-4xl font-bold text-gray-900 mb-4">
            <span v-if="billingCycle === 'mensuel'">79€</span>
            <span v-else>849€</span>
            <span class="text-lg font-normal">
              {{ billingCycle === "mensuel" ? "/mois" : "/an" }}
            </span>
          </p>
          <ul class="text-gray-600 mt-6 space-y-2 flex-grow">
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Idéal pour les particuliers et les petites entreprises.
            </li>
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Présentez vos services et produits en toute simplicité.
            </li>
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Design adaptable à tous les supports (ordinateurs, tablettes,
              smartphones).
            </li>
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Documentation et accompagnement inclus.
            </li>
          </ul>
          <div class="flex justify-center mt-6">
            <a
              href="https://cal.com/marius-thiesset/consultation-de-site-web"
              target="_blank"
              class="bg-indigo-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-indigo-700 transition mt-auto"
            >
              Choisir ce plan
            </a>
          </div>
        </div>

        <div
          class="relative bg-white shadow-lg rounded-lg p-8 flex flex-col h-full border-2 border-indigo-500"
          ref="popularPlan"
        >
          <div
            class="absolute -top-3 right-3 bg-indigo-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-md"
          >
            Populaire
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Boutique en ligne
          </h3>
          <span class="text-lg font-normal">
            À partir de 
          </span>
          <p class="text-4xl font-bold text-gray-900 mb-4">
            <span v-if="billingCycle === 'mensuel'">129€</span>
            <span v-else>1 349€</span>
            <span class="text-lg font-normal">
              {{ billingCycle === "mensuel" ? "/mois" : "/an" }}
            </span>
          </p>
          <ul class="text-gray-600 mt-6 space-y-2 flex-grow">
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Développez votre activité avec une boutique e-commerce clé en
              main.
            </li>
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Gestion des paiements sécurisés et de vos produits.
            </li>
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Accompagnement marketing pour maximiser vos ventes.
            </li>
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Documentation complète pour gérer votre boutique de manière
              autonome.
            </li>
          </ul>
          <div class="flex justify-center mt-6">
            <a
              href="https://cal.com/marius-thiesset/consultation-de-site-web"
              target="_blank"
              class="bg-indigo-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-indigo-700 transition mt-auto"
            >
              Choisir ce plan
            </a>
          </div>
        </div>

        <div
          class="bg-white shadow-lg rounded-lg p-8 flex flex-col h-full"
          ref="growthPlan"
        >
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Solutions personnalisées
          </h3>
          <span class="text-lg font-normal">
            À partir de 
          </span>
          <p class="text-4xl font-bold text-gray-900 mb-4">
            <span v-if="billingCycle === 'mensuel'">149€</span>
            <span v-else>1 549€</span>
            <span class="text-lg font-normal">
              {{ billingCycle === "mensuel" ? "/mois" : "/an" }}
            </span>
          </p>
          <ul class="text-gray-600 mt-6 space-y-2 flex-grow">
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Création de sites web sur-mesure pour répondre à des besoins
              spécifiques.
            </li>
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Intégration de fonctionnalités avancées (réservations, systèmes de
              gestion, etc.).
            </li>
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Suivi complet du projet du début à la fin.
            </li>
            <li class="flex items-center">
              <CheckIcon class="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
              Assistance et formation personnalisée pour gérer votre site.
            </li>
          </ul>
          <div class="flex justify-center mt-6">
            <a
              href="https://cal.com/marius-thiesset/consultation-de-site-web"
              target="_blank"
              class="bg-indigo-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-indigo-700 transition mt-auto"
            >
              Choisir ce plan
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { CheckIcon } from "@heroicons/vue/24/solid";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const billingCycle = ref("mensuel");

onMounted(() => {
  gsap.from("#services h2", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#services h2",
      start: "top 80%",
    },
  });

  gsap.from("#services p", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#services p",
      start: "top 80%",
    },
  });

  gsap.from("#services .buttons", {
    duration: 1,
    scale: 0.9,
    opacity: 0,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#services .flex",
      start: "top 80%",
    },
  });

  gsap.fromTo(
    "#services .grid > div",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#services .grid",
        start: "top 80%",
      },
    }
  );
});
</script>
