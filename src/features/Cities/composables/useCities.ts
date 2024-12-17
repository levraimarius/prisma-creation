import { computed } from "vue";
import { cities } from "../../../router/cities";
import { extractCityInfo, shuffleArray } from "../utils";
import type { City } from "../types";

export function useCities(limit: number = 10) {
  const cityRoutes = cities.map((city) => ({
    path: `/nos-agences/${city.region}/${city.department}/${city.city.toLowerCase().replace(/ /g, "-")}`,
    name: `AgenceWeb${city.city.replace(/[^a-zA-Z]/g, "")}`,
  }));

  const availableCities = computed(() => {
    const validCities = cityRoutes
      .map(extractCityInfo)
      .filter((city): city is City => city !== null);

    return shuffleArray(validCities).slice(0, limit);
  });

  return {
    cities: availableCities,
  };
}
