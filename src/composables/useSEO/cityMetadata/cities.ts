import type { CityMetadata } from "./types";

// Helper function to create city metadata
function createCityMetadata(
  city: string,
  latitude: number,
  longitude: number,
  department: string
): CityMetadata {
  const coordinates = `${latitude};${longitude}`;
  const slug = city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-");

  return {
    region: "Hauts-de-France",
    city,
    coordinates,
    latitude,
    longitude,
    department,
    url: `https://prismacreation.fr/nos-agences/hauts-de-france/${department}/${slug}`,
  };
}

export const cityMetadataMap: Record<string, CityMetadata> = {
  // Oise
  beauvais: createCityMetadata("Beauvais", 49.4295, 2.0809, "oise"),
  compiegne: createCityMetadata("Compiègne", 49.4179, 2.826, "oise"),
  creil: createCityMetadata("Creil", 49.2601, 2.4764, "oise"),
  "nogent-sur-oise": createCityMetadata(
    "Nogent-sur-Oise",
    49.2747,
    2.4739,
    "oise"
  ),
  senlis: createCityMetadata("Senlis", 49.2067, 2.5906, "oise"),
  montataire: createCityMetadata("Montataire", 49.2567, 2.4419, "oise"),
  clermont: createCityMetadata("Clermont", 49.3789, 2.4119, "oise"),
  meru: createCityMetadata("Méru", 49.2367, 2.1375, "oise"),
  chantilly: createCityMetadata("Chantilly", 49.1947, 2.4856, "oise"),
  gouvieux: createCityMetadata("Gouvieux", 49.1897, 2.4183, "oise"),
  "pont-sainte-maxence": createCityMetadata(
    "Pont-Sainte-Maxence",
    49.3006,
    2.6044,
    "oise"
  ),
  "crepy-en-valois": createCityMetadata(
    "Crépy-en-Valois",
    49.2353,
    2.8897,
    "oise"
  ),
  liancourt: createCityMetadata("Liancourt", 49.3106, 2.4669, "oise"),

  // Somme
  amiens: createCityMetadata("Amiens", 49.8942, 2.2957, "somme"),
  abbeville: createCityMetadata("Abbeville", 50.1053, 1.8339, "somme"),
  peronne: createCityMetadata("Péronne", 49.9297, 2.9328, "somme"),
  albert: createCityMetadata("Albert", 50.0033, 2.6514, "somme"),
  doullens: createCityMetadata("Doullens", 50.1567, 2.3428, "somme"),
  rivery: createCityMetadata("Rivery", 49.9089, 2.3089, "somme"),
  longueau: createCityMetadata("Longueau", 49.8789, 2.3361, "somme"),
  ham: createCityMetadata("Ham", 49.7456, 3.0714, "somme"),

  // Aisne
  "saint-quentin": createCityMetadata(
    "Saint-Quentin",
    49.8467,
    3.2867,
    "aisne"
  ),
  soissons: createCityMetadata("Soissons", 49.3817, 3.3233, "aisne"),
  laon: createCityMetadata("Laon", 49.5647, 3.6244, "aisne"),
  "chateau-thierry": createCityMetadata(
    "Château-Thierry",
    49.0467,
    3.4031,
    "aisne"
  ),
  tergnier: createCityMetadata("Tergnier", 49.6553, 3.2897, "aisne"),
  chauny: createCityMetadata("Chauny", 49.6156, 3.2194, "aisne"),
  "villeneuve-saint-germain": createCityMetadata(
    "Villeneuve-Saint-Germain",
    49.3697,
    3.3453,
    "aisne"
  ),
  hirson: createCityMetadata("Hirson", 49.9189, 4.0861, "aisne"),
  "fere-en-tardenois": createCityMetadata(
    "Fère-en-Tardenois",
    49.1997,
    3.5397,
    "aisne"
  ),
};
