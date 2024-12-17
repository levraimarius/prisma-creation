import type { SEOMetadata } from "./types";

/**
 * Formats SEO metadata for a specific city
 */
export function formatCityMetadata(
  city: string,
  region: string,
  coordinates: string,
  latitude: number,
  longitude: number
): SEOMetadata {
  return {
    title: `Agence Web à ${city} - Création de Site Internet`,
    description: `Prisma Création, votre agence web à ${city}. Création de sites internet professionnels, développement sur mesure et référencement local. Experts en création de site vitrine et e-commerce à ${city}.`,
    region,
    city,
    coordinates,
    latitude,
    longitude,
  };
}

/**
 * Validates SEO metadata
 */
export function validateMetadata(metadata: SEOMetadata): boolean {
  return !!(
    metadata.title &&
    metadata.description &&
    metadata.city &&
    metadata.region &&
    metadata.coordinates &&
    typeof metadata.latitude === "number" &&
    typeof metadata.longitude === "number"
  );
}
