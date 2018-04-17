const axios = require('axios');

// ACTION TYPES
const GOT_PRODUCTS = 'GET_PRODUCTS';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

// INITIAL STATE
const products = [];

// ACTION CREATORS
const gotProducts = products => ({ type: GOT_PRODUCTS, products });

// THUNK CREATORS
export const fetchProducts = () => {
  return (dispatch) => {
    axios.get('/api/products')
      .then(res => res.data)
      .then(products => dispatch(gotProducts(products)))
      .catch(err => next(err));
  }
}

// REDUCER
export default (state = products, action) => {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
