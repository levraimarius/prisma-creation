export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface CityData {
  city: string;
  displayName: string;
  region: string;
  department: string;
  coordinates: Coordinates;
}

export interface CityRoute {
  path: string;
  name: string;
}

export interface City {
  name: string;
  region: string;
  department: string;
  path: string;
}

export interface CityMetadata extends CityData {
  url: string;
  title: string;
  description: string;
  image?: string;
}
