<template>
  <div class="bg-white shadow-md rounded-lg p-6">
    <slot name="header">{{ title }}</slot>
    <slot>{{ description }}</slot>
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
