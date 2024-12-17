import { computed } from "vue";
import { useRoute } from "vue-router";
import { getCityMetadata } from "../utils/cityMetadata";
import { cities } from "../../../router/cities";
import type { CityMetadata } from "../../../types/city";

export function useCityMetadata() {
  const route = useRoute();

  const citySlug = computed(() => {
    const pathParts = route.path.split("/");
    return pathParts[pathParts.length - 1] || "";
  });

  const metadata = computed<CityMetadata>(() =>
    getCityMetadata(citySlug.value, cities)
  );
  const cityName = computed(() => metadata.value.displayName);

  return {
    metadata,
    cityName,
  };
}
