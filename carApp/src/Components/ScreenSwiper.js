import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import AppointmentScreen from '../Screens/AppointmentScreen';
import ServiceScreen from '../Screens/ServiceScreen';
import MapScreen from '../Screens/MapScreen';
import CalendarScreen from '../Screens/CalendarScreen';
import AdditionalScreen from '../Screens/AdditionalScreen';
import SummaryScreen from '../Screens/SummaryScreen';
import SuccessScreen from '../Screens/SuccessScreen';

import Button from '../Components/Button';

const ScreenSwiper = (props) => {
  const [index, setIndex] = useState(1);

  const handlePress = () => {
    swiperRef.current.scrollBy(index);
  };

  const swiperRef = React.createRef();

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        index={0}
        loop={false}
        renderPagination={() => {}}
        scrollEnabled={false}
        pagingEnabled={true}>
        <AppointmentScreen onPress={handlePress} />
        <ServiceScreen onPress={handlePress} />
        <MapScreen onPress={handlePress} />
        <CalendarScreen onPress={handlePress} />
        <AdditionalScreen onPress={handlePress} />
        <SummaryScreen onPress={handlePress} />
        <SuccessScreen />
      </Swiper>
    </View>
  );
};

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
  },
  dotStyle: {
    marginBottom: 80,
  },
  dots: {
    height: height * 0.02,
    width: width * 0.07,
  },
});

export default ScreenSwiper;
