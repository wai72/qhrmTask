import * as React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import {setNavigator} from '../utils/NavigationService';
import {MainTabs} from './stacks';
import {homeActions} from '../redux/reducers/home';

const Stack = createNativeStackNavigator();

const RoutesStack = ({navigation, ...props}) => {
  // const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(homeActions.GET_MENU_LIST());
  }, []);

  const renderScreens = () => {
    return (
      <>
        <Stack.Screen
          name="Main"
          options={{
            animationTypeForReplace: 'push',
          }}
          component={MainTabs}
        />
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </>
    );
  };

  return (
    <NavigationContainer theme={DarkTheme} ref={nav => setNavigator(nav)}>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        {renderScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RoutesStack;
