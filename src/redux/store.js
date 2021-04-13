import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import { watcherSaga } from './sagas/rootSaga'

const sagaMiddleWare = createSagaMiddleware()
// const middleware = [sagaMiddleWare]
const store = createStore(reducers, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(watcherSaga)

export default store
