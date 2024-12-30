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

  const isLoading = ref(false);
  const notificationType = ref<"success" | "error">("success");
  const notificationTitle = ref("");
  const notificationMessage = ref("");
  const notificationTrigger = ref(0);

  const { verifyRecaptcha } = useRecaptcha();

  const emailjsUserID = "9yMDAmgKWNcDR4lQl";
  const serviceID = "service_dlp2fdl";
  const templateID = "template_xcmfgyi";

  const triggerNotification = (
    type: "success" | "error",
    title: string,
    message: string
  ) => {
    notificationType.value = type;
    notificationTitle.value = title;
    notificationMessage.value = message;
    notificationTrigger.value += 1;
  };

  const sendEmail = async (formData: ContactForm) => {
    try {
      isLoading.value = true;

      const isVerified = await verifyRecaptcha();
      if (!isVerified) {
        triggerNotification(
          "error",
          "Erreur",
          "Veuillez vérifier le reCAPTCHA avant d'envoyer le formulaire."
        );
        return;
      }

      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        user_email: formData.email,
        message: formData.message,
      };

      emailjs.init(emailjsUserID);
      await emailjs.send(serviceID, templateID, templateParams);

      triggerNotification(
        "success",
        "Succès",
        "Votre message a été envoyé avec succès !"
      );

      // Reset form
      form.value = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      };

      window.grecaptcha?.reset();
    } catch (error) {
      triggerNotification(
        "error",
        "Erreur",
        "Une erreur est survenue lors de l'envoi du message."
      );
    } finally {
      isLoading.value = false;
    }
  };

  return {
    form,
    isLoading,
    notificationType,
    notificationTitle,
    notificationMessage,
    notificationTrigger,
    sendEmail,
  };
}
