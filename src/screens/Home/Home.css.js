import {StyleSheet} from 'react-native';
import {configs} from '../../utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: configs.height - 70,
    marginTop: 4,
  },
  icon: {width: 20},
  itemContainer: {
    flex: 1,
    margin: 8,
  },
});
