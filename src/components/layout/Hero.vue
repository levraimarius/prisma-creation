<template>
  <section id="accueil" class="relative px-6 py-16 lg:px-8 lg:py-36">
    <div class="absolute inset-0 overflow-hidden">
      <img
        class="object-cover w-full h-full pointer-events-none select-none"
        src="../../assets/fond.svg"
        alt="Fond"
        draggable="false"
      />
    </div>
    <div
      class="container relative flex flex-col items-start justify-between mx-auto gap-x-8 md:flex-row"
    >
      <div class="text-center md:w-1/2 md:text-left">
        <h1
          class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Votre site web
          <span class="highlight-container">
            <span class="highlight-background"></span>
            <span class="highlight">sur mesure</span> </span
          >, simplement
        </h1>
        <p class="mb-8 text-lg text-gray-600">
          Que vous soyez un particulier, un artisan ou un petit commerçant, nous
          vous accompagnons à chaque étape pour créer et maintenir une présence
          en ligne professionnelle. De la conception à la mise à jour, profitez
          d'un suivi personnalisé adapté à vos besoins.
        </p>

        <div
          class="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0"
        >
          <a
            href="#services"
            class="px-6 py-3 text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700 w-max"
            aria-label="Découvrir nos services"
          >
            Découvrir nos services
          </a>
          <a
            href="https://cal.com/prisma-creation/consultation-pour-la-creation-dun-site-web"
            target="_blank"
            class="flex items-center text-indigo-600 transition hover:text-indigo-700 prendre-rdv"
            aria-label="Prendre un rendez-vous"
          >
            Prendre un rendez-vous
            <ArrowRightIcon class="w-5 h-5 ml-2 arrow-icon" />
          </a>
        </div>
      </div>

      <div class="mt-10 md:w-1/2 md:mt-0">
        <img
          class="object-cover w-full h-full"
          src="../../assets/logo_prismacreation.svg"
          alt="Logo de Prisma Création"
        />
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>

<style scoped>
.carousel-control,
.carousel-indicators {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.carousel-container:hover .carousel-control,
.carousel-container:hover .carousel-indicators {
  opacity: 1;
}

.highlight-container {
  position: relative;
  display: inline-block;
  /* overflow: hidden; */
}

.highlight-background {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  background-color: #fcd34d;
  z-index: -1;
  width: 0%;
  border-radius: 8px;
}

.highlight {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0 5px;
}
</style>
