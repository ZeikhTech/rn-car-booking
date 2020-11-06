import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import Images from '../Constants/Images';

function Search(props) {
  const {placeholder, value} = props;
  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
        />
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            source={Images.SearchIcon}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 25,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  input: {
    flex: 1,
    padding: 0,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default Search;
