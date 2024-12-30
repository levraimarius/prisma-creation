import type { CityData } from "../../types/city";

export function generateCitySchema(city: CityData) {
  const baseUrl = "https://prismacreation.fr";
  const citySlug = city.city.toLowerCase().replace(/ /g, "-");
  const path = `/nos-agences/${city.region}/${city.department}/${citySlug}`;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}${path}`,
    name: `Prisma Création - Agence Web ${city.displayName}`,
    description: `Agence web à ${city.displayName} spécialisée dans la création de sites internet professionnels`,
    url: `${baseUrl}${path}`,
    areaServed: {
      "@type": "City",
      name: city.displayName,
      "@id": `https://www.wikidata.org/wiki/${city.displayName}`,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.coordinates.latitude,
      longitude: city.coordinates.longitude,
    },
  };
}
