import {Platform, Dimensions} from 'react-native';

const isIOS = Platform.OS === 'ios';
const {width, height} = Dimensions.get('window');

export const configs = {
  width,
  height,
  isIOS,
  BEARER_TOKEN:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5dWdAZ21haWwuY29tIiwianRpIjoiMDIzOGNhZmYtMzBlNS00MDczLWFhZmMtNzliY2JhNDVkMTJlIiwiaWF0IjoxNjY5MTIwMTQ3LCJlSWQiOiIyMDMiLCJjSWQiOiIzIiwidUlkIjoiMTEiLCJlbWFpbCI6Inl1Z0BnbWFpbC5jb20iLCJuYmYiOjE2NjkxMjAxNDYsImV4cCI6MTY2OTEyMDQ0NiwiaXNzIjoiaHR0cHM6Ly9tbXVhdC5xaHJtLmlvLyIsImF1ZCI6Imh0dHBzOi8vbW11YXQucWhybS5pby8ifQ.Ke4Xmswul1ZYvkzccRPMcOrB9YqpT3oLLrYP96VF87A',
  URL: 'https://mmuat.qhrm.io/MobileApi/MobileApi/GetMenuRoleRightsOfMobile',
  TOKEN_TYPE: {
    BASIC: 'Basic',
    BEARER: 'Bearer',
  },
  colors: {
    // gray scale
    primary: '#6a1b9a',
    primaryLight: '#9c4dcc',
    primaryTint: '#38006b',
    white: '#FFFFFF',
    lightGray2: '#DFDFE1',
    lightGray: '#ABABB0',

    black: '#000000',
  },

  topmenu: [
    {
      MobileMenuId: 6,
      MenuName: 'WISH',
      ParentMenuId: 0,
      MenuUrl: '',
      Icon: '',
      Sequence: 1,
      MenuType: 1,
      iconName: 'happy',
      bgcolor: 'yellow',
    },
    {
      MobileMenuId: 6,
      MenuName: 'WISH',
      ParentMenuId: 0,
      MenuUrl: '',
      Icon: '',
      Sequence: 1,
      MenuType: 1,
      iconName: 'book',
      bgcolor: 'yellow',
    },
    {
      MobileMenuId: 7,
      MenuName: 'CHAT',
      ParentMenuId: 0,
      MenuUrl: '',
      Icon: '',
      Sequence: 2,
      MenuType: 1,
      iconName: 'calendar',
      bgcolor: 'red',
    },
    {
      MobileMenuId: 8,
      MenuName: 'NOTIFICATION',
      ParentMenuId: 0,
      MenuUrl: '',
      Icon: '',
      Sequence: 3,
      MenuType: 1,
      iconName: 'cart-sharp',
      bgcolor: 'green',
    },
    {
      MobileMenuId: 9,
      MenuName: 'PROFILE',
      ParentMenuId: 0,
      MenuUrl: '',
      Icon: '',
      Sequence: 4,
      MenuType: 1,
      iconName: 'chatbubbles',
      bgcolor: 'yellow',
    },
    {
      MobileMenuId: 10,
      MenuName: 'HELP',
      ParentMenuId: 0,
      MenuUrl: '',
      Icon: '',
      Sequence: 5,
      MenuType: 1,
      iconName: 'heart-sharp',
      bgcolor: 'grey',
    },
  ],
  bottommenu: [
    {
      MobileMenuId: 12,
      MenuName: 'Home',
      ParentMenuId: 2,
      MenuUrl: '',
      Icon: '',
      Sequence: 1,
      MenuType: 0,
    },
    {
      MobileMenuId: 12,
      MenuName: 'Payroll',
      ParentMenuId: 2,
      MenuUrl: '',
      Icon: '',
      Sequence: 1,
      MenuType: 0,
    },

    //   }, {
    //     "MobileMenuId": 12,
    //     "MenuName": "MY PROFILE",
    //     "ParentMenuId": 2,
    //     "MenuUrl": "",
    //     "Icon": "",
    //     "Sequence": 1,
    //     "MenuType": 0
    // }
  ],
};
