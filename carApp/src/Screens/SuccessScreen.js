import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Button from '../Components/Button';
import Images from '../Constants/Images';

function SuccessScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{
          width: 120,
          height: 120,
        }}
        source={Images.Done}
      />
      <Text style={{marginVertical: 40}}>Booking Successfuly</Text>
      <Button
        title="See all appointments"
        onPress={props.onPress}
        disabled={true}
        wideButton={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default SuccessScreen;
