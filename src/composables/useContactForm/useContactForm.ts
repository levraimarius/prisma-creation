import { ref } from "vue";
import emailjs from "emailjs-com";
import { useRecaptcha } from "./useRecaptcha";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export function useContactForm() {
  const form = ref<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const agreed = ref(false);
  const showNotification = ref(false);
  const notificationType = ref<"success" | "error">("success");
  const notificationTitle = ref("");
  const notificationMessage = ref("");
  const notificationTrigger = ref(0);
  const isLoading = ref(false);

  const { verifyRecaptcha } = useRecaptcha();

  const emailjsUserID = "9yMDAmgKWNcDR4lQl";
  const serviceID = "service_dlp2fdl";
  const templateID = "template_xcmfgyi";

  const sendEmail = async (formData: ContactForm) => {
    if (!agreed.value) {
      triggerErrorNotification(
        "Veuillez accepter la politique de confidentialité avant d'envoyer le formulaire."
      );
      return;
    }

    try {
      const isVerified = await verifyRecaptcha();
      if (!isVerified) {
        triggerErrorNotification(
          "Veuillez vérifier le reCAPTCHA avant d'envoyer le formulaire."
        );
        return;
      }

      isLoading.value = true;

      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        user_email: formData.email,
        message: formData.message,
      };

      emailjs.init(emailjsUserID);
      await emailjs.send(serviceID, templateID, templateParams);

      triggerSuccessNotification("Votre message a été envoyé avec succès !");
      window.grecaptcha?.reset();
      form.value = { firstName: "", lastName: "", email: "", message: "" };
      agreed.value = false;
    } catch (error) {
      triggerErrorNotification(
        "Une erreur est survenue lors de l'envoi du message."
      );
    } finally {
      isLoading.value = false;
    }
  };

  function triggerSuccessNotification(message: string) {
    setNotification("success", "Succès", message);
  }

  function triggerErrorNotification(message: string) {
    setNotification("error", "Erreur", message);
  }

  function setNotification(
    type: "success" | "error",
    title: string,
    message: string
  ) {
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
