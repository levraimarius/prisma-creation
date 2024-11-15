<template>
  <div class="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
    <img
      class="absolute inset-0 object-cover object-right -z-10 size-full md:object-center"
      :src="fondImage"
      alt="Image de fond pour l'agence web de Château-Thierry - Prisma Création"
      draggable="false"
    />
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-3xl mx-auto lg:mx-0">
        <h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl anime-title">
          Agence Web Prisma Création à
          <span class="highlight-container">
            <span class="highlight-background"></span>
            <span class="highlight">Château-Thierry</span>
          </span>
        </h1>
        <p class="mt-8 text-lg font-medium text-gray-600 text-pretty sm:text-xl/8">
          Découvrez Prisma Création, votre agence web à Château-Thierry. Création de sites web professionnels, performants et adaptés à vos besoins.
        </p>
      </div>
      <div class="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
        <dl class="grid grid-cols-1 gap-8 mt-16 text-center sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.name"
            class="space-y-2"
          >
            <dt class="text-base font-medium text-gray-600">{{ stat.name }}</dt>
            <dd class="text-4xl font-bold text-gray-900">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
  </div>
  <Services />
  <Contact />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Services from "../features/Services/Services.vue";
import Contact from "../features/ContactForm/Contact.vue";

export default defineComponent({
  name: "AgenceWebChâteauThierry",
  components: {
    Services,
    Contact,
  },
  setup() {
    const fondImage = new URL("../assets/fond.svg", import.meta.url).href;

    const stats = [
      { name: "Sites créés", value: "150+" },
      { name: "Clients satisfaits", value: "98%" },
      { name: "Temps moyen de livraison", value: "2 semaines" },
      { name: "Technologies maîtrisées", value: "15+" },
    ];

    onMounted(() => {
      document.title = "Prisma Création | Agence Web à Château-Thierry - Votre site internet à prix réduit";
    });

    return {
      fondImage,
      stats,
    };
  }
});
</script>

<style scoped>
.highlight-container {
  position: relative;
  display: inline-block;
}

.highlight-background {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 90%;
  background-color: #fcd34d;
  z-index: -1;
  width: 0;
  border-radius: 8px;
}

.highlight {
  position: relative;
  z-index: 1;
  padding: 0 5px;
}
</style>
