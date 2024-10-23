<template>
  <section id="accueil" class="relative px-6 py-16 lg:px-8 lg:py-36">
    <div class="absolute inset-0 overflow-hidden">
      <img
        class="w-full h-full object-cover pointer-events-none select-none"
        src="../../assets/fond.svg"
        alt="Fond"
        draggable="false"
      />
    </div>
    <div
      class="container relative mx-auto flex gap-x-8 flex-col md:flex-row items-start justify-between"
    >
      <div class="md:w-1/2 text-center md:text-left">
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gsap-title"
        >
          Votre site web
          <span class="highlight-container">
            <span class="highlight-background"></span>
            <span class="highlight">sur mesure</span> </span
          >, simplement
        </h1>
        <p class="text-lg text-gray-600 mb-8 gsap-description">
          Que vous soyez un particulier ou un petit commerçant, nous vous
          accompagnons à chaque étape pour mettre en place une présence en ligne
          professionnelle. De la création à la mise à jour, bénéficiez d'un
          suivi personnalisé.
        </p>

        <div
          class="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 gsap-buttons"
        >
          <a
            href="#services"
            class="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition w-max"
            aria-label="Découvrir nos services"
          >
            Découvrir nos services
          </a>
          <a
            href="https://cal.com/marius-thiesset/consultation-de-site-web"
            target="_blank"
            class="text-indigo-600 flex items-center hover:text-indigo-700 transition prendre-rdv"
            aria-label="Prendre un rendez-vous"
          >
            Prendre un rendez-vous
            <ArrowRightIcon class="w-5 h-5 ml-2 arrow-icon" />
          </a>
        </div>
      </div>

      <div class="md:w-1/2 mt-10 md:mt-0 gsap-image">
        <img
          class="object-cover w-full h-full"
          src="../../assets/logo_prismacreation.svg"
          alt="Logo de Prisma Création"
        />
      </div>

      <!-- <div
        class="mx-auto max-w-xs sm:max-w-xs lg:max-w-lg lg:grid lg:grid-cols-2 lg:gap-x-4 gsap-image mt-8 lg:mt-0"
      >
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
          <div class="aspect-h-3 aspect-w-4 overflow-hidden rounded-md">
            <img
              src="../../assets/meteotranquille.png"
              alt="Model wearing plain black basic tee."
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="aspect-h-3 aspect-w-4 overflow-hidden rounded-md">
            <img
              src="../../assets/meteotranquille.png"
              alt="Model wearing plain gray basic tee."
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div
          class="aspect-h-4 aspect-w-4 lg:aspect-h-5 lg:aspect-w-3 sm:overflow-hidden rounded-md"
        >
          <img
            src="../../assets/meteotranquille2.png"
            alt="Model wearing plain white basic tee."
            class="h-full w-full object-cover object-center rounded-md"
          />
        </div>
      </div> -->
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".gsap-title", {
    scrollTrigger: {
      trigger: "#accueil",
      start: "top 80%",
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".gsap-description", {
    scrollTrigger: {
      trigger: "#accueil",
      start: "top 80%",
    },
    opacity: 0,
    y: 20,
    delay: 0.2,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".gsap-buttons", {
    scrollTrigger: {
      trigger: "#accueil",
      start: "top 80%",
    },
    opacity: 0,
    y: 20,
    delay: 0.4,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".gsap-image", {
    scrollTrigger: {
      trigger: "#accueil",
      start: "top 80%",
    },
    opacity: 0,
    delay: 0.6,
    duration: 1,
    ease: "power3.out",
  });

  gsap.fromTo(
    ".highlight-background",
    { width: "0%" },
    {
      width: "100%",
      duration: 1.5,
      delay: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".highlight",
        start: "top 80%",
      },
    }
  );

  const prendreRdvLink = document.querySelector(".prendre-rdv");
  const arrowIcon = document.querySelector(".arrow-icon");

  if (prendreRdvLink && arrowIcon) {
    prendreRdvLink.addEventListener("mouseenter", () => {
      gsap.to(arrowIcon, {
        x: 5,
        duration: 0.3,
        ease: "power3.out",
      });
    });

    prendreRdvLink.addEventListener("mouseleave", () => {
      gsap.to(arrowIcon, {
        x: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    });
  }
});
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
