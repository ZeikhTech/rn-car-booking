import React, {useState} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Images from '../../Constants/Images';
import Colors from '../../Constants/Colors';
import {Col} from 'native-base';

const Repair = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Repair</Text>
    </View>
  );
};

const Service = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Service</Text>
    </View>
  );
};

const Shop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Shop</Text>
    </View>
  );
};

function TabBar() {
  const [selectedTab, setSelectedTab] = useState('service');

  return (
    <TabNavigator
      tabBarStyle={{
        position: 'absolute',
        top: 40,
        left: 20,
        width: '90%',
        alignItems: 'center',
        height: 55,
        borderRadius: 30,
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
        selectedTitleStyle={{color: 'white'}}
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
  );
}

const styles = StyleSheet.create({
  container: {
    top: 150,
    height: 300,
    width: '90%',
    alignSelf: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default TabBar;
