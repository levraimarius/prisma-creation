<template>
  <div class="absolute inset-0 pointer-events-none">
    <div
      v-for="(bubble, index) in largeBubbles"
      :key="`large-${index}`"
      class="floating-bubble large"
      :style="bubbleToStyle(bubble)"
      :class="bubble.class"
    ></div>

    <div
      v-for="(bubble, index) in mediumBubbles"
      :key="`medium-${index}`"
      class="floating-bubble medium"
      :style="bubbleToStyle(bubble)"
      :class="bubble.class"
    ></div>

    <div
      v-for="(bubble, index) in smallBubbles"
      :key="`small-${index}`"
      class="floating-bubble small"
      :style="bubbleToStyle(bubble)"
      :class="bubble.class"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

interface BubbleStyle {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

interface Bubble {
  style: BubbleStyle;
  class: string;
}

const colors = [
  "bg-indigo-200",
  "bg-blue-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
];

const bubbleToStyle = (bubble: Bubble): CSSProperties => ({
  left: bubble.style.left,
  top: bubble.style.top,
  animationDelay: bubble.style.animationDelay,
  animationDuration: bubble.style.animationDuration,
});

const createBubbles = (count: number): Bubble[] => {
  return Array.from({ length: count }, () => ({
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * -20}s`,
      animationDuration: `${10 + Math.random() * 10}s`,
    },
    class: colors[Math.floor(Math.random() * colors.length)],
  }));
};

const largeBubbles = createBubbles(3);
const mediumBubbles = createBubbles(5);
const smallBubbles = createBubbles(8);
</script>

<style scoped>
.floating-bubble {
  @apply absolute rounded-full opacity-40;
  animation: float-around infinite ease-in-out;
}

.large {
  @apply w-8 h-8;
}

.medium {
  @apply w-6 h-6;
}

.small {
  @apply w-4 h-4;
}

@keyframes float-around {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, -20px) rotate(90deg);
  }
  50% {
    transform: translate(-10px, -40px) rotate(180deg);
  }
  75% {
    transform: translate(-30px, -20px) rotate(270deg);
  }
}
</style>
