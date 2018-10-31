import {call, put, takeLatest} from 'redux-saga/effects';
import fetchNewsAPI from '../api/news';

export function* fetchNewsWorker(action) {
  console.log("action", action);
  try {
    const result = yield call(fetchNewsAPI, action.params);
    yield put({type: 'FETCH_NEWS_SUCCESS', payload:result});
  } catch(error) {
    yield put({type: 'FETCH_NEWS_FAILURE'});
  }
}



// export function* fetchNewsWorker() {
//   const response = yield call(fetchNewsAPI);
//   yield put({ type: 'FETCH_NEWS_SUCCESS', response });
// }
