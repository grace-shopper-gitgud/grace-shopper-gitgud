const axios = require('axios');


//ACTION TYPES
const ADD_TO_CART = "ADD_TO_CART";

// INITIAL STATE
const initialState = [];

// ACTION CREATORS
const addedToCart = products => ({
    type: ADD_TO_CART,
    products
})

// THUNK CREATORS
export const addProducts = (product) => {
    return (dispatch) => {
       axios.put('')
    }
}