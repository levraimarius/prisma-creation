export interface CityMetadata {
  region: string;
  city: string;
  coordinates: string;
  latitude: number;
  longitude: number;
  department: string;
  url: string;
}

export interface CityMetadataWithSEO extends CityMetadata {
  title: string;
  description: string;
  image?: string;
}

export type Department = "oise" | "somme" | "aisne";
