import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Images from '../Constants/Images';
import Colors from '../Constants/Colors';
import Accordion from '../Components/Accordion';
import Button from '../Components/Button';

function ServiceScreen(props) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={{position: 'absolute', left: 0}}>
            <TouchableOpacity onPress={props.onBackPress}>
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
            source={Images.Step2Icon}
            style={styles.step}
          />
        </View>
        <View style={styles.serviceContainer}>
          <Accordion />
        </View>
        <View style={styles.pagination}>
          <Text style={{color: 'gray'}}>2 of 6</Text>
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
  serviceContainer: {
    flex: 0.75,
    top: 30,
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

export default ServiceScreen;
