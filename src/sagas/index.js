import { takeLatest, all } from 'redux-saga/effects';
import { fetchNewsWorker } from './fetchNewsSagas';

export default function* rootSagas() {
  yield takeLatest('FETCH_NEWS_REQUESTED', fetchNewsWorker);
}
