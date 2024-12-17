<template>
  <div class="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
    <dl
      class="grid grid-cols-1 gap-8 mt-16 text-center sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
    >
      <div v-for="stat in stats" :key="stat.name" class="space-y-2">
        <dt class="text-base font-medium text-gray-600">{{ stat.name }}</dt>
        <dd class="text-4xl font-bold text-gray-900">{{ stat.value }}</dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang="ts">
interface Stat {
  name: string;
  value: string;
}

const stats: Stat[] = [
  { name: "Sites créés", value: "150+" },
  { name: "Clients satisfaits", value: "98%" },
  { name: "Temps moyen de livraison", value: "2 semaines" },
  { name: "Technologies maîtrisées", value: "15+" },
];
</script>
