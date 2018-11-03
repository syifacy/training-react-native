import { combineReducers } from 'redux';

import NewsChannelReducer from './NewsChannelReducer';
import NewsListReducer from './NewsListReducer';

module.exports = combineReducers({
  listChannelNews: NewsChannelReducer,
  listNews: NewsListReducer
});