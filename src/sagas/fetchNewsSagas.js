import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchNewsAPI, fetchNewsListAPI} from '../api/news';

export function* fetchNewsChannelWorker() {
  try {
    const result = yield call(fetchNewsAPI);
    yield put({type: 'FETCH_NEWS_CHANNEL_SUCCESS', payload:result});
  } catch(error) {
    yield put({type: 'FETCH_NEWS_CHANNEL_FAILURE', payload: error});
  }
}
export function* fetchNewsListWorker(action) {
  console.log("action", action);
  try {
    const result = yield call(fetchNewsListAPI, action.params);
    yield put({type: 'FETCH_NEWS_LIST_SUCCESS', payload:result});
  } catch(error) {
    yield put({type: 'FETCH_NEWS_LIST_FAILURE', payload: error});
  }
}