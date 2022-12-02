import {StyleSheet} from 'react-native';
import {configs} from '../utils/constants';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 8,
  },
  girlImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 16,
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  itemHeaderText: {
    // lineHeight: 18,
    fontWeight: 'bold',
    fontSize: 15,
  },
  itemText: {
    // lineHeight: 12,
    fontSize: 14,
  },
  divider: {
    height: 1.5,
    width: '100%',
    backgroundColor: configs.colors.lightGray2,
  },
});
