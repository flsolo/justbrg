import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import {
  browserHistory
} from 'react-router'

export default function configureStore(initialState) {
  const middleware = routerMiddleware(browserHistory)
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, api, middleware)
  )
}
