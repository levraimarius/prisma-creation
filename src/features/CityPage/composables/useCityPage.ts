import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { cities } from "../../../router/cities";
import { slugify } from "../../../utils/stringUtils";

export function useCityPage() {
  const route = useRoute();

  const cityInfo = computed(() => {
    const urlPath = route.path.split("/");
    const urlCitySlug = urlPath[urlPath.length - 1];

    return cities.find((city) => slugify(city.city) === urlCitySlug);
  });

  const cityName = computed(() => cityInfo.value?.displayName || "");

  onMounted(() => {
    if (cityName.value) {
      document.title = `Prisma Création | Agence Web à ${cityName.value} - Votre site internet à prix réduit`;
    }
  });

  return {
    cityName,
  };
}
