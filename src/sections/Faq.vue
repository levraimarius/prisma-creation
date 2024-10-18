<template>
  <section id="faq" class="bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
    <div class="container mx-auto max-w-4xl text-center">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 gsap-faq-title">
        Quelques questions ?
      </h2>
      <p class="text-gray-600 mb-12 max-w-2xl mx-auto gsap-faq-description">
        Retrouvez ici les réponses aux questions les plus fréquemment posées par nos clients.
      </p>

      <div class="space-y-4 gsap-faq-items">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border-b border-gray-300 pb-4"
        >
          <button
            @click="toggleAnswer(index)"
            class="flex items-center justify-between w-full text-left text-lg text-gray-900 py-2 focus:outline-none"
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
    question: "Combien de temps faut-il pour créer un site internet ?",
    answer:
      "Le délai de création d'un site internet dépend de la complexité du projet. Un site simple peut prendre entre 2 à 4 semaines, tandis que des projets plus complexes peuvent nécessiter plusieurs mois.",
    open: false,
  },
  {
    question: "Combien coûte un site internet ?",
    answer:
      "Le coût d'un site internet varie en fonction des fonctionnalités et de la complexité souhaitées. Je propose différents forfaits adaptés à divers budgets, allant d'options abordables pour les petites entreprises à des solutions plus avancées.",
    open: false,
  },
  {
    question: "Mon site sera-t-il compatible avec les mobiles ?",
    answer:
      "Absolument ! Tous les sites que je crée sont entièrement responsives, ce qui signifie qu'ils s'adaptent parfaitement à tout type d'appareil, y compris les smartphones et tablettes.",
    open: false,
  },
  {
    question:
      "Pourrai-je mettre à jour le site moi-même une fois qu'il est créé ?",
    answer:
      "Oui, je peux vous fournir un système de gestion de contenu (CMS) qui vous permettra de faire des modifications facilement, sans compétences techniques.",
    open: false,
  },
  {
    question: "Proposez-vous des services de maintenance de site internet ?",
    answer:
      "Oui, je propose des forfaits de maintenance continue pour assurer la sécurité, la mise à jour et le bon fonctionnement de votre site.",
    open: false,
  },
  {
    question: "Que dois-je fournir avant de commencer la création du site ?",
    answer:
      "En général, j'ai besoin de votre logo, des images que vous souhaitez utiliser, et du contenu pour vos pages. Si vous avez besoin d'aide pour le contenu, je peux également vous accompagner.",
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
