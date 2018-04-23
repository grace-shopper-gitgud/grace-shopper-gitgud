import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import history from '../history'
import user from './user'
import products from './products'
import cart from './cart'
import searchTerm from './searchTerm'
import orders from './orders';
import selectedCategory from './category'

const reducer = combineReducers({user, products, cart, searchTerm, orders, selectedCategory})

const store = createStore(
  reducer,
  applyMiddleware(
    thunks.withExtraArgument({axios, history}),
    logger
  )
)

export default store;
