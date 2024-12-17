import type { SEOMetadata } from "./types";

interface CityMetadata {
  [key: string]: Omit<SEOMetadata, "title" | "description">;
}

export const cityMetadata: CityMetadata = {
  beauvais: {
    region: "Hauts-de-France",
    city: "Beauvais",
    coordinates: "49.4295;2.0809",
    latitude: 49.4295,
    longitude: 2.0809,
    url: "https://prismacreation.fr/nos-agences/hauts-de-france/oise/beauvais",
  },
  compiegne: {
    region: "Hauts-de-France",
    city: "Compiègne",
    coordinates: "49.4179;2.8260",
    latitude: 49.4179,
    longitude: 2.826,
    url: "https://prismacreation.fr/nos-agences/hauts-de-france/oise/compiegne",
  },
  // Add other cities...
};

export function getCityMetadata(citySlug: string): SEOMetadata {
  const metadata = cityMetadata[citySlug];
  if (!metadata) {
    throw new Error(`No metadata found for city: ${citySlug}`);
  }

  return {
    ...metadata,
    title: `Agence Web à ${metadata.city} - Création de Site Internet`,
    description: `Prisma Création, votre agence web à ${metadata.city}. Création de sites internet professionnels, développement sur mesure et référencement local. Experts en création de site vitrine et e-commerce à ${metadata.city}.`,
  };
}
