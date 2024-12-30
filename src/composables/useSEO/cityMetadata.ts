import type { CityData } from "../../types/city";

export function generateCityMetadata(city: CityData) {
  const baseUrl = "https://prismacreation.fr";
  const citySlug = city.city.toLowerCase().replace(/ /g, "-");
  const path = `/nos-agences/${city.region}/${city.department}/${citySlug}`;

  return {
    title: `Agence Web à ${city.displayName} - Création de Site Internet`,
    description: `Prisma Création, votre agence web à ${city.displayName}. Création de sites internet professionnels, développement sur mesure et référencement local. Experts en création de site vitrine et e-commerce à ${city.displayName}.`,
    url: `${baseUrl}${path}`,
    region: city.region,
    city: city.displayName,
    coordinates: `${city.coordinates.latitude};${city.coordinates.longitude}`,
    latitude: city.coordinates.latitude,
    longitude: city.coordinates.longitude,
  };
}
