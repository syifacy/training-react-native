import { takeLatest, all } from 'redux-saga/effects';
import { fetchNewsChannelWorker,  fetchNewsListWorker} from './fetchNewsSagas';

export default function* rootSagas() {
  yield takeLatest('FETCH_NEWS_CHANNEL_REQUESTED', fetchNewsChannelWorker),
  yield takeLatest('FETCH_NEWS_LIST_REQUESTED', fetchNewsListWorker)
}
