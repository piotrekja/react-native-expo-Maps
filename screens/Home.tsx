import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native"
import MapView from 'react-native-maps';
import locations from "./../assets/data/locations.json"
import { LocationType, LocationsType } from "../types/locations";
import { LocationMarker } from "../components/LocationMarker";
import { LocationDescription } from "../components/LocationDescription";


export const Home = () => {
  const [selectedCity, setSelectedCity] = useState<LocationsType>(locations[0])
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null)

  const { cityName, latitude, longitude, latitudeDelta, longitudeDelta } = selectedCity

  return (
    <View style={{ paddingTop: 20 }}>
      <ScrollView horizontal={true} style={styles.buttonsContainer}
        showsHorizontalScrollIndicator={false}
      >
        {locations.map(location =>
          <TouchableOpacity key={location.cityName}
            style={checkItem(cityName === location.cityName)}
            onPress={() => { setSelectedCity(location); setSelectedLocation(null) }}>
            <Text style={styles.locationText}>
              {location.cityName}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      <View style={styles.mapContainer} key={longitude}>
        <MapView style={styles.map}
          initialRegion={{ latitude, longitude, latitudeDelta, longitudeDelta }}>
          {selectedCity.locations.map((location) =>
            <LocationMarker key={location.latitude} {...location}
              onPress={() => setSelectedLocation(location)}
            />
          )}
        </MapView>
        {selectedLocation &&
          <LocationDescription {...selectedLocation}
            onPress={() => setSelectedLocation(null)}
          />}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonsContainer: {
    paddingLeft: 10,
    marginBottom: 10,
    flexGrow: 0
  },
  map: {
    width: '100%',
    height: '100%'
  },
  locationText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
  mapContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    height: '88%'
  }
})
const checkItem = (checked: boolean) => ({
  marginRight: 8,
  borderRadius: 50,
  padding: 8,
  paddingHorizontal: 15,
  backgroundColor: checked ? 'hsl(212, 97%, 40%)' : 'hsl(212, 96%, 66%)'
})