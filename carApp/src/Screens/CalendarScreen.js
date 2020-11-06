import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

import Images from '../Constants/Images';
import Colors from '../Constants/Colors';
import Button from '../Components/Button';
import SlotButton from '../Components/SlotButton';

const slotData = {
  slots: {
    slot1: '8:30',
    slot2: '9:00',
    slot3: '9:30',
    slot4: '10:00',
    slot5: '10:30',
    slot6: '11:00',
    slot7: '11:30',
    slot8: '12:00',
    slot9: '12:30',
    slot10: '1:00',
    slot11: '1:30',
    slot12: '2:00',
  },
};

function AppCalendarScreen(props) {
  const [selected, setSelected] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [slot, setSlot] = useState({});

  const onDayPress = (day) => {
    setSelected(day.dateString);
  };

  const bookSlot = (status, key, value) => {
    const bookSlot = status ? value : null;
    setSlot(bookSlot);
  };

  const slots = slotData.slots;
  const slotObj = Object.keys(slots).map((k) => {
    return (
      <View key={k} style={styles.slotContainer}>
        <SlotButton
          text={slots[k]}
          onPress={(status) => bookSlot(status, k, slots[k])}
        />
      </View>
    );
  });

  const localeConfig = (LocaleConfig.locales['EN'] = {
    monthNames: [
      'January',
      'Feburary',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan.',
      'Feb.',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul.',
      'Aug',
      'Sep.',
      'Oct.',
      'Nov.',
      'Dec.',
    ],
    dayNames: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    dayNamesShort: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  });
  LocaleConfig.defaultLocale = 'EN';

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
            source={Images.Step4Icon}
            style={styles.step}
          />
        </View>
        <View style={styles.calendarContainer}>
          <Calendar
            // current={new Date()}
            style={styles.calendar}
            hideExtraDays
            onDayPress={onDayPress}
            markingType={'custom'}
            markedDates={{
              '2020-11-04': {disabled: true, disableTouchEvent: true},
              [selected]: {
                selected: true,
                marked: true,
              },
            }}
            dayComponent={(props) => {
              const {marking, state} = props;
              const getContentStyle = () => {
                const style = {
                  content: {},
                  text: {
                    color: Colors.white,
                  },
                };
                if (marking.selected) {
                  style.content.backgroundColor = Colors.primary;
                  style.content.borderRadius = 20;
                  style.content.height = 30;
                  style.content.width = 30;
                  style.content.justifyContent = 'center';
                }
                return style;
              };

              const handlePress = () => {
                props.onPress(props.date);
              };

              const {date} = props;
              const contentStyle = getContentStyle();
              return (
                <View>
                  <TouchableOpacity
                    style={contentStyle.content}
                    onPress={handlePress}>
                    <View style={[styles.contentText, contentStyle.text]}>
                      <Text
                        style={{
                          color: marking.selected ? Colors.white : Colors.dark,
                        }}>
                        {String(date.day)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            theme={{
              textDayHeaderFontSize: 14,
              textSectionTitleColor: Colors.primary,
              todayTextColor: Colors.primary,
              dayTextColor: Colors.dark,
              arrowColor: Colors.dark,
              headerColor: Colors.white,
            }}
          />
        </View>

        {selected ? (
          <View style={styles.timeContainer}>
            <View style={styles.selectContainer}>
              <Text style={styles.selectText}>Select Time</Text>
            </View>
            <View style={styles.timeSlotContainer}>
              <View style={styles.timeSlot}>{slotObj}</View>
            </View>
          </View>
        ) : null}
        <View style={styles.pagination}>
          <Text style={{color: 'gray'}}>4 of 6</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="continue"
            onPress={props.onPress}
            disabled={selected ? false : true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
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
  stepContainer: {
    top: 30,
    alignItems: 'center',
  },
  step: {
    width: '90%',
    height: 50,
  },
  calendarContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 130,
    left: 0,
    right: 0,
  },
  calendar: {
    width: 370,
    height: 270,
  },
  contentText: {
    alignItems: 'center',
    height: 25,
  },
  timeContainer: {
    height: 170,
    width: '100%',
    position: 'absolute',
    top: 410,
    elevation: 2,
  },
  selectContainer: {
    top: 10,
    left: 10,
    width: 100,
  },
  selectText: {
    fontSize: 18,
    color: Colors.primary,
  },
  slotContainer: {
    marginTop: 15,
    marginLeft: 10,
  },
  timeSlotContainer: {
    position: 'absolute',
    top: 25,
  },
  timeSlot: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 380,
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

export default AppCalendarScreen;
