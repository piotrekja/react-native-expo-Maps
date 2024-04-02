import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { LocationType } from "../types/locations"

interface PressType {
  onPress: (() => void)
}
type LocationProps = PressType & LocationType

export const LocationDescription = ({ name, address, openHours, onPress }: LocationProps) => {
  return (
    <View style={styles.card}>
      <Image source={require('../assets/icon.png')} style={styles.image} />
      <View style={styles.rightContainer} >
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity style={styles.close} onPress={onPress}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.address}>ul. {address}</Text>
        <View style={styles.footer}>
          <Text>czynne: {openHours}</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    left: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: 90,
    aspectRatio: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    marginBottom: 5,
    fontSize: 16,
  },
  close: {
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 30,
    padding: 4
  },
  address: {
    fontSize: 15,
    color: 'gray',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
});