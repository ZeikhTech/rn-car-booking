import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import Images from '../Constants/Images';
import Colors from '../Constants/Colors';

const ScreenSwiper = ({navigation}) => {
  const [index, setIndex] = useState(1);

  const onBackPress = () => {
    return navigation.goBack();
  };

  const pagination = () => {
    let total = 6;
  };

  const handlePress = (i) => {
    swiperRef.current.scrollBy(index, {animated: true});
    // setIndex(index + 1 );
  };

  const swiperRef = React.createRef();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>MAZDA3</Text>
      </View>
      <Swiper ref={swiperRef} loop={false}>
        <Image source={Images.Car} resizeMode="cover" style={styles.slide} />
      </Swiper>
    </View>
  );
};

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: -25,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
  slide: {
    width: '100%',
    left: 10,
    backgroundColor: 'transparent',
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
