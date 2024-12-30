import type { SEOMetadata } from "./types";

export function generateLocalBusinessSchema(metadata: SEOMetadata) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": metadata.url,
    name: "Prisma Création",
    image: metadata.image || "/prismacreation.png",
    description: metadata.description,
    url: metadata.url,
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
    sameAs: [
      "https://www.linkedin.com/company/prisma-creation",
      "https://www.facebook.com/prismacreation",
    ],
  };
}

export function generateBreadcrumbSchema(metadata: SEOMetadata) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://prismacreation.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nos agences",
        item: "https://prismacreation.fr/nos-agences",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: metadata.city,
        item: metadata.url,
      },
    ],
  };
}
