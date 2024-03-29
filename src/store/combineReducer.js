import { combineReducers } from '@reduxjs/toolkit';
import AppReducer from '../container/App/redux';

const reducer = combineReducers({
  App: AppReducer,
});

export default reducer;
