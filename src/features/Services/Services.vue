<template>
  <section id="services" class="px-6 py-24 sm:py-32 lg:px-8">
    <div class="container mx-auto text-center">
      <h2 class="mb-4 text-4xl font-bold text-gray-900" ref="servicesTitle">
        Nos services
      </h2>
      <p class="max-w-2xl mx-auto mb-12 text-gray-600" ref="servicesSubtitle">
        Des solutions sur mesure pour votre présence en ligne.
      </p>

      <div
        :class="`grid grid-cols-1 ${
          packs.length >= 3 ? 'md:grid-cols-3' : ''
        } ${packs.length >= 4 ? 'lg:grid-cols-4' : ''} gap-8 text-left`"
        ref="pricingPlans"
      >
        <div
          v-for="pack in packs"
          :key="pack.id"
          :class="`bg-white shadow-lg rounded-lg p-8 flex flex-col h-full ${
            pack.popular ? 'border-2 border-indigo-500' : ''
          }`"
        >
          <div
            v-if="pack.popular"
            class="absolute px-3 py-1 text-xs font-bold text-white uppercase bg-indigo-600 rounded-md -top-3 right-3"
          >
            Populaire
          </div>
          <h3 class="mb-4 text-xl font-semibold text-gray-900">
            {{ pack.name }}
          </h3>
          <span class="text-lg font-normal">À partir de</span>
          <p class="mb-4 text-4xl font-bold text-gray-900">
            <span>{{ pack.price }}€</span>
          </p>
          <p class="text-gray-600 text-1xl">{{ pack.description }}</p>
          <ul class="flex-grow mt-6 space-y-2 text-gray-600">
            <li
              v-for="feature in pack.features"
              :key="feature"
              class="flex items-center"
            >
              <CheckIcon class="flex-shrink-0 w-5 h-5 mr-2 text-indigo-600" />
              {{ feature }}
            </li>
          </ul>
          <div class="flex justify-center mt-6">
            <button
              @click="openModal(pack.id)"
              class="px-4 py-2 mt-auto text-white bg-indigo-600 rounded-md md:px-6 md:py-3 hover:bg-indigo-700"
              aria-label="Choisir ce plan"
            >
              Plus d'informations
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="currentPack"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75"
        ref="modalOverlay"
        @click.self="closeModal"
      >
        <div
          class="relative p-6 m-6 bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-2xl lg:max-w-3xl"
          ref="modalContent"
          :class="{ 'max-h-[90vh]': true }"
        >
          <div class="sm:items-start">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <ArchiveBoxIcon
                  class="flex-shrink-0 w-6 h-6 mr-2 text-indigo-600"
                />
                <h3 class="text-2xl font-bold text-gray-900">
                  {{ currentPack.name }}
                </h3>
              </div>
              <button @click="closeModal" class="text-sm rounded-md">
                <XMarkIcon
                  class="flex-shrink-0 w-5 h-5 text-gray-500 hover:text-red-600"
                />
              </button>
            </div>
          </div>

          <hr class="my-6" />

          <div class="overflow-y-auto max-h-[60vh] px-2 text-left">
            <p class="mb-4 text-gray-600">{{ currentPack.modalDescription }}</p>
            <ul class="space-y-2 text-gray-600">
              <li
                v-for="feature in currentPack.modalDetails"
                :key="feature"
                class="flex items-start"
              >
                <span class="mt-1 mr-2 text-indigo-600"
                  ><MinusIcon class="w-4 h-4"
                /></span>
                {{ feature }}
              </li>
            </ul>
          </div>

          <hr class="my-6" />

          <div class="flex items-center gap-2">
            <a
              :href="currentPack.link"
              target="_blank"
              class="px-3 py-1 mt-auto text-white bg-indigo-600 rounded-md md:px-5 md:py-2 hover:bg-indigo-700"
              aria-label="Prenez rendez-vous"
            >
              Prenez rendez-vous
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from "vue";
import anime from "animejs";
import {
  CheckIcon,
  ArchiveBoxIcon,
  ArrowRightIcon,
  XMarkIcon,
  MinusIcon,
} from "@heroicons/vue/24/solid";

interface Pack {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  modalDescription: string;
  modalDetails: string[];
  link: string;
  popular: boolean;
}

const showModal = ref<string | null>(null);
const modalOverlay = ref(null);
const modalContent = ref(null);

const packs = ref<Pack[]>([
  {
    id: "essential",
    name: "Pack Essentiel",
    price: 799,
    description:
      "Le Pack Essentiel vous offre un site vitrine simple et efficace pour présenter vos services et produits.",
    features: [
      "Devis personnalisé : Adaptable selon vos besoins spécifiques.",
      "Idéal pour : Petites entreprises, artisans, freelances.",
      "Mise en place rapide et efficace avec des outils éprouvés.",
      "Inclus : Design personnalisé, optimisation SEO de base, documentation pour gérer votre site de manière autonome.",
      "WordPress, Drupal.",
    ],
    modalDescription:
      "Idéal pour les petites entreprises, artisans, freelances souhaitant une présence en ligne simple et efficace. Le Pack Essentiel vous permet de mettre en avant vos services et produits avec un site vitrine élégant et fonctionnel. Grâce à une structure claire et un design épuré, vous bénéficiez d’une vitrine en ligne qui inspire confiance à vos visiteurs.",
    modalDetails: [
      "Design personnalisé et adaptatif pour tous les supports (ordinateurs, tablettes, smartphones).",
      "Optimisation SEO de base pour une meilleure visibilité sur les moteurs de recherche.",
      "Documentation simple pour gérer facilement votre site de manière autonome.",
      "Suivi personnalisé pour les modifications mineures après la mise en ligne.",
    ],
    link: "https://cal.com/prisma-creation/consultation-pack-essentiel",
    popular: false,
  },
  {
    id: "boutique",
    name: "Pack Boutique",
    price: 1199,
    description:
      "Le Pack Boutique vous permet de lancer votre activité e-commerce avec une boutique en ligne clé en main.",
    features: [
      "Devis personnalisé : Ajustable selon les fonctionnalités demandées.",
      "Idéal pour : Commerçants, entreprises souhaitant vendre en ligne.",
      "Inclus : Design sur-mesure, configuration des paiements sécurisés, assistance pour le lancement de la boutique.",
      "Shopify, WooCommerce (WordPress).",
    ],
    modalDescription:
      "Idéal pour les commerçants et entrepreneurs souhaitant lancer une activité de vente en ligne. Le Pack Boutique est conçu pour ceux qui veulent se lancer rapidement et efficacement dans le commerce en ligne. Vous obtiendrez une boutique clé en main avec toutes les fonctionnalités nécessaires pour gérer et développer votre activité.",
    modalDetails: [
      "Création d'une boutique en ligne au design moderne et intuitif.",
      "Configuration des paiements sécurisés et des méthodes de livraison.",
      "Assistance pour l’importation de vos premiers produits et la gestion de votre catalogue.",
      "Documentation complète pour gérer et maintenir votre boutique de manière autonome.",
      "Accompagnement marketing pour maximiser vos ventes et améliorer l'expérience client.",
    ],
    link: "https://cal.com/prisma-creation/consultation-pack-boutique",
    popular: true,
  },
  {
    id: "custom",
    name: "Pack Sur Mesure",
    price: 2499,
    description:
      "Le Pack Sur Mesure est pensé pour ceux qui recherchent une solution unique, créée de A à Z selon leurs besoins précis.",
    features: [
      "Devis personnalisé : Pour des projets complexes, ajustement possible selon les exigences.",
      "Entreprises avec des besoins spécifiques, startups, projets innovants.",
      "Inclus : Design UX/UI, développement front-end et back-end, SEO avancé, intégration d'API, suivi et support post-lancement.",
      "Développement personnalisé.",
    ],
    modalDescription:
      "Idéal pour les entreprises, startups, et projets innovants nécessitant un développement personnalisé et des fonctionnalités uniques. Le Pack Sur Mesure est destiné à ceux qui ont des idées spécifiques et des besoins particuliers. Nous concevons votre site de A à Z, avec une attention particulière aux détails et à la performance, pour créer une solution unique et optimisée.",
    modalDetails: [
      "Design UX/UI personnalisé et développement complet front-end et back-end.",
      "Intégration de fonctionnalités avancées selon vos besoins (réservations, systèmes de gestion, API externes, etc.).",
      "Optimisation SEO avancée pour une meilleure performance dans les résultats de recherche.",
      "Suivi du projet du début à la fin avec des points réguliers pour s'assurer que tout est conforme à vos attentes.",
      "Assistance et support technique après la mise en ligne pour garantir la stabilité et la performance.",
    ],
    link: "https://cal.com/prisma-creation/consultation-pack-sur-mesure",
    popular: false,
  },
]);

function openModal(packId: string) {
  showModal.value = packId;
  document.body.classList.add("overflow-hidden");
  nextTick(() => {
    animateModalIn();
  });
}

function closeModal() {
  animateModalOut().then(() => {
    showModal.value = null;
    document.body.classList.remove("overflow-hidden");
  });
}

function animateModalIn() {
  anime({
    targets: modalOverlay.value,
    opacity: [0, 1],
    duration: 200,
    easing: "easeOutQuad",
  });
  anime({
    targets: modalContent.value,
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 200,
    easing: "easeOutExpo",
  });
}

function animateModalOut() {
  return anime
    .timeline()
    .add({
      targets: modalContent.value,
      scale: [1, 0.8],
      opacity: [1, 0],
      duration: 300,
      easing: "easeInExpo",
    })
    .add({
      targets: modalOverlay.value,
      opacity: [1, 0],
      duration: 300,
      easing: "easeInQuad",
    }).finished;
}

const currentPack = computed(() => {
  return packs.value.find((pack) => pack.id === showModal.value) || null;
});
</script>
