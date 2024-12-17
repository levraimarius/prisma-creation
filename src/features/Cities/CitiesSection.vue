<template>
  <section class="relative px-6 py-24 overflow-hidden bg-gray-50">
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 opacity-[0.03]"
      style="
        background-image: url(&quot;data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;006060&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%236366f1&quot; fill-opacity=&quot;1&quot;%3E%3Cpath d=&quot;M3634v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM634v-4H4v4H0v2h4v4h2v-4h4v-2H6zM64V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);
      "
    ></div>

    <div class="container relative mx-auto">
      <div class="mx-auto text-center">
        <!-- Section Header -->
        <div class="mb-16 space-y-4">
          <h2
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Avec vous dans toute la France
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-gray-600">
            Votre présence numérique dans tout le pays.
          </p>
        </div>

        <!-- Cities Grid -->
        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <TransitionGroup name="city-cards" tag="div" class="contents">
            <CityCard v-for="city in cities" :key="city.path" :city="city" />
          </TransitionGroup>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCities } from "../../composables/useCities";
import CityCard from "./components/CityCard.vue";

const { cities } = useCities(4);
</script>

<style scoped>
.city-cards-move {
  transition: all 0.5s ease;
}

.city-cards-enter-active,
.city-cards-leave-active {
  transition: all 0.5s ease;
}

.city-cards-enter-from,
.city-cards-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.city-cards-leave-active {
  position: absolute;
}
</style>
