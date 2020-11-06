import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Images from '../Constants/Images';
import ImageSwiper from '../Components/ImageSwiper';
import Button from '../Components/Button';
import Colors from '../Constants/Colors';

const Repair = () => {
  return (
    <View style={styles.tabsContainer}>
      <Text style={styles.welcome}>Repair</Text>
    </View>
  );
};

const Service = () => {
  return (
    <View style={styles.tabsContainer}>
      <View style={styles.stepContainer}>
        <Image
          resizeMode="contain"
          source={Images.Step1Icon}
          style={{
            width: '90%',
            height: 50,
            position: 'relative',
            bottom: 220,
          }}
        />
      </View>
      <View style={styles.swiperContainer}>
        <ImageSwiper />
      </View>
    </View>
  );
};

const Shop = () => {
  return (
    <View style={styles.tabsContainer}>
      <Text style={styles.welcome}>Shop</Text>
    </View>
  );
};
function AppointmentScreen(props) {
  const [selectedTab, setSelectedTab] = useState('service');

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
        <View style={styles.tabContainer}>
          <TabNavigator
            tabBarStyle={{
              position: 'absolute',
              top: -5,
              left: 20,
              width: '90%',
              height: 55,
              borderRadius: 25,
              elevation: 10,
            }}
            hidesTabTouch={false}>
            <TabNavigator.Item
              tabStyle={{
                backgroundColor:
                  selectedTab === 'repair' ? Colors.primary : Colors.white,
              }}
              selected={selectedTab === 'repair'}
              title="Repair"
              titleStyle={{fontSize: 14, color: Colors.primary}}
              selectedTitleStyle={{color: Colors.white}}
              renderIcon={() => (
                <View style={{top: 10}}>
                  <Image
                    resizeMode="contain"
                    color="black"
                    source={Images.RepairIcon}
                    style={{width: 35, height: 35, tintColor: Colors.primary}}
                  />
                </View>
              )}
              renderSelectedIcon={() => (
                <View style={{top: 10}}>
                  <Image
                    resizeMode="contain"
                    source={Images.RepairIcon}
                    style={{width: 35, height: 35, tintColor: Colors.white}}
                  />
                </View>
              )}
              onPress={() => setSelectedTab('repair')}>
              <Repair />
            </TabNavigator.Item>
            <TabNavigator.Item
              tabStyle={{
                backgroundColor:
                  selectedTab === 'service' ? Colors.primary : Colors.white,
              }}
              selected={selectedTab === 'service'}
              title="Services"
              titleStyle={{fontSize: 14, color: Colors.primary}}
              selectedTitleStyle={{color: Colors.white}}
              renderIcon={() => (
                <View style={{top: 5}}>
                  <Image
                    resizeMode="contain"
                    source={Images.FilesIcon}
                    style={{width: 30, height: 30, tintColor: Colors.primary}}
                  />
                </View>
              )}
              renderSelectedIcon={() => (
                <View style={{top: 5}}>
                  <Image
                    resizeMode="contain"
                    source={Images.FilesIcon}
                    style={{width: 30, height: 30, tintColor: Colors.white}}
                  />
                </View>
              )}
              onPress={() => setSelectedTab('service')}>
              <Service />
            </TabNavigator.Item>
            <TabNavigator.Item
              tabStyle={{
                backgroundColor:
                  selectedTab === 'shop' ? Colors.primary : Colors.white,
              }}
              selected={selectedTab === 'shop'}
              title="Body Shop"
              titleStyle={{fontSize: 14, color: Colors.primary}}
              selectedTitleStyle={{color: Colors.white}}
              renderIcon={() => (
                <View style={{top: 10}}>
                  <Image
                    resizeMode="contain"
                    source={Images.FixIcon}
                    style={{width: 35, height: 35, tintColor: Colors.primary}}
                  />
                </View>
              )}
              renderSelectedIcon={() => (
                <View style={{top: 10}}>
                  <Image
                    resizeMode="contain"
                    source={Images.FixIcon}
                    style={{width: 35, height: 35, tintColor: Colors.white}}
                  />
                </View>
              )}
              onPress={() => setSelectedTab('shop')}>
              <Shop />
            </TabNavigator.Item>
          </TabNavigator>
        </View>
        <View style={styles.pagination}>
          <Text style={{color: 'gray'}}>1 of 6</Text>
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
    // backgroundColor: '#f0f0f0',
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
  tabsContainer: {
    flex: 1,

    justifyContent: 'center',
  },
  tabContainer: {
    flex: 0.96,
    top: 30,
    width: '95%',
    alignSelf: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  stepContainer: {
    top: 30,
    alignItems: 'center',
  },
  swiperContainer: {
    position: 'absolute',
    top: 200,
    // left: 0,
    // right: 0,
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

export default AppointmentScreen;
