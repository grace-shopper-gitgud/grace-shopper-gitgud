//ACTION TYPES
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// INITIAL STATE
const initialState = [];

// ACTION CREATORS
const addToCart = product => ({
    type: ADD_TO_CART,
    product
});
const removeFromCart = product => ({
    type: REMOVE_FROM_CART,
    product
});

// THUNK CREATORS
export const addProducts = (product) => {
    return (dispatch, _, {axios}) => {
        dispatch(addToCart(product))
        axios.put('/api/cart', product)
        .catch(console.error.bind(console))
    }
}


//will we be sending the entire product to be deleted or just the id?
export const removeProduct = (product) => {
    return (dispatch, _, {axios}) => {
        dispatch(removeFromCart(product))
        axios.delete('/api/cart', product)
        .catch(console.error.bind(console))
    }
}

//REDUCER
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.product];
        case REMOVE_FROM_CART:
            return state.filter(product => product.id !== action.product.id);
        default:
            return state
    }
}