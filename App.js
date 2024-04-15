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
          coordinate={{ latitude: 41.954111, longitude: -87.79675 }}
          title={"Dest 1"}
          description={"Nesewin sculpture"}
          onPress={() => {
            setSelectedDestination({ title: "Nesewin sculpture", description: "We can also put audio link tour here ", imageUri: 'https://picsum.photos/id/237/200/300' });
            setPopupVisible(true);
          }}
        />
        
        {/* Second Destination Marker */}
        <Marker
          coordinate={{ latitude: 41.953722, longitude: -87.796805 }} // Adjust coordinates as needed
          title={"Dest 2"}
          description={"Indigenous connections"}
          onPress={() => {
            setSelectedDestination({ title: "Dest 2", description: "Indigenous connections", imageUri: 'https://picsum.photos/id/237/200/300' });
            setPopupVisible(true);
          }}
        />

        {/* Third Destination Marker */}
        <Marker
          coordinate={{ latitude: 41.952917, longitude: -87.797583 }} // Adjust coordinates as needed
          title={"Dest 3"}
          description={"The community saves a treasure"}
          onPress={() => {
            setSelectedDestination({ title: "Dest 3", description: "The community saves a treasure", imageUri: 'https://picsum.photos/200/300' });
            setPopupVisible(true);
          }}
        />

        {/* Fourth Destination Marker */}
        <Marker
          coordinate={{ latitude: 41.952972, longitude: -87.800167 }} // Adjust coordinates as needed
          title={"Dest 4"}
          description={"Time travel to the future "}
          onPress={() => {
            setSelectedDestination({ title: "Dest 4", description: "Time travel to the future ", imageUri: 'https://picsum.photos/200/300' });
            setPopupVisible(true);
          }}
        />

        {/* Fifth Destination Marker */}
        <Marker
          coordinate={{ latitude: 41.953306, longitude: -87.801472 }} // Adjust coordinates as needed
          title={"Dest 5"}
          description={"The life above, below, and around you"}
          onPress={() => {
            setSelectedDestination({ title: "Dest 5", description: "The life above, below, and around you", imageUri: 'https://picsum.photos/200/300' });
            setPopupVisible(true);
          }}
        />

        {/* Sixth Destination Marker */}
        <Marker
          coordinate={{ latitude: 41.953194, longitude: -87.804278 }} // Adjust coordinates as needed
          title={"Dest 6"}
          description={"Time travel to the distant past"}
          onPress={() => {
            setSelectedDestination({ title: "Dest 6", description: "Time travel to the distant past", imageUri: 'https://picsum.photos/200/300' });
            setPopupVisible(true);
          }}
        />

        {/* Seventh Destination Marker */}
        <Marker
          coordinate={{ latitude: 41.953972, longitude: -87.802056 }} // Adjust coordinates as needed
          title={"Dest 7"}
          description={"Bringing back an oak savannah"}
          onPress={() => {
            setSelectedDestination({ title: "Dest 7", description: "Bringing back an oak savannah", imageUri: 'https://picsum.photos/200/300' });
            setPopupVisible(true);
          }}
        />

        {/* Eighth Destination Marker */}
        <Marker
          coordinate={{ latitude: 41.954111, longitude: -87.801472 }} // Adjust coordinates as needed
          title={"Dest 8"}
          description={"Going with the flow"}
          onPress={() => {
            setSelectedDestination({ title: "Going with the flow", description: "Going with the flow", imageUri: 'https://picsum.photos/200/300' });
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
    padding: 30, // Adjust the padding to make the popup bigger
    borderRadius: 10,
    elevation: 5,
    width: 300, // Adjust the width to make the popup wider
    height: 500 // Adjust the height to make the popup taller
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

