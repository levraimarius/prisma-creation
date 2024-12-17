import type { SEOMetadata } from "./types";

export function generateLocalBusinessSchema(metadata: SEOMetadata) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": metadata.url || "https://prismacreation.fr",
    name: "Prisma Création",
    image: metadata.image || "/prismacreation.png",
    description: metadata.description,
    url: metadata.url || "https://prismacreation.fr",
    telephone: "+33123456789",
    address: {
      "@type": "PostalAddress",
      addressLocality: metadata.city,
      addressRegion: metadata.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: metadata.latitude,
      longitude: metadata.longitude,
    },
    areaServed: {
      "@type": "City",
      name: metadata.city,
    },
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}
