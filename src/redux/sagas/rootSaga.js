import {all, fork} from 'redux-saga/effects';
import sagas from './handler';

function* rootSaga() {
  yield all(sagas.map(s => fork(s)));
}

export default rootSaga;
