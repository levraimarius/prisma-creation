<template>
  <section id="faq" class="px-6 py-24 bg-gray-50 sm:py-32 lg:px-8">
    <div class="container max-w-4xl mx-auto text-center">
      <h2 class="mb-4 text-4xl font-bold text-gray-900">
        Quelques questions ?
      </h2>
      <p class="max-w-2xl mx-auto mb-12 text-gray-600">
        Retrouvez ici les réponses aux questions fréquentes de nos clients.
      </p>

      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="pb-4 border-b border-gray-300"
        >
          <button
            @click="toggleAnswer(index)"
            class="flex items-center justify-between w-full py-2 text-lg text-left text-gray-900 transition focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
            <p v-if="faq.open" class="mt-2 text-left text-gray-600">
              {{ faq.answer }}
            </p>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

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
