<template>
  <section id="accueil" class="bg-gray-50 px-6 py-16 lg:px-8">
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-between"
    >
      <!-- Left Text Section -->
      <div class="md:w-1/2 text-center md:text-left">
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gsap-title"
        >
          Créez votre site en toute simplicité
        </h1>
        <p class="text-lg text-gray-600 mb-8 gsap-description">
          Votre présence en ligne, sans complexité. De la création au
          déploiement, nous vous accompagnons à chaque étape.
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 gsap-buttons"
        >
          <a
            href="#services"
            class="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition w-max"
          >
            Découvrir
          </a>
          <a
            href="https://cal.com/marius-thiesset/consultation-de-site-web"
            target="_blank"
            class="text-indigo-600 flex items-center"
          >
            Prendre un rendez-vous
            <ArrowRightIcon class="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>

      <!-- Right Image Section -->
      <div class="md:w-1/2 mt-10 md:mt-0 gsap-image">
        <img
          src="@/assets/0e055bd6fc948f460fe50aa193ac36e6.jpg"
          alt="Business Team"
          class="rounded-lg shadow-md object-cover w-full h-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// On mounted, trigger GSAP animations for elements in the #accueil section
onMounted(() => {
  // Animation for the title
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

  // Animation for the description
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

  // Animation for the buttons
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

  // Animation for the image
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
});
</script>
