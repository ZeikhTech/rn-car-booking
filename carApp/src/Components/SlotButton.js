import React, {useState, useRef} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Colors from '../Constants/Colors';

function SlotButton({onPress, text}) {
  const [status, setStatus] = useState(false);

  const handlePress = () => {
    onPress(!status);
    setStatus(!status);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animatable.View
        style={{
          height: 30,
          width: 75,
          borderWidth: 1,
          borderColor: Colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: status ? Colors.primary : Colors.white,
          borderRadius: 20,
        }}
        animation="bounceIn">
        <Text
          style={{
            fontSize: 15,
            color: status ? Colors.white : Colors.primary,
          }}>
          {text}
        </Text>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}

export default SlotButton;
