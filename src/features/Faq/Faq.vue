<template>
  <section id="faq" class="bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
    <div class="container mx-auto max-w-4xl text-center">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 gsap-faq-title">
        Quelques questions ?
      </h2>
      <p class="text-gray-600 mb-12 max-w-2xl mx-auto gsap-faq-description">
        Retrouvez ici les réponses aux questions fréquentes de nos clients.
      </p>

      <div class="space-y-4 gsap-faq-items">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border-b border-gray-300 pb-4"
        >
          <button
            @click="toggleAnswer(index)"
            class="flex items-center justify-between w-full text-left text-lg text-gray-900 py-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition"
            :aria-label="faq.question"
          >
            {{ faq.question }}
            <span
              class="text-gray-500 transition-transform duration-200"
              :class="{ 'rotate-45': faq.open }"
            >
              <ChevronDownIcon class="w-6 h-6" />
            </span>
          </button>
          <transition name="fade">
            <p v-if="faq.open" class="text-gray-600 text-left mt-2">
              {{ faq.answer }}
            </p>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = ref([
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer:
      "Le délai de création dépend du type de site. Un site vitrine peut être prêt en 1 à 2 semaines, tandis qu'une boutique en ligne ou un site personnalisé peut prendre jusqu'à 4 à 6 semaines, selon vos besoins.",
    open: false,
  },
  {
    question: "Combien coûte un site internet ?",
    answer:
      "Le prix dépend des fonctionnalités et des services inclus dans votre projet. Nous proposons des forfaits mensuels pour chaque type de site, adaptés aux budgets des particuliers et petits commerçants.",
    open: false,
  },
  {
    question: "Mon site sera-t-il compatible avec les mobiles ?",
    answer:
      "Absolument ! Tous nos sites sont optimisés pour s'adapter à tous les supports : ordinateurs, tablettes et smartphones.",
    open: false,
  },
  {
    question: "Puis-je mettre à jour le site moi-même après sa création ?",
    answer:
      "Oui, chaque projet inclut une formation et une documentation complète pour que vous puissiez gérer et mettre à jour votre site en toute autonomie via un système de gestion de contenu (CMS).",
    open: false,
  },
  {
    question: "Proposez-vous des services de maintenance ?",
    answer:
      "Oui, nous offrons des forfaits de maintenance pour garantir la sécurité et les mises à jour de votre site. Vous n'avez à vous soucier de rien !",
    open: false,
  },
  {
    question: "Que dois-je fournir pour démarrer la création de mon site ?",
    answer:
      "Nous aurons besoin de vos textes, images, et de vos informations de contact. Si vous avez besoin d'aide pour rédiger vos contenus, notre équipe est là pour vous accompagner.",
    open: false,
  },
]);

const toggleAnswer = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};

onMounted(() => {
  gsap.from(".gsap-faq-title", {
    scrollTrigger: {
      trigger: "#faq",
      start: "top 80%",
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".gsap-faq-description", {
    scrollTrigger: {
      trigger: "#faq",
      start: "top 80%",
    },
    opacity: 0,
    y: 20,
    delay: 0.2,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".gsap-faq-items", {
    scrollTrigger: {
      trigger: "#faq",
      start: "top 80%",
    },
    opacity: 0,
    y: 20,
    delay: 0.4,
    duration: 1,
    ease: "power3.out",
  });
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
