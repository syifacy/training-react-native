import { takeLatest,takeEvery, all } from 'redux-saga/effects';
import { fetchNewsChannelWorker,  fetchNewsListWorker} from './fetchNewsSagas';


function* watchNewsChannel(){
  yield takeEvery('FETCH_NEWS_CHANNEL_REQUESTED', fetchNewsChannelWorker);
}
function* watchNewsList(){
  yield takeLatest('FETCH_NEWS_LIST_REQUESTED', fetchNewsListWorker)
}
export default function* rootSagas() {
  yield all ([
    watchNewsChannel(),
    watchNewsList()
  ])
   
}
