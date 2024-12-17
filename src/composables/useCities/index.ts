import { computed } from "vue";
import { cities } from "../../router/cities";
import { slugify } from "../../utils/stringUtils";
import type { City } from "./types";

export function useCities(limit: number = 10) {
  const availableCities = computed(() => {
    const cityList = cities.map((city) => ({
      name: city.displayName,
      region: city.region,
      department: city.department,
      path: `/nos-agences/${slugify(city.region)}/${slugify(city.department)}/${slugify(city.city)}`,
    }));

    // Shuffle and limit the results
    return [...cityList].sort(() => Math.random() - 0.5).slice(0, limit);
  });

  return {
    cities: availableCities,
  };
}

export type { City } from "./types";
