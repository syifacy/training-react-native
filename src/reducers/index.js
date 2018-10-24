import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import ListBoardReducer from './ListBoardReducer';

module.exports = combineReducers({
  homeReducer: HomeReducer,
  listBoardReducer: ListBoardReducer
});