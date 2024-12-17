import { computed } from "vue";
import { useRoute } from "vue-router";
import { getCityMetadata } from "../utils/cityMetadata";

export function useCityMetadata() {
  const route = useRoute();

  const citySlug = computed(() => {
    const pathParts = route.path.split("/");
    return pathParts[pathParts.length - 1] || "";
  });

  const metadata = computed(() => getCityMetadata(citySlug.value));
  const cityName = computed(() => metadata.value.displayName);

  return {
    metadata,
    cityName,
  };
}
