import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

import Images from '../Constants/Images';
import Colors from '../Constants/Colors';

const CONTENT = [
  {
    title: 'Service Name',
    vat: '2000 SR',
    mileage: '10000',
    description: 'Lorum ipsum dolor sit amet, consetetur',
  },
  {
    title: 'Service Name',
    vat: '2000 SR',
    mileage: '10000',
    description: 'Lorum ipsum dolor sit amet, consetetur',
  },
  {
    title: 'Service Name',
    vat: '2000 SR',
    mileage: '10000',
    description: 'Lorum ipsum dolor sit amet, consetetur',
  },
  {
    title: 'Service Name',
    vat: '2000 SR',
    mileage: '10000',
    description: 'Lorum ipsum dolor sit amet, consetetur',
  },
  {
    title: 'Service Name',
    vat: '2000 SR',
    mileage: '10000',
    description: 'Lorum ipsum dolor sit amet, consetetur',
  },
  {
    title: 'Service Name',
    vat: '2000 SR',
    mileage: '10000',
    description: 'Lorum ipsum dolor sit amet, consetetur',
  },
  {
    title: 'Service Name',
    vat: '2000 SR',
    mileage: '10000',
    description: 'Lorum ipsum dolor sit amet, consetetur',
  },
  {
    title: 'Service Name',
    vat: '2000 SR',
    mileage: '10000',
    description: 'Lorum ipsum dolor sit amet, consetetur',
  },
];

export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: true,
  };

  toggleExpanded = () => {
    this.setState({collapsed: !this.state.collapsed});
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={[!isActive ? styles.inActiveText : styles.activeText]}>
          {section.title}
        </Text>
        {isActive && (
          <Image
            source={Images.Check}
            resizeMode="contain"
            style={{width: 15, height: 15, marginLeft: 10}}
          />
        )}
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[
          styles.content,
          isActive ? styles.contentActive : styles.contentInactive,
        ]}
        transition="backgroundColor">
        <Animatable.Text
          style={styles.contentText}
          animation={isActive ? 'bounceIn' : undefined}>
          <Text style={{color: 'gray'}}>Total Include vat:</Text> {'\n'}
          {section.vat}
          {'\n'}
          {'\n'}
          <Text style={{color: 'gray'}}>Mileage:</Text>
          {'\n'} {section.mileage}
          {'\n'}
          {'\n'}
          <Text style={{color: 'gray'}}>Description:</Text>
          {'\n '}
          {section.description}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const {multipleSelect, activeSections} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{padding: 10}}
          showsVerticalScrollIndicator={false}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '100%',
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    marginTop: 10,
    padding: 10,
  },
  inActiveText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '500',
  },
  activeText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.white,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
  active: {
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  inactive: {
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
  contentText: {
    fontSize: 14,
  },
  contentActive: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
  contentInActive: {},
});
