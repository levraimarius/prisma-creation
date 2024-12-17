import { useHead, useSeoMeta } from "@unhead/vue";
import type { SEOMetadata } from "./types";
import { generateLocalBusinessSchema } from "./schema";

export function useSEO(metadata: SEOMetadata) {
  const title = `${metadata.title} | Prisma Création`;
  const url = metadata.url || "https://prismacreation.fr";
  const image = metadata.image || "/prismacreation.png";

  useSeoMeta({
    title,
    ogTitle: title,
    description: metadata.description,
    ogDescription: metadata.description,
    ogImage: image,
    ogUrl: url,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: metadata.description,
    twitterImage: image,
  });

  useHead({
    link: [{ rel: "canonical", href: url }],
    meta: [
      { name: "geo.region", content: metadata.region },
      { name: "geo.placename", content: metadata.city },
      { name: "geo.position", content: metadata.coordinates },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(generateLocalBusinessSchema(metadata)),
      },
    ],
  });
}

export type { SEOMetadata };
