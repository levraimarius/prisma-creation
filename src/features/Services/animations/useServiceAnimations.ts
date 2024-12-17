import { ref } from "vue";
import anime from "animejs";
import type { AnimeInstance, AnimeParams } from "animejs";

export function useServiceAnimations() {
  const isAnimating = ref(false);

  const animateCards = (
    elements: Element[],
    direction: "enter" | "leave"
  ): Promise<void> => {
    const isEntering = direction === "enter";
    const duration = 600;
    const staggerDelay = 100;

    const animation: AnimeParams = {
      targets: elements,
      duration,
      easing: "cubicBezier(0.4, 0, 0.2, 1)",
      delay: anime.stagger(staggerDelay),
      opacity: isEntering ? [0, 1] : [1, 0],
      translateY: isEntering ? [30, 0] : [0, -30],
      scale: isEntering ? [0.95, 1] : [1, 0.95],
    };

    return new Promise((resolve) => {
      isAnimating.value = true;
      anime({
        ...animation,
        complete: () => {
          isAnimating.value = false;
          resolve();
        },
      });
    });
  };

  return {
    isAnimating,
    animateCards,
  };
}
