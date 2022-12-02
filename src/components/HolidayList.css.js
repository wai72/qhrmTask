import {StyleSheet} from 'react-native';
import {configs} from '../utils/constants';

export default StyleSheet.create({
  container: {},
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 8,
  },
  itemHeaderText: {
    lineHeight: 18,
    fontSize: 14,
  },
  divider: {
    height: 1.5,
    width: '100%',
    backgroundColor: configs.colors.lightGray2,
  },
});
