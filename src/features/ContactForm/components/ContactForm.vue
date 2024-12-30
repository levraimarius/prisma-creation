<template>
  <div class="space-y-8">
    <div>
      <h3 class="text-xl font-semibold text-gray-900">
        Envoyez-nous un message
      </h3>
      <p class="mt-2 text-gray-600">
        Nous vous répondrons dans les plus brefs délais.
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <FormField
          id="first-name"
          v-model="formData.firstName"
          label="Prénom"
          type="text"
          autocomplete="given-name"
          required
        />
        <FormField
          id="last-name"
          v-model="formData.lastName"
          label="Nom"
          type="text"
          autocomplete="family-name"
          required
        />
        <FormField
          id="email"
          v-model="formData.email"
          label="Email"
          type="email"
          autocomplete="email"
          class="sm:col-span-2"
          required
        />
        <FormField
          id="message"
          v-model="formData.message"
          label="Message"
          type="textarea"
          :rows="4"
          class="sm:col-span-2"
          required
        />
      </div>

      <PrivacyAgreement v-model="agreed" />
      <ReCaptcha ref="recaptchaRef" />

      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="isLoading"
          class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon
            v-if="!isLoading"
            class="w-4 h-4 mr-2 -rotate-45"
          />
          <ArrowPathIcon v-else class="w-4 h-4 mr-2 animate-spin" />
          {{ isLoading ? "Envoi en cours" : "Envoyer" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { PaperAirplaneIcon, ArrowPathIcon } from "@heroicons/vue/24/outline";
import FormField from "./FormField.vue";
import PrivacyAgreement from "./PrivacyAgreement.vue";
import ReCaptcha from "./ReCaptcha.vue";

defineProps<{
  isLoading: boolean;
}>();

const emit = defineEmits<{
  (e: "submit", formData: any): void;
}>();

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});

const agreed = ref(false);
const recaptchaRef = ref();

const handleSubmit = async () => {
  if (!agreed.value) {
    // Handle privacy agreement error
    return;
  }

  const recaptchaResponse = await recaptchaRef.value?.getResponse();
  if (!recaptchaResponse) {
    // Handle recaptcha error
    return;
  }

  emit("submit", { ...formData });
};
</script>
