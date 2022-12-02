import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 8,
  },
  girlImage: {
    width: 100,
    height: 100,
    borderRadius: 35,
    marginRight: 16,
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row',
  },
  itemHeaderText: {
    // lineHeight: 18,
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemText: {
    // lineHeight: 12,
    fontSize: 14,
  },
  iconview: {flexDirection: 'row', marginTop: 16},
});
