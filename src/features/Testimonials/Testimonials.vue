<template>
  <section id="avis" class="px-6 py-24 bg-white sm:py-32 lg:px-8">
    <div class="container mx-auto text-center">
      <h2 class="mb-4 text-4xl font-bold text-gray-900" ref="servicesTitle">
        Avis de nos clients
      </h2>
      <p class="max-w-2xl mx-auto mb-12 text-gray-600" ref="servicesSubtitle">
        Laissez-vous convaincre par l'expérience de nos clients.
      </p>

      <div
        class="flex flex-wrap items-center justify-center text-left gap-y-8 lg:gap-y-0 md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8"
      >
        <div class="w-full lg:w-2/5">
          <h2 class="mb-4 text-2xl font-bold">Ils nous ont fait confiance.</h2>
          <div class="flex items-center mb-4">
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
              {{ averageRating.toFixed(1) }} sur 5
            </p>
          </div>
          <div class="flex items-center justify-center gap-4 lg:justify-start">
            <button
              class="flex items-center justify-center w-12 h-12 transition-all duration-300 border border-indigo-600 border-solid rounded-lg swiper-button-prev hover:bg-indigo-600 group"
            >
              <ArrowLeftIcon
                class="w-6 h-6 text-indigo-600 group-hover:text-white"
              />
            </button>
            <button
              class="flex items-center justify-center w-12 h-12 transition-all duration-300 border border-indigo-600 border-solid rounded-lg swiper-button-next hover:bg-indigo-600 group"
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
                <p class="text-gray-600">{{ review.text }}</p>
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
import { Navigation } from "swiper/modules";
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
    name: "Julien D.",
    rating: 5,
    text: "Prestataire Haute Gamme avec un rapport qualité prix d'exception. Un rendu rapide totalement conforme à mes exigeances et besoins avec des révisions acceptées jusqu'à la livraison finale du produit. Je recommande vivement ce prestataire. J'avais demandé la réalisation d'une page internet dans 5 langues pour un nouveau produit.",
    profileImage:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/63c7478bfca7402d8a27cfd21b5b49ba-1693472992800/59549a35-b4b4-4596-8ca7-de1f01239405.jpg",
  },
  {
    id: 2,
    name: "Elisa R.",
    rating: 5,
    text: "Je recommande vivement Marius, avec qui j'ai eu le plaisir de collaborer. C'est un développeur web consciencieux. Il fait preuve d'une excellente capacité à comprendre rapidement les besoins du projet et à proposer des solutions techniques solides et optimisées. Sa rigueur et son sens du détail garantissent toujours un code...",
    profileImage: "https://dam.malt.com/anonymous?w=80&force_format=png",
  },
]);

const averageRating = computed(() => {
  const total = reviews.value.reduce((sum, review) => sum + review.rating, 0);
  const average = total / reviews.value.length;
  return Number.isInteger(average) ? average : average.toFixed(1);
});

onMounted(() => {
  new Swiper(".mySwiper", {
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
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
