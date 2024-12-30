import { ref } from 'vue';
import emailjs from 'emailjs-com';
import type { ContactForm } from '../types';

export function useContactForm() {
  const form = ref<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const isLoading = ref(false);
  const notificationType = ref<'success' | 'error'>('success');
  const notificationTitle = ref('');
  const notificationMessage = ref('');
  const notificationTrigger = ref(0);

  const emailjsConfig = {
    userId: '9yMDAmgKWNcDR4lQl',
    serviceId: 'service_dlp2fdl',
    templateId: 'template_xcmfgyi',
  };

  const triggerNotification = (type: 'success' | 'error', title: string, message: string) => {
    notificationType.value = type;
    notificationTitle.value = title;
    notificationMessage.value = message;
    notificationTrigger.value++;
  };

  const sendEmail = async (formData: ContactForm) => {
    try {
      isLoading.value = true;

      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        user_email: formData.email,
        message: formData.message,
      };

      emailjs.init(emailjsConfig.userId);
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams
      );

      triggerNotification(
        'success',
        'Succès',
        'Votre message a été envoyé avec succès !'
      );

      // Reset form
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      };

      return true;
    } catch (error) {
      triggerNotification(
        'error',
        'Erreur',
        'Une erreur est survenue lors de l\'envoi du message.'
      );
      return false;
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