import type { CityData, CityMetadata } from "../types";
import { cities } from "../data/cities";

export function generateCityMetadata(cityData: CityData): CityMetadata {
  const { city, displayName, region, department, coordinates } = cityData;
  const url = `https://prismacreation.fr/nos-agences/${region}/${department}/${city}`;

  return {
    ...cityData,
    url,
    title: `Agence Web à ${displayName} - Création de Site Internet`,
    description: `Prisma Création, votre agence web à ${displayName}. Création de sites internet professionnels, développement sur mesure et référencement local. Experts en création de site vitrine et e-commerce à ${displayName}.`,
    image: "/prismacreation.png",
  };
}

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((city) => city.city === slug);
}

export function getCityMetadata(slug: string): CityMetadata {
  const cityData = getCityBySlug(slug);

  if (!cityData) {
    // Return fallback metadata for unknown cities
    return generateFallbackMetadata(slug);
  }

  return generateCityMetadata(cityData);
}

function generateFallbackMetadata(slug: string): CityMetadata {
  const displayName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const fallbackData: CityData = {
    city: slug,
    displayName,
    region: "hauts-de-france",
    department: "oise", // Default department
    coordinates: { latitude: 49.4295, longitude: 2.0809 }, // Beauvais coordinates as default
  };

  return generateCityMetadata(fallbackData);
}
