export function useRecaptcha() {
  const verifyRecaptcha = async (): Promise<boolean> => {
    if (typeof window.grecaptcha === "undefined") {
      console.error("reCAPTCHA not loaded");
      return false;
    }

    const response = window.grecaptcha.getResponse();
    return !!response;
  };

  return {
    verifyRecaptcha,
  };
}
