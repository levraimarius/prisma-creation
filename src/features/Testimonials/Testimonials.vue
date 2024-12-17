<template>
  <section
    id="avis"
    class="px-6 py-24 bg-gray-50 sm:py-32 lg:px-8"
  >
    <div class="container mx-auto text-center">
      <h2 class="mb-4 text-4xl font-bold text-gray-900" ref="servicesTitle">
        Avis de nos clients
      </h2>
      <p class="max-w-2xl mx-auto mb-12 text-gray-600" ref="servicesSubtitle">
        Laissez-vous convaincre par l'expérience de nos clients.
      </p>

      <div
        class="flex flex-wrap items-center justify-center text-center lg:text-left gap-y-8 lg:gap-y-0 md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8"
      >
        <div class="w-full lg:w-2/5">
          <h3 class="mb-4 text-2xl font-bold">Ils nous ont fait confiance.</h3>
          <div
            class="flex justify-center mb-4 -space-x-2 overflow-hidden lg:justify-start"
          >
            <img
              v-for="(client, index) in randomClients"
              :key="index"
              :src="client.profileImage"
              :alt="client.name"
              class="inline-block bg-white rounded-full size-8 ring-2 ring-white"
            />
          </div>
          <div class="flex items-center justify-center mb-4 lg:justify-start">
            <div class="flex text-yellow-500">
              <StarIconSolid
                v-for="star in Math.floor(averageRating)"
                :key="'filled-' + star"
                class="w-5 h-5 fill-current"
              />
              <StarIconOutline
                v-for="star in 5 - Math.floor(averageRating)"
                :key="'empty-' + star"
                class="w-5 h-5 stroke-current"
              />
            </div>
            <p class="ml-2 text-lg font-semibold">
              {{ averageRating.toFixed(1) }}/5.0
            </p>
          </div>
          <div class="flex items-center justify-center gap-4 lg:justify-start">
            <button
              class="flex items-center justify-center w-12 h-12 transition-all duration-300 border border-indigo-600 border-solid rounded-lg swiper-button-prev hover:bg-indigo-600 group"
              aria-label="Navigation à gauche"
            >
              <ArrowLeftIcon
                class="w-6 h-6 text-indigo-600 group-hover:text-white"
              />
            </button>
            <button
              class="flex items-center justify-center w-12 h-12 transition-all duration-300 border border-indigo-600 border-solid rounded-lg swiper-button-next hover:bg-indigo-600 group"
              aria-label="Navigation à droite"
            >
              <ArrowRightIcon
                class="w-6 h-6 text-indigo-600 group-hover:text-white"
              />
            </button>
          </div>
        </div>
        <div class="w-full lg:w-3/5">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div
                v-for="review in reviews"
                :key="review.id"
                class="p-6 transition-all duration-500 bg-white border border-gray-300 border-solid swiper-slide rounded-2xl hover:border-indigo-600"
              >
                <div class="flex items-center gap-3 mb-5">
                  <img
                    :src="review.profileImage"
                    alt="avatar"
                    class="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h5 class="font-medium text-gray-900">{{ review.name }}</h5>
                  </div>
                </div>
                <div class="flex items-center my-3 text-yellow-500">
                  <StarIconSolid
                    v-for="star in review.rating"
                    :key="'star-' + review.id + '-' + star"
                    class="w-5 h-5 fill-current"
                  />
                  <StarIconOutline
                    v-for="star in 5 - review.rating"
                    :key="'empty-' + review.id + '-' + star"
                    class="w-5 h-5 stroke-current"
                  />
                </div>
                <p class="text-left text-gray-600">{{ review.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon as StarIconSolid,
} from "@heroicons/vue/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/vue/24/outline";

const reviews = ref([
  {
    id: 1,
    name: "Maniaq",
    rating: 5,
    text: "Prisma Création a su capturer l’essence de Maniaq avec un site moderne et dynamique, parfaitement adapté à notre cible. Leur écoute et souci du détail ont permis un résultat en totale adéquation avec nos attentes. Professionnels et innovants, ils sont un partenaire fiable pour des projets ambitieux.",
    profileImage:
      "https://maniaq.fr/wp-content/uploads/2024/11/cropped-logo-M-2-192x192.png",
  },
  {
    id: 2,
    name: "Polignac Distribution",
    rating: 5,
    text: "Nous avons confié la création de notre site à Prisma Création, et le résultat a dépassé nos attentes : un site moderne, intuitif et performant, livré dans les délais. Leur équipe a su comprendre notre vision. Une collaboration fluide et professionnelle que nous recommandons vivement !",
    profileImage: "https://polignac.fr/favicon-96x96.png",
  },
  {
    id: 3,
    name: "MrBumperCar",
    rating: 5,
    text: "Prestataire haut de gamme avec un excellent rapport qualité-prix. Travail rapide, conforme à mes attentes, avec des révisions acceptées jusqu'à la livraison finale. Je recommande vivement ! J'avais demandé une page web en 5 langues pour un nouveau produit, et le résultat est parfait.",
    profileImage:
      "https://mrbumpercar.com/wp-content/uploads/2024/10/mrbumpercar_f-removebg-preview-288x300.png",
  },
  {
    id: 4,
    name: "SimulDigital",
    rating: 5,
    text: "Nous sommes très satisfaits de la prestation de Prisma Création ! Leur expertise et leur professionnalisme ont permis de créer un site moderne, intuitif et conforme à nos attentes. Une collaboration fluide, avec des délais respectés et un réel souci du détail. Nous recommandons vivement !",
    profileImage:
      "https://jimdo-storage.freetls.fastly.net/image/394441740/72440deb-1f79-4afa-b58a-9ef0d101b490.png",
  },
  {
    id: 5,
    name: "Vitality",
    rating: 5,
    text: "Nous sommes très satisfaits de la prestation de Prisma Création ! Leur expertise et leur professionnalisme ont permis de créer un site moderne, intuitif et conforme à nos attentes. Une collaboration fluide, avec des délais respectés et un réel souci du détail. Nous recommandons vivement !",
    profileImage:
      "https://jimdo-storage.freetls.fastly.net/image/394441740/72440deb-1f79-4afa-b58a-9ef0d101b490.png",
  },
  {
    id: 6,
    name: "IDEESP6",
    rating: 5,
    text: "Prisma Création est un prestataire haut de gamme qui a parfaitement répondu à nos attentes. Leur expertise a permis de développer une fonctionnalité personnalisée sur WordPress, totalement adaptée à nos besoins. Professionnalisme, écoute et qualité au rendez-vous. Nous recommandons vivement !",
    profileImage:
      "https://ideesp6.com/wp-content/uploads/2024/03/Logo-Gimix.png",
  },
]);

const averageRating = computed(() => {
  const total = reviews.value.reduce((sum, review) => sum + review.rating, 0);
  const average = total / reviews.value.length;
  return Number.isInteger(average) ? average : average.toFixed(1);
});

// Function to get random clients for display
const randomClients = computed(() => {
  const shuffled = [...reviews.value].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
});

onMounted(() => {
  new Swiper(".mySwiper", {
    modules: [Navigation, Autoplay],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 28,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 28,
      },
    },
  });
});
</script>
