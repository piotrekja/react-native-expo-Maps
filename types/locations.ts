export interface LocationType {
  latitude?: number;
  longitude?: number;
  name?: string;
  address?: string;
  openHours?: string
}

export interface LocationsType {
  cityName: string;
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
  locations: LocationType[]
}
