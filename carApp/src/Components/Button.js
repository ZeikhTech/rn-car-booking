import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

// import Colors from '../../Constants/Colors';
import Images from '../Constants/Images';

const {width, height} = Dimensions.get('window');

export default (props) => {
  const {title, onPress, disabled, wideButton = false} = props;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}>
      <View style={styles.view}>
        <Text style={[styles.text]}>{title}</Text>
      </View>
      <Image
        resizeMode="contain"
        style={[
          disabled
            ? styles.disableImg
            : wideButton
            ? styles.button1
            : styles.bgImage,
        ]}
        source={
          disabled
            ? Images.Disable
            : wideButton
            ? Images.Button1
            : Images.Button
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  bgImage: {
    width: 150,
    height: 50,
  },
  button1: {
    width: 200,
    height: 50,
  },
  disableImg: {
    width: 200,
    height: 50,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
