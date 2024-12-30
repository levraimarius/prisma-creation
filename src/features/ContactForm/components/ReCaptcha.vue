<template>
  <div class="recaptcha-wrapper">
    <div
      ref="recaptchaContainer"
      class="g-recaptcha"
      :data-sitekey="siteKey"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const siteKey = "6Ld5dmUqAAAAACd168BGNtu1qEz53-tCrex83G3G";
const recaptchaContainer = ref<HTMLElement | null>(null);
let widgetId: number | null = null;

onMounted(() => {
  const checkRecaptcha = setInterval(() => {
    if (window.grecaptcha) {
      widgetId = window.grecaptcha.render(recaptchaContainer.value!, {
        sitekey: siteKey,
        theme: "light",
      });
      clearInterval(checkRecaptcha);
    }
  }, 100);
});

const getResponse = (): string => {
  if (!window.grecaptcha) return "";
  return window.grecaptcha.getResponse(widgetId!);
};

defineExpose({
  getResponse,
});
</script>

<style scoped>
.recaptcha-wrapper {
  @apply flex justify-center sm:justify-start my-6;
}

@media (max-width: 375px) {
  .recaptcha-wrapper {
    transform: scale(0.85);
    transform-origin: left center;
  }
}
</style>
