import type { City, CityRoute } from "../types";

export function extractCityInfo(route: CityRoute): City | null {
  const pathParts = route.path.split("/");
  if (pathParts.length !== 5) return null;

  return {
    name: formatCityName(pathParts[4]),
    region: pathParts[2].replace(/-/g, " "),
    department: pathParts[3],
    path: route.path,
  };
}

export function formatCityName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
