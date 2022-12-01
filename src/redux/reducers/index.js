import {combineReducers} from 'redux';
import Home from './home';

// Actions
export const actions = {
  home: Home.actions,
};

// Reducers
export default combineReducers({
  home: Home.reducer,
});
