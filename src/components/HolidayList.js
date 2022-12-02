import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import s from './HolidayList.css';
import {memo} from 'react';
import {configs} from '../utils/constants';

function HolidayList(props) {
  const dispatch = useDispatch();
  // const currentChain = useSelector(state => state.chain.current_chain);

  return (
    <TouchableOpacity>
      <View style={s.itemContainer}>
        <View>
          <Text style={s.itemHeaderText}>{'Holiday 1 '}</Text>
          <Text style={s.itemHeaderText}>{'0.5 days on 05-Feb-2022 '}</Text>
        </View>
        <Ionicons
          size={25}
          name={'ios-chatbox-ellipses'}
          style={[{color: configs.colors.primary}]}
        />
      </View>
      <View style={s.divider} />
    </TouchableOpacity>
  );
}
export default memo(HolidayList);
