<template>
  <div id="contact" class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center gsap-contact-title">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Contactez-nous
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        Discutons de votre projet.
      </p>
    </div>
    <form
      @submit.prevent="sendEmail"
      class="mx-auto mt-16 max-w-xl sm:mt-20 gsap-contact-form"
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
        <SwitchGroup
          as="div"
          class="flex gap-x-4 sm:col-span-2 gsap-contact-switch"
        >
          <div class="flex h-6 items-center">
            <Switch
              v-model="agreed"
              :class="[
                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              ]"
            >
              <span class="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                :class="[
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                ]"
              />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-gray-600">
            En sélectionnant ceci, vous acceptez notre
            {{ " " }}
            <a
              href="/politique-de-confidentialite"
              class="font-semibold text-indigo-600"
              >politique&nbsp;de&nbsp;confidentialité</a
            >.
          </SwitchLabel>
        </SwitchGroup>
        <div class="recaptcha-container">
          <div
            class="g-recaptcha mt-4"
            data-sitekey="6Ld5dmUqAAAAACd168BGNtu1qEz53-tCrex83G3G"
            ref="recaptcha"
          ></div>
        </div>
      </div>
      <div class="mt-10 gsap-contact-button">
        <button
          type="submit"
          class="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
        >
          Parlons-en
        </button>
      </div>
    </form>

    <!-- Notifications -->
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
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import Notification from "../../components/common/Notification.vue";
import emailjs from "emailjs-com";

gsap.registerPlugin(ScrollTrigger);

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

onMounted(() => {
  const recaptchaScript = document.createElement("script");
  recaptchaScript.src = "https://www.google.com/recaptcha/api.js";
  recaptchaScript.async = true;
  recaptchaScript.defer = true;
  document.body.appendChild(recaptchaScript);

  gsap.from(".gsap-contact-title", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".gsap-contact-form", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
    opacity: 0,
    y: 20,
    delay: 0.2,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".gsap-contact-switch", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
    opacity: 0,
    x: -20,
    delay: 0.4,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".gsap-contact-button", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
    opacity: 0,
    y: 20,
    delay: 0.6,
    duration: 1,
    ease: "power3.out",
  });
});

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

  const response = grecaptcha.getResponse();
  if (!response) {
    showNotification.value = true;
    notificationType.value = "error";
    notificationTitle.value = "Erreur";
    notificationMessage.value =
      "Veuillez vérifier le reCAPTCHA avant d'envoyer le formulaire.";
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
    transform: scale(0.80);
    transform-origin: 0 0;
  }
}
</style>
