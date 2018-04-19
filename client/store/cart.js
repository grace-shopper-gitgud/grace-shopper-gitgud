//ACTION TYPES
const GOT_CART = 'GOT_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// INITIAL STATE
const cart = [];

// ACTION CREATORS
const gotCart = cart => ({
    type: GOT_CART,
    cart
});

const addToCart = product => ({
    type: ADD_TO_CART,
    product
});
const removeFromCart = product => ({
    type: REMOVE_FROM_CART,
    product
});

// THUNK CREATORS
export const fetchCart = () => {
    return (dispatch, _, {axios}) => {
        axios.get('/api/cart')
            .then(res => res.data)
            .then(cart => dispatch(gotCart(cart)))
            .catch(console.error.bind(console));
    }
}

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
        axios.delete(`/api/cart/${product.id}`)
        .catch(console.error.bind(console))
        dispatch(removeFromCart(product))
        //VVVV HACKY WAY OF NOT DELETING ALL INSTANCES IN CART
        dispatch(fetchCart())
    }
}

//REDUCER
export default (state = cart, action) => {
    switch (action.type) {
        case GOT_CART:
            return action.cart;
        case ADD_TO_CART:
            return [...state, action.product];
        case REMOVE_FROM_CART:
            return state.filter(product => product.id !== action.product.id);
        default:
            return state
    }
}
