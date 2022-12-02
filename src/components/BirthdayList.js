import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import s from './BirthdayList.css';
import {memo} from 'react';
import {configs} from '../utils/constants';
import Images from '../utils/Images';

function BirdhdayList(props) {
  const dispatch = useDispatch();
  // const currentChain = useSelector(state => state.chain.current_chain);

  return (
    <TouchableOpacity>
      <View style={s.itemContainer}>
        <Image
          source={Images.girl_icon}
          style={s.girlImage}
          resizeMode="contain"
        />
        <View style={s.itemRow}>
          <View>
            <Text style={s.itemHeaderText}>{'Pyayanka Yadaya '}</Text>
            <Text style={s.itemText}>{'purchase & inventory '}</Text>
          </View>
          <View>
            <Text style={s.itemText}>{'Purchasing office'}</Text>
            <Text style={s.itemText}>{'Working since: 20-6-2022 '}</Text>
          </View>
        </View>
        <Ionicons
          size={25}
          name={'ios-checkmark-circle'}
          style={[{color: configs.colors.primary}]}
        />
      </View>
      <View style={s.divider} />
    </TouchableOpacity>
  );
}
export default memo(BirdhdayList);
