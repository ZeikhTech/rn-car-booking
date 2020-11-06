import {Item} from 'native-base';
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Images from '../Constants/Images';
import Button from '../Components/Button';
import Colors from '../Constants/Colors';

class AdditionalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsList: [
        {
          _id: 1,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 2,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 3,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 4,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 5,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 6,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 7,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 8,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 9,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 10,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 11,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 12,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 13,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 14,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 15,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 16,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 17,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 18,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 19,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 20,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 21,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 22,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 23,
          name: 'Service Name (2000SR)',
        },
        {
          _id: 24,
          name: 'Service Name (2000SR)',
        },
      ],
    };
  }
  componentDidMount() {
    let arr = this.state.buttonsList.map((item, index) => {
      item.isSelected = false;
      return {...item};
    });
    this.setState({buttonsList: arr});
    // console.log(arr);
  }
  selectorHandler = (ind) => {
    const dummyData = this.state.buttonsList;
    let arr = dummyData.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      console.log(this.state.buttonsList[index].name);
      return {...item};
    });

    this.setState({buttonsList: arr});
  };

  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={{position: 'absolute', left: 10}}>
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
              source={Images.Step5Icon}
              style={styles.step}
            />
          </View>
          <View style={styles.MainCover}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.main}>
                {this.state.buttonsList.map((item, i) => {
                  return (
                    <View
                      key={i}
                      style={{width: '50%', flexDirection: 'column'}}>
                      <View style={styles.btnCover}>
                        <TouchableOpacity
                          key={i}
                          onPress={() => this.selectorHandler(i)}
                          style={
                            (styles.btnStyle,
                            item.isSelected ? styles.btnBg : styles.btnStyle)
                          }>
                          <Text
                            style={
                              item.isSelected
                                ? styles.btnTextSel
                                : styles.btnText
                            }>
                            {item.name}
                          </Text>
                          {item.isSelected && (
                            <Image
                              resizeMode="contain"
                              source={Images.Check}
                              style={{
                                width: 14,
                                marginLeft: 7,
                                height: 14,
                              }}
                            />
                          )}
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View style={styles.pagination}>
            <Text style={{color: 'gray'}}>5 of 6</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="continue" onPress={this.props.onPress} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0,
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
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  step: {
    width: '90%',
    height: 50,
  },
  MainCover: {
    height: height * 0.52,
    paddingHorizontal: 10,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  btnCover: {
    width,
    width: width * 0.45,
    marginVertical: 5,
    marginHorizontal: 5,
    height: 45,
  },
  btnStyle: {
    borderRadius: 50,
    width: '100%',
    height: 35,
    textAlign: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  btnBg: {
    borderRadius: 50,
    width: '100%',
    // paddingHorizontal: 20,
    height: 35,
    textAlign: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  btnTextSel: {
    color: Colors.white,
    fontSize: 12,
  },
  btnText: {
    color: Colors.primary,
    fontSize: 12,
  },
  btnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
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

export default AdditionalScreen;
