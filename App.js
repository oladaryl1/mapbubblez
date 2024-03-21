import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const INITIAL_REGION = {
  latitude: 41.9534,
  longitude: -87.8010,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

export default function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
      >
        {/* First Destination Marker */}
        <Marker
          coordinate={{ latitude: 41.9534, longitude: -87.8010 }}
          title={"Dest 1"}
          description={"This is the location you specified"}
          onPress={() => {
            setSelectedDestination({ title: "Dest 1", description: "This is the location you specified", imageUri: 'https://picsum.photos/200/300' });
            setPopupVisible(true);
          }}
        />
        
        {/* Second Destination Marker */}
        <Marker
          coordinate={{ latitude: 41.95333, longitude: -87.80161 }} // Adjust coordinates as needed
          title={"Dest 2"}
          description={"This is another destination"}
          onPress={() => {
            setSelectedDestination({ title: "Dest 2", description: "This is another destination", imageUri: 'https://picsum.photos/id/237/200/300' });
            setPopupVisible(true);
          }}
        />
      </MapView>

      {popupVisible && selectedDestination &&
        <TouchableOpacity
          style={styles.popup}
          activeOpacity={1}
          onPress={() => setPopupVisible(false)}
        >
          <View style={styles.popupContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setPopupVisible(false)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image
              source={{ uri: selectedDestination.imageUri }} // Use selected destination's image URI
              style={styles.image}
            />
            <Text>{selectedDestination.title}</Text>
            <Text>{selectedDestination.description}</Text>
          </View>
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  popup: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'black',
  },
});
