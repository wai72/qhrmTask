//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
const ICON_SIZE = 26;
import {configs} from '../utils/constants';
import styles from './Header.css';
// create a component
const Header = ({style, iconColor = '#000', topmenulist, onPressHeader}) => {
  return (
    <View style={styles.container}>
      {configs.topmenu?.map((item, index) => {
        return (
          <TouchableOpacity
            style={{flex: 1}}
            onPress={item => {
              onPressHeader(item);
            }}>
            <Ionicons
              size={ICON_SIZE}
              name={item.iconName}
              style={[{color: configs.colors.lightGray}]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

//make this component available to the app
export default Header;
