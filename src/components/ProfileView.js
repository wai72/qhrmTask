import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import s from './ProfileView.css';
import {memo} from 'react';
import {configs} from '../utils/constants';
import Images from '../utils/Images';

function BirdhdayList(props) {
  const dispatch = useDispatch();
  // const currentChain = useSelector(state => state.chain.current_chain);

  return (
    <TouchableOpacity>
      <View style={s.itemContainer}>
        <View>
          <Image
            source={Images.girl_icon}
            style={s.girlImage}
            resizeMode="contain"
          />
          <View style={{flexDirection: 'row', marginTop: 16}}>
            <Ionicons
              size={20}
              name={'star'}
              style={[{color: configs.colors.primary}]}
            />
            <Text style={{padding: 4}}>56</Text>
            <MaterialCommunityIcons
              size={20}
              name={'thumb-up'}
              style={[{color: configs.colors.green}]}
            />
            <Text style={{padding: 4}}>560</Text>
          </View>
        </View>
        <View>
          <Text style={s.itemHeaderText}>{'Yug'}</Text>
          <Text style={s.itemText}>{'General Manager -PMO'}</Text>
          <Text style={s.itemText}>{'Amara RTT '}</Text>
          <Text style={s.itemText}>{'Working since: 05-Feb-2021 '}</Text>
          <Text style={s.itemText}>{'Reporting to: Admin test'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default memo(BirdhdayList);
