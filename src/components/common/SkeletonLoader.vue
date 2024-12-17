<template>
  <div
    class="bg-gray-200 rounded animate-pulse"
    :style="{ width, height }"
  ></div>
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "20px",
  },
});
</script>
