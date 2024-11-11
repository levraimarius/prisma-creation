<template>
  <div id="contact" class="px-6 py-24 bg-gray-50 isolate sm:py-32 lg:px-8">
    <div class="max-w-5xl mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8">
      <div class="text-center lg:col-span-4 lg:mb-0 lg:text-left">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contactez-nous
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Discutons de votre projet.
        </p>
        <div class="mt-10 space-y-6 text-left lg:space-y-8">
          <div class="flex items-start">
            <MapPinIcon class="w-6 h-6 mr-3 text-indigo-600" />
            <div>
              <h3 class="text-lg font-medium text-gray-900">
                Où intervenons-nous ?
              </h3>
              <p class="mt-1 text-gray-600">
                Nous intervenons dans toute la France.
              </p>
            </div>
          </div>
          <div class="flex items-start">
            <EnvelopeIcon class="w-6 h-6 mr-3 text-indigo-600" />
            <div>
              <h3 class="text-lg font-medium text-gray-900">
                Vous préférez un contact plus direct ?
              </h3>
              <a
                href="mailto:contact@prismacreation.fr"
                class="flex items-center text-indigo-600 transition hover:text-indigo-700"
                >contact@prismacreation.fr</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 lg:col-span-8 lg:mt-0">
        <form
          @submit.prevent="sendEmail"
          class="max-w-xl mx-auto mt-16 lg:mx-0 sm:mt-20"
        >
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Prénom
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  v-model="form.firstName"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Nom de famille
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  v-model="form.lastName"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div class="mt-2.5">
                <input
                  type="email"
                  v-model="form.email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div class="mt-2.5">
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                ></textarea>
              </div>
            </div>
            <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
              <div class="flex items-center h-6">
                <Switch
                  v-model="agreed"
                  :class="[
                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                  ]"
                  role="switch"
                  :aria-checked="agreed"
                  aria-label="Toggle agreement"
                >
                  <span
                    aria-hidden="true"
                    :class="[
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                    ]"
                  />
                </Switch>
              </div>

              <p class="text-sm leading-6 text-gray-600">
                En sélectionnant ceci, vous acceptez notre
                {{ " " }}
                <a
                  href="/politique-de-confidentialite"
                  target="_blank"
                  class="font-semibold text-indigo-600 transition hover:text-indigo-700"
                  >politique&nbsp;de&nbsp;confidentialité</a
                >.
              </p>
            </SwitchGroup>
            <div class="recaptcha-container">
              <div
                class="mt-4 g-recaptcha"
                data-sitekey="6Ld5dmUqAAAAACd168BGNtu1qEz53-tCrex83G3G"
                ref="recaptcha"
              ></div>
            </div>
          </div>
          <div class="mt-10">
            <button
              type="submit"
              class="block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-indigo-600 transition"
              aria-label="Parlons-en"
            >
              Parlons-en
            </button>
          </div>
        </form>
      </div>
    </div>

    <Notification
      v-if="showNotification"
      :type="notificationType"
      :title="notificationTitle"
      :message="notificationMessage"
      :trigger="notificationTrigger"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Switch, SwitchGroup } from "@headlessui/vue";
import Notification from "../../components/common/Notification.vue";
import emailjs from "emailjs-com";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/vue/24/solid";

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});
const agreed = ref(false);
const showNotification = ref(false);
const notificationType = ref("success");
const notificationTitle = ref("");
const notificationMessage = ref("");
let notificationTrigger = ref(0);

const emailjsUserID = "9yMDAmgKWNcDR4lQl";
const serviceID = "service_dlp2fdl";
const templateID = "template_xcmfgyi";

const sendEmail = () => {
  notificationTrigger.value++;

  if (!agreed.value) {
    showNotification.value = true;
    notificationType.value = "error";
    notificationTitle.value = "Erreur";
    notificationMessage.value =
      "Veuillez accepter la politique de confidentialité avant d'envoyer le formulaire.";
    return;
  }

  if (typeof grecaptcha !== "undefined") {
    const response = grecaptcha.getResponse();
    if (!response) {
      showNotification.value = true;
      notificationType.value = "error";
      notificationTitle.value = "Erreur";
      notificationMessage.value =
        "Veuillez vérifier le reCAPTCHA avant d'envoyer le formulaire.";
      return;
    }
  } else {
    showNotification.value = true;
    notificationType.value = "error";
    notificationTitle.value = "Erreur";
    notificationMessage.value = "Le reCAPTCHA n'a pas encore été chargé.";
    return;
  }

  const templateParams = {
    first_name: form.value.firstName,
    last_name: form.value.lastName,
    user_email: form.value.email,
    message: form.value.message,
  };

  emailjs.init(emailjsUserID);

  emailjs.send(serviceID, templateID, templateParams).then(
    (response) => {
      showNotification.value = true;
      notificationType.value = "success";
      notificationTitle.value = "Succès";
      notificationMessage.value = "Votre message a été envoyé avec succès !";
      grecaptcha.reset();
    },
    (error) => {
      showNotification.value = true;
      notificationType.value = "error";
      notificationTitle.value = "Erreur";
      notificationMessage.value =
        "Une erreur est survenue lors de l'envoi du message.";
    }
  );
};
</script>

<style scoped>
@media (max-width: 375px) {
  .recaptcha-container {
    transform: scale(0.8);
    transform-origin: 0 0;
  }
}
</style>
