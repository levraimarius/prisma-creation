import { ref } from "vue";
import anime from "animejs";
import type { AnimationConfig } from "../types";

export function useServiceAnimations() {
  const isAnimating = ref(false);

  const defaultConfig: AnimationConfig = {
    duration: 600,
    easing: "cubicBezier(0.4, 0, 0.2, 1)",
    delay: (_, index) => index * 50,
  };

  const onBeforeEnter = (el: Element) => {
    const card = el as HTMLElement;
    card.style.opacity = "0";
    card.style.transform = "scale(0.95) translateY(30px)";
  };

  const onEnter = (el: Element, done: () => void) => {
    const card = el as HTMLElement;
    const index = parseInt(card.dataset.index || "0", 10);

    anime({
      targets: card,
      opacity: [0, 1],
      scale: [0.95, 1],
      translateY: [30, 0],
      duration: defaultConfig.duration,
      easing: defaultConfig.easing,
      delay:
        typeof defaultConfig.delay === "function"
          ? defaultConfig.delay(el, index)
          : defaultConfig.delay,
      complete: done,
    });
  };

  const onLeave = (el: Element, done: () => void) => {
    const card = el as HTMLElement;
    const index = parseInt(card.dataset.index || "0", 10);

    anime({
      targets: card,
      opacity: 0,
      scale: 0.95,
      translateY: -30,
      duration: defaultConfig.duration * 0.66,
      easing: defaultConfig.easing,
      delay:
        typeof defaultConfig.delay === "function"
          ? defaultConfig.delay(el, index) * 0.5
          : defaultConfig.delay,
      complete: done,
    });
  };

  return {
    isAnimating,
    onBeforeEnter,
    onEnter,
    onLeave,
  };
}
