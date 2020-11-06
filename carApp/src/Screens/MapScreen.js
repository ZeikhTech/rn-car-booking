import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

import Images from '../Constants/Images';
import Button from '../Components/Button';
import SearchBar from '../Components/Search';

function MapScreen(props) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={{position: 'absolute', left: 0}}>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={Images.BackIcon}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Appointment Booking</Text>
          </View>
        </View>
        <View style={styles.stepContainer}>
          <Image
            resizeMode="contain"
            source={Images.Step3Icon}
            style={styles.step}
          />
        </View>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 21.520272,
              longitude: 39.230763,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{latitude: 21.520962, longitude: 39.230753}}
              image={Images.PinIcon}
              style={{width: 30, height: 30}}
            />
          </MapView>
          <SearchBar placeholder="Search for a city or location" />
        </View>
        <View style={styles.pagination}>
          <Text style={{color: 'gray'}}>3 of 6</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="continue" onPress={props.onPress} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  titleContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  stepContainer: {
    top: 30,
    alignItems: 'center',
  },
  step: {
    width: '90%',
    height: 50,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    top: 140,
    height: 450,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  pagination: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 90,
  },
  buttonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
  },
});

export default MapScreen;
