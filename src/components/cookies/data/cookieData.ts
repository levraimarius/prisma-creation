import type { CookieCategory } from "../types";

export const cookieCategories: CookieCategory[] = [
  {
    name: "Nécessaires",
    description: "Cookies essentiels au fonctionnement du site.",
    cookies: [
      {
        name: "cookie-consent",
        type: "necessary",
        purpose: "Enregistre vos préférences concernant les cookies",
        provider: "Prisma Création",
        duration: "1 an",
      },
    ],
  },
  {
    name: "Fonctionnels",
    description: "Cookies améliorant votre expérience utilisateur.",
    cookies: [
      {
        name: "ui-preferences",
        type: "functional",
        purpose: "Mémorise vos préférences d'interface",
        provider: "Prisma Création",
        duration: "30 jours",
      },
    ],
  },
  {
    name: "Analytiques",
    description: "Cookies nous aidant à comprendre l'utilisation du site.",
    cookies: [
      {
        name: "_ga",
        type: "analytics",
        purpose: "Mesure l'audience du site",
        provider: "Google Analytics",
        duration: "2 ans",
      },
    ],
  },
];
