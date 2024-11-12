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
      notificationType.value = "error";
      notificationTitle.value = "Erreur";
      notificationMessage.value =
        "Veuillez accepter la politique de confidentialité avant d'envoyer le formulaire.";
      triggerNotification();
      return;
    }

    if (typeof grecaptcha !== "undefined") {
      const response = grecaptcha.getResponse();
      if (!response) {
        notificationType.value = "error";
        notificationTitle.value = "Erreur";
        notificationMessage.value =
          "Veuillez vérifier le reCAPTCHA avant d'envoyer le formulaire.";
        triggerNotification();
        return;
      }
    } else {
      notificationType.value = "error";
      notificationTitle.value = "Erreur";
      notificationMessage.value = "Le reCAPTCHA n'a pas encore été chargé.";
      triggerNotification();
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
      .then(
        () => {
          notificationType.value = "success";
          notificationTitle.value = "Succès";
          notificationMessage.value =
            "Votre message a été envoyé avec succès !";
          grecaptcha.reset();
          form.value = { firstName: "", lastName: "", email: "", message: "" };
          agreed.value = false;
          triggerNotification();
        },
        () => {
          notificationType.value = "error";
          notificationTitle.value = "Erreur";
          notificationMessage.value =
            "Une erreur est survenue lors de l'envoi du message.";
          triggerNotification();
        }
      )
      .finally(() => {
        isLoading.value = false;
      });
  };

  function triggerNotification() {
    notificationTrigger.value++;
    showNotification.value = true;
    setTimeout(() => {
      showNotification.value = false;
    }, 0);
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
