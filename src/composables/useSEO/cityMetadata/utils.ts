import { cityMetadataMap } from "./cities";
import type { CityMetadata, CityMetadataWithSEO } from "./types";

export function normalizeSlug(slug: string): string {
  if (!slug) return "";

  return slug
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .trim();
}

export function getCityMetadata(citySlug: string): CityMetadataWithSEO {
  if (!citySlug) {
    console.warn("No city slug provided. Using default metadata.");
    return generateDefaultMetadata("beauvais");
  }

  const normalizedSlug = normalizeSlug(citySlug);
  const metadata = cityMetadataMap[normalizedSlug];

  if (!metadata) {
    console.warn(
      `No metadata found for city: ${citySlug}. Using fallback metadata.`
    );
    return generateFallbackMetadata(citySlug);
  }

  return generateMetadataWithSEO(metadata);
}

function generateFallbackMetadata(citySlug: string): CityMetadataWithSEO {
  const cityName = citySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Try to determine department from URL structure
  const urlParts = window.location.pathname.split("/");
  const department = urlParts[urlParts.indexOf("nos-agences") + 2] || "oise";

  return {
    region: "Hauts-de-France",
    city: cityName,
    coordinates: "49.4295;2.0809", // Default to Beauvais coordinates
    latitude: 49.4295,
    longitude: 2.0809,
    department,
    url: window.location.href,
    title: `Agence Web à ${cityName} - Création de Site Internet`,
    description: `Prisma Création, votre agence web à ${cityName}. Création de sites internet professionnels, développement sur mesure et référencement local. Experts en création de site vitrine et e-commerce à ${cityName}.`,
    image: "/prismacreation.png",
  };
}

function generateDefaultMetadata(defaultCity: string): CityMetadataWithSEO {
  const metadata = cityMetadataMap[defaultCity];
  if (!metadata) {
    throw new Error("Default city metadata not found");
  }
  return generateMetadataWithSEO(metadata);
}

function generateMetadataWithSEO(metadata: CityMetadata): CityMetadataWithSEO {
  return {
    ...metadata,
    title: `Agence Web à ${metadata.city} - Création de Site Internet`,
    description: `Prisma Création, votre agence web à ${metadata.city}. Création de sites internet professionnels, développement sur mesure et référencement local. Experts en création de site vitrine et e-commerce à ${metadata.city}.`,
    image: "/prismacreation.png",
  };
}
