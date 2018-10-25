import { createStore, applyMiddleware  } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import composeWithDevTools from 'remote-redux-devtools';

import { Sagas } from '../src/Midleware/Sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers, 
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ));

  sagaMiddleware.run(Sagas);
  
export default store; 