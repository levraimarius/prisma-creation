<template>
  <form @submit.prevent="handleSubmit" class="relative">
    <LoadingOverlay :loading="isLoading" />

    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <FormInput
        id="first-name"
        v-model="form.firstName"
        label="Prénom"
        type="text"
        autocomplete="given-name"
        required
      />

      <FormInput
        id="last-name"
        v-model="form.lastName"
        label="Nom de famille"
        type="text"
        autocomplete="family-name"
        required
      />

      <FormInput
        id="email"
        v-model="form.email"
        label="Email"
        type="email"
        autocomplete="email"
        class="sm:col-span-2"
        required
      />

      <FormTextarea
        id="message"
        v-model="form.message"
        label="Message"
        :rows="4"
        class="sm:col-span-2"
        required
      />

      <PrivacyPolicy
        v-model="agreed"
        :error="privacyError"
        class="sm:col-span-2"
        @update:modelValue="clearPrivacyError"
      />

      <div class="sm:col-span-2">
        <ReCaptcha ref="recaptchaRef" />
        <p v-if="recaptchaError" class="mt-1 text-sm text-red-600">
          {{ recaptchaError }}
        </p>
      </div>
    </div>

    <div class="mt-10">
      <SubmitButton :loading="isLoading" />
    </div>

    <Notification
      :type="notificationType"
      :title="notificationTitle"
      :message="notificationMessage"
      :trigger="notificationTrigger"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useContactForm } from "../composables/useContactForm";
import { useRecaptcha } from "../composables/useRecaptcha";
import { LoadingOverlay } from "../../../components/common";
import FormInput from "./FormInput.vue";
import FormTextarea from "./FormTextarea.vue";
import PrivacyPolicy from "./PrivacyPolicy.vue";
import ReCaptcha from "./ReCaptcha.vue";
import SubmitButton from "./SubmitButton.vue";
import Notification from "../../../components/common/Notification.vue";

const {
  form,
  isLoading,
  notificationType,
  notificationTitle,
  notificationMessage,
  notificationTrigger,
  sendEmail,
} = useContactForm();

const { verifyRecaptcha, resetRecaptcha } = useRecaptcha();

const agreed = ref(false);
const privacyError = ref("");
const recaptchaError = ref("");

const clearPrivacyError = () => {
  privacyError.value = "";
};

const handleSubmit = async () => {
  // Reset errors
  privacyError.value = "";
  recaptchaError.value = "";

  // Validate privacy policy
  if (!agreed.value) {
    privacyError.value = "Veuillez accepter la politique de confidentialité";
    return;
  }

  // Validate reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha();
  if (!isRecaptchaValid) {
    recaptchaError.value = "Veuillez valider le reCAPTCHA";
    return;
  }

  const success = await sendEmail(form.value);
  if (success) {
    agreed.value = false;
    resetRecaptcha();
  }
};
</script>
