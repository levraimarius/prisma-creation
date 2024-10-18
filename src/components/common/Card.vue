<template>
  <div class="bg-white shadow-md rounded-lg p-6">
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
