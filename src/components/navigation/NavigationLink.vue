<template>
  <a
    :href="href"
    :class="[
      'relative rounded-md px-4 py-2 text-base font-medium transition-all duration-200 block',
      'before:absolute before:inset-0 before:rounded-md before:transition-all before:duration-200',
      isActive
        ? 'text-indigo-600 before:bg-indigo-50'
        : 'text-gray-600 hover:text-indigo-600 before:opacity-0 hover:before:opacity-100 before:bg-gray-50',
      className,
    ]"
    :aria-current="isActive ? 'page' : undefined"
    @click.prevent="onClick"
  >
    <span class="relative z-10">
      <slot />
    </span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}>();
</script>
