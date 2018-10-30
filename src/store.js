import { createStore, applyMiddleware , compose } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';

import rootSagas  from './sagas'

const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
  const store = createStore(
      reducers,
      composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

  sagaMiddleware.run(rootSagas);
  
export default store; 