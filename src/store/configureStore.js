import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'

import rootReducer from '../reducers'
import sagas from '../sagas'

function * sagaRunner (sagas) {
  for (let saga of sagas) {
    yield fork(saga)
  }
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagaRunner, sagas)

export default store
