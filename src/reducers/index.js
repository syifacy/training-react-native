import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import ListBoardReducer from './ListBoardReducer';
import ListNews from './ListNews'

module.exports = combineReducers({
  homeReducer: HomeReducer,
  listBoardReducer: ListBoardReducer,
  listNews: ListNews
});