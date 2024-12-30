export function useRecaptcha() {
  const verifyRecaptcha = async (): Promise<boolean> => {
    if (typeof window.grecaptcha === "undefined") {
      console.error("reCAPTCHA not loaded");
      return false;
    }

    const response = window.grecaptcha.getResponse();
    if (!response) {
      return false;
    }

    return true;
  };

  const resetRecaptcha = () => {
    if (window.grecaptcha) {
      window.grecaptcha.reset();
    }
  };

  return {
    verifyRecaptcha,
    resetRecaptcha,
  };
}
