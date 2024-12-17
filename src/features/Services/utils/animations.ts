import anime from "animejs";
import type { AnimeParams } from "animejs";

export const animateCardsTransition = (
  cards: Element[],
  entering: boolean,
  staggerDelay: number = 50
): anime.AnimeInstance => {
  const baseAnimation: AnimeParams = {
    targets: cards,
    duration: 600,
    easing: "cubicBezier(0.4, 0, 0.2, 1)",
    delay: anime.stagger(staggerDelay),
  };

  if (entering) {
    return anime({
      ...baseAnimation,
      translateY: [50, 0],
      opacity: [0, 1],
      scale: [0.9, 1],
      rotateX: ["10deg", "0deg"],
    });
  }

  return anime({
    ...baseAnimation,
    translateY: [0, -50],
    opacity: [1, 0],
    scale: [1, 0.9],
    rotateX: ["0deg", "-10deg"],
  });
};
