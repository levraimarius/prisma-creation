import type { CityData } from "../../types/city";

export function generateSitemapEntry(city: CityData) {
  const baseUrl = "https://prismacreation.fr";
  const citySlug = city.city.toLowerCase().replace(/ /g, "-");
  const path = `/nos-agences/${city.region}/${city.department}/${citySlug}`;

  return {
    loc: `${baseUrl}${path}`,
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.8",
  };
}

export function generateCitySitemap(cities: CityData[]) {
  const entries = cities.map(generateSitemapEntry);

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${entries
    .map(
      (entry) => `
  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return xmlContent;
}
