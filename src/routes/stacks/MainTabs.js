import * as React from 'react';
import {Image, Platform, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {configs} from '../../utils/constants';
import Home from '../../screens/Home/Home';
import Payroll from '../../screens/Payroll/Payroll';
import {useSelector} from 'react-redux';
import DynamicTabView from 'react-native-dynamic-tab-view';
import Header from '../../components/Header';

const Tab = createBottomTabNavigator();

const options = {
  headerShown: false,
  gestureEnabled: false,
};

const MainTabs = ({navigation}) => {
  const bottommenuList = useSelector(state => state.home?.bottommenuList);

  const data = [
    {title: 'Tab1', key: 'item1', color: 'blue'},
    {title: 'Tab2', key: 'item2', color: 'yellow'},
  ];

  const _renderItem = (item, index) => {
    console.log('renderItem', index);
    return (
      <View
        key={item['key']}
        style={{backgroundColor: item['color'], flex: 1}}
      />
    );
  };

  const onChangeTab = index => {};

  return (
    <View style={{flex: 1}}>
      {/* <Header
            topmenuList={topmenuList}
            onPressHeader={item => {
              onChangeColor(item);
            }}
          /> */}
      <Tab.Navigator
        screenOptions={({route}) => ({
          // tabBarIcon: ({ focused, color }) => {
          //   const { renderIcon } = tabParams[route.name] || {};
          //   return renderIcon ? renderIcon(color) : null;
          // },
          tabBarActiveTintColor: configs.colors.primary,
          tabBarInactiveTintColor: configs.colors.primaryTint,
          tabBarStyle: {
            // backgroundColor: configs.colors.primary,
            borderTopWidth: 0,
            height: Platform.OS === 'ios' && isIphoneX() ? 80 : 60,
          },
          tabBarIconStyle: {
            marginTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            paddingBottom: 6,
          },
        })}
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        initialRouteName="Home">
        {/* {configs.bottommenu.map(item => {
          <Tab.Screen
            component={Home}
            name={item.MenuName}
            options={options}
          />;
        })} */}
        <Tab.Screen component={Home} name="Home" options={options} />
        <Tab.Screen name="Payroll" component={Payroll} options={options} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 16,
  },
  headerText: {
    color: 'black',
  },
  tabItemContainer: {
    backgroundColor: '#cf6bab',
  },
});
export default MainTabs;
