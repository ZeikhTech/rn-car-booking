import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Switch,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Images from '../Constants/Images';
import SwitchWithIcons from 'react-native-switch-with-icons';
import Button from '../Components/Button';

function SummaryScreen(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
            source={Images.Step6Icon}
            style={styles.step}
          />
        </View>
        <View style={styles.mainCover}>
          <View style={styles.card}>
            <Text style={styles.cardHeading}>Mazda model car</Text>
            <ScrollView>
              <View style={styles.box}>
                <Text style={styles.subHeading}>location : </Text>
                <View style={styles.coverInner}>
                  <Text style={styles.detail}>Saudi Arabia</Text>
                  <TouchableOpacity style={styles.buttonStyle}>
                    <Image
                      resizeMode="contain"
                      source={Images.Marker}
                      style={{
                        width: 14,
                        marginRight: 2,
                        marginLeft: 8,
                        height: 14,
                      }}
                    />
                    <Text style={styles.detailInner}>Go service center</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.box}>
                <Text style={styles.subHeading}>Service Type : </Text>
                <View style={styles.coverInner}>
                  <Text style={styles.detail}>Lorem Ipsum</Text>
                </View>
              </View>
              <View style={styles.box}>
                <Text style={styles.subHeading}>Total include VAT : </Text>
                <View style={styles.coverInner}>
                  <Text style={styles.detail}>2000 SR</Text>
                </View>
              </View>
              <View style={styles.box}>
                <Text style={styles.subHeading}>Mileage : </Text>
                <View style={styles.coverInner}>
                  <Text style={styles.detail}>10000</Text>
                </View>
              </View>
              <View style={styles.box}>
                <Text style={styles.subHeading}>Description : </Text>
                <View style={styles.coverInner}>
                  <Text style={styles.detail}>
                    Lorem Ipsum Lorem Ipsum Lorem{' '}
                  </Text>
                </View>
              </View>
              <View style={styles.box}>
                <Text style={styles.subHeading}>Additional Jobs : </Text>
                <View style={styles.coverInner}>
                  <Text style={styles.detail}>Lorem Ipsum</Text>
                </View>
              </View>
              <View style={styles.box}>
                <Text style={styles.subHeading}>Date & Time : </Text>
                <View style={styles.coverInner}>
                  <Text style={styles.detail}>
                    Wed, 08-Sep-2020 at 11:00 AM
                  </Text>
                  <TouchableOpacity style={styles.buttonStyle}>
                    <Image
                      resizeMode="contain"
                      source={Images.Calendar}
                      style={{
                        width: 14,
                        marginRight: 2,
                        marginLeft: 8,
                        height: 14,
                      }}
                    />
                    <Text style={styles.detailInner}>Add to calendar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.checker}>
            <View style={styles.checkerCover}>
              <SwitchWithIcons
                style={styles.stwich}
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={{
                  true: '#748a9d',
                  false: '#fff',
                }}
                iconColor={{true: '#FFFFFF', false: '#fff'}}
                thumbColor={{true: '#2165d2', false: '#748a9d'}}
              />
            </View>
            <View style={styles.checkerText}>
              <Text style={{color: 'gray'}}>
                I have read and accept the Terms of Service and Privacy Policy
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.pagination}>
          <Text style={{color: 'gray'}}>6 of 6</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={props.onPress}
            title="Make Appointment"
            disabled={isEnabled ? false : true}
            wideButton={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
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
    paddingTop: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  step: {
    width: '90%',
    height: 85,
  },
  mainCover: {
    // height: height * 0.38,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.13,
    shadowRadius: 2.62,
    elevation: 5,
  },
  cardHeading: {
    color: '#2165d2',
    fontWeight: '700',
    fontSize: 22,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  box: {
    marginVertical: 5,
  },
  coverInner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  subHeading: {
    fontWeight: '700',
    fontSize: 13,
    textTransform: 'capitalize',
    color: '#969696',
  },
  detail: {
    color: '#000',
    fontSize: 13,
  },
  detailInner: {
    fontSize: 15,
    color: '#2165d2',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checker: {
    // justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  checkerCover: {
    borderWidth: 1.5,
    borderRadius: 16,
    height: 27,
    width: '16.8%',
    borderColor: '#748a9d',
  },
  stwich: {
    marginTop: -1,
    marginLeft: -1,
  },
  checkerText: {
    width: '84.5%',
    paddingLeft: 10,
  },
  btnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 5,
  },
  pagination: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 55,
  },
});

export default SummaryScreen;
