<template>
  <section id="contact" class="relative px-6 py-24 bg-gray-50 sm:py-32 lg:px-8">
    <!-- Section Header -->
    <div class="max-w-2xl mx-auto mb-16 text-center">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Contactez-nous
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        Discutons de votre projet et trouvons ensemble la meilleure solution.
      </p>
    </div>

    <!-- Main Content -->
    <div class="max-w-5xl mx-auto">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <!-- Contact Information -->
        <div class="lg:col-span-5">
          <div class="p-8 bg-white shadow-sm rounded-2xl">
            <ContactInfo />
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-7">
          <div class="p-8 bg-white shadow-sm rounded-2xl">
            <ContactForm :is-loading="isLoading" @submit="handleSubmit" />
          </div>
        </div>
      </div>
    </div>

    <!-- Notification -->
    <Notification
      :type="notificationType"
      :title="notificationTitle"
      :message="notificationMessage"
      :trigger="notificationTrigger"
    />
  </section>
</template>

<script setup lang="ts">
import { useContactForm } from "../../composables/useContactForm/useContactForm";
import ContactInfo from "./components/ContactInfo.vue";
import ContactForm from "./components/ContactForm.vue";
import Notification from "../../components/common/Notification.vue";

const {
  isLoading,
  notificationType,
  notificationTitle,
  notificationMessage,
  notificationTrigger,
  sendEmail,
} = useContactForm();

const handleSubmit = async (formData: any) => {
  await sendEmail(formData);
};
</script>
