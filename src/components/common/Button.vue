<template>
  <button :class="buttonClass" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    buttonClass() {
      return this.type === "primary"
        ? "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        : "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600";
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
});
</script>
