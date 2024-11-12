import { ref } from "vue";
import emailjs from "emailjs-com";

export function useContactForm() {
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
  const notificationTrigger = ref(0);
  const isLoading = ref(false);

  const emailjsUserID = "9yMDAmgKWNcDR4lQl";
  const serviceID = "service_dlp2fdl";
  const templateID = "template_xcmfgyi";

  const sendEmail = () => {
    if (!agreed.value) {
      triggerErrorNotification(
        "Veuillez accepter la politique de confidentialité avant d'envoyer le formulaire."
      );
      return;
    }

    if (typeof grecaptcha !== "undefined") {
      const response = grecaptcha.getResponse();
      if (!response) {
        triggerErrorNotification(
          "Veuillez vérifier le reCAPTCHA avant d'envoyer le formulaire."
        );
        return;
      }
    } else {
      triggerErrorNotification("Le reCAPTCHA n'a pas encore été chargé.");
      return;
    }

    isLoading.value = true;

    const templateParams = {
      first_name: form.value.firstName,
      last_name: form.value.lastName,
      user_email: form.value.email,
      message: form.value.message,
    };

    emailjs.init(emailjsUserID);
    emailjs
      .send(serviceID, templateID, templateParams)
      .then(() => {
        triggerSuccessNotification("Votre message a été envoyé avec succès !");
        grecaptcha.reset();
        form.value = { firstName: "", lastName: "", email: "", message: "" };
        agreed.value = false;
      })
      .catch(() => {
        triggerErrorNotification(
          "Une erreur est survenue lors de l'envoi du message."
        );
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  function triggerSuccessNotification(message) {
    setNotification("success", "Succès", message);
  }

  function triggerErrorNotification(message) {
    setNotification("error", "Erreur", message);
  }

  function setNotification(type, title, message) {
    notificationType.value = type;
    notificationTitle.value = title;
    notificationMessage.value = message;
    triggerNotification();
  }

  function triggerNotification() {
    notificationTrigger.value++;
    showNotification.value = true;
    setTimeout(() => {
      showNotification.value = false;
    }, 5000);
  }

  return {
    form,
    agreed,
    showNotification,
    notificationType,
    notificationTitle,
    notificationMessage,
    notificationTrigger,
    isLoading,
    sendEmail,
  };
}
