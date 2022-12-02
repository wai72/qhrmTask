import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import s from './TitleTextView.css';
import {memo} from 'react';
import {configs} from '../utils/constants';

function TitleTextView(props) {
  const dispatch = useDispatch();
  // const currentChain = useSelector(state => state.chain.current_chain);

  return (
    <TouchableOpacity>
      <View style={s.itemContainer}>
        <Text style={[s.itemHeaderText, {color: configs.colors.primary}]}>
          {props.text1}
        </Text>
        <Text style={s.itemHeaderText}>{props.text2}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default memo(TitleTextView);
