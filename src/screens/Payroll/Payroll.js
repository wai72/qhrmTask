/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
  Text,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/Header';
import {configs} from '../../utils/constants';

const Home = ({navigation, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const dispatch = useDispatch();
  const topmenuList = useSelector(state => state.home?.topmenuList);

  const CARD_PAIRS_VALUE = useSelector(
    state => state.cardnumber?.cardnumberdata,
  );

  const [stepcount, setStepCount] = React.useState(0);

  React.useEffect(() => {}, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{flex: 1, margin: 8}}>
          <Header topmenuList={topmenuList} />
          <View
            style={{
              flex: 1,
              backgroundColor: '#098',
              height: configs.height - 70,
              marginTop: 4,
            }}>
            <Text style={{color: '#fff', textAlign: 'center'}}> Payroll </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
