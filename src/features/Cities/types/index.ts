export interface City {
  name: string;
  region: string;
  department: string;
  path: string;
}

export interface CityRoute {
  path: string;
  name: string;
}

export interface CityData {
  city: string;
  displayName: string;
  region: string;
  department: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
