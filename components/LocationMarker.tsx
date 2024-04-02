import { LocationType } from "../types/locations"
import { Marker } from "react-native-maps"
import { Entypo } from '@expo/vector-icons';

interface PressType {
  onPress: (() => void)
}
type MarkerProps = PressType & LocationType

export const LocationMarker = ({ latitude, longitude, name, onPress }: MarkerProps) => {
  return (
    latitude && longitude && (
      <Marker coordinate={{ latitude, longitude }} title={name} onPress={onPress}>
        <Entypo name="shop" size={35} color="#777" />
      </Marker>
    )
  )
}