/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/Header';
import TitleTextView from '../../components/TitleTextView';
import BirthdayList from '../../components/BirthdayList';
import HolidayList from '../../components/HolidayList';
import ProfileView from '../../components/ProfileView';
import {configs} from '../../utils/constants';
import DynamicTabView from 'react-native-dynamic-tab-view';
import styles from './Home.css';

const Home = ({navigation, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [viewColor, setViewColor] = useState('yellow');
  const data = [
    {title: 'Tab1', key: 'item1', color: 'blue'},
    {title: 'Tab2', key: 'item2', color: 'yellow'},
  ];
  const topmenuList = useSelector(state => state.home?.topmenuList);

  const _renderItem = (item, index) => {
    console.log('renderItem', index);
    return (
      <View
        key={item['key']}
        style={{backgroundColor: item['color'], flex: 1}}
      />
    );
  };
  const onChangeColor = item => {
    // setViewColor(viewColor == 'yellow' ? 'red' : 'yellow');
    setViewColor(item.bgcolor);
  };

  const onChangeTab = index => {};

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{flex: 1, margin: 8}}>
          <Header
            topmenuList={configs.topmenu}
            onPressHeader={item => {
              onChangeColor(item);
            }}
          />
          <View style={[styles, {backgroundColor: viewColor}]}></View>
        </View>
        <TitleTextView text1={'My Dashboard'} text2={'Attendence Status'} />
        <ProfileView />
        <TitleTextView text1={'Birthday'} text2={'Work Anniversity'} />
        <BirthdayList />
        <BirthdayList />
        <BirthdayList />
        <TitleTextView text1={'Holiday'} />
        <HolidayList />
        <HolidayList />
        <HolidayList />
        {/* <View
          style={{
            flex: 1,
            backgroundColor: '#009',
            height: configs.height - 70,
            marginTop: 4,
          }}>
          <DynamicTabView
            data={data}
            renderTab={_renderItem}
            defaultIndex={1}
            containerStyle={styles.container}
            headerBackgroundColor={'white'}
            headerTextStyle={styles.headerText}
            onChangeTab={onChangeTab}
            headerUnderlayColor={'blue'}
          />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
