import {StyleSheet} from 'react-native';
import {configs} from '../utils/constants';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: configs.colors.lightGray2,
    justifyContent: 'space-evenly',
    height: 60,
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemHeaderText: {
    fontSize: 16,
  },
});
