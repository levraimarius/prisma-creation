declare global {
  interface Window {
    grecaptcha: {
      render: (container: string | HTMLElement, parameters: object) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
  }
}

export {};
