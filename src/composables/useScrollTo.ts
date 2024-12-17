import { ref } from "vue";

export function useScrollTo() {
  const isScrolling = ref(false);

  const scrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (!element) return;

    isScrolling.value = true;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    // Reset scrolling state after animation
    setTimeout(() => {
      isScrolling.value = false;
    }, 1000);
  };

  return {
    isScrolling,
    scrollTo,
  };
}
