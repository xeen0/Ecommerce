import {createStore , applyMiddleware } from 'redux'
import { persistStore} from 'redux-persist' 
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'
// import thunk from 'redux-thunk'
import createSagaMiddileware  from 'redux-saga'
const sagaMiddleWare = createSagaMiddileware()
const middlewares = [sagaMiddleWare]

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

 export const  store = createStore(rootReducer , applyMiddleware(...middlewares))
 sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store);
export default {store , persistor}