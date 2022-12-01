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
  const onChangeColor = () => {
    setViewColor(viewColor == 'yellow' ? 'red' : 'yellow');
  };

  const onChangeTab = index => {};

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{flex: 1}}>
          <Header topmenuList={topmenuList} onPressHeader={onChangeColor} />
          <View style={[styles, {backgroundColor: viewColor}]}>
            <View
              style={{
                flexDirection: 'row',
                height: 50,
                backgroundColor: configs.colors.lightGray2,
              }}>
              <Text>My Dashboard</Text>
              <Text>Attendance Status</Text>
            </View>
            {/* <Text style={{color: '#fff', textAlign: 'center'}}> Home </Text> */}
          </View>
        </View>
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
