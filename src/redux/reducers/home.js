/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

// Market is used for handling market data (Eg. exchange rate, currencies...)
// which are not belonged to user wallet

const home = createSlice({
  name: 'home',
  initialState: {
    topmenuList: [],
    bottommenuList: [],
  },
  reducers: {
    GET_MENU_LIST: () => {},
    SET_TOP_MENU: (state, action) => {
      state.topmenuList = action.topmenuList;
    },
    SET_BOTTOM_MENU: (state, action) => {
      state.bottommenuList = action.bottommenuList;
    },
  },
});

export const homeActions = home.actions;

export default home;
