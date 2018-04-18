//ACTION TYPES
const ADD_TO_CART = "ADD_TO_CART";

// INITIAL STATE
const initialState = [];

// ACTION CREATORS
const addToCart = product => ({
    type: ADD_TO_CART,
    product
})

// THUNK CREATORS
export const addProducts = (product) => {
    return (dispatch, _, {axios}) => {
       axios.put('/api/cart', product)
       .then(() => dispatch(addToCart(product)))
       .catch(console.error.bind(console))
    }
}

//REDUCER
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.product];
        default:
            return state
    }
}