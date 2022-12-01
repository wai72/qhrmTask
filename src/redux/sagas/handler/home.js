import {call, put, takeEvery, all} from 'redux-saga/effects';
import {homeActions} from '../../reducers/home';
import homeService from '../service/homeService';

function* getMenu(action) {
  try {
    let data = yield homeService.getMenu();
    if (data) {
      let topmenu = [];
      let bottommenu = [];
      data?.map((item, index) => {
        if (item.MenuType == 1) {
          topmenu.push(item);
        } else if (item.MenuType == 0) {
          bottommenu.push(item);
        }
      });

      yield put(homeActions.SET_TOP_MENU({topmenuList: topmenu}));

      yield put(homeActions.SET_BOTTOM_MENU({bottommenuList: bottommenu}));
    }
  } catch (err) {
    console.warn('Error in getMenu.', err);
  }
}

export default function* homeSaga() {
  yield all([yield takeEvery(homeActions.GET_MENU_LIST, getMenu)]);
}
