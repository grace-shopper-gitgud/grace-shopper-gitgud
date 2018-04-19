import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import history from '../history'
import user from './user'
import products from './products'
import cart from './cart'
import searchTerm from './searchTerm'

const reducer = combineReducers({user, products, cart, searchTerm})

const store = createStore(
  reducer,
  applyMiddleware(
    thunks.withExtraArgument({axios, history}),
    logger
  )
)

export default store
export * from './cart'
