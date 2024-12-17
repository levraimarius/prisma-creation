import type { SEOMetadata } from "./types";

export function generateMetaTags(metadata: SEOMetadata) {
  const title = `${metadata.title} | Prisma Création`;
  const image = metadata.image || "/prismacreation.png";
  const url = metadata.url || "https://prismacreation.fr";

  return [
    { name: "description", content: metadata.description },
    { name: "robots", content: "index, follow" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: metadata.description },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:site_name", content: "Prisma Création" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: metadata.description },
    { name: "twitter:image", content: image },

    // Local SEO
    { name: "geo.region", content: metadata.region },
    { name: "geo.placename", content: metadata.city },
    { name: "geo.position", content: metadata.coordinates },
  ];
}
