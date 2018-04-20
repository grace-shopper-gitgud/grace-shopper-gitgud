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

export const removeProduct = (product) => {
    return async (dispatch, _, {axios}) => {
        await axios.delete(`/api/cart/${product.id}`)
            .catch(console.error.bind(console));
        dispatch(removeFromCart(product));
    }
}

//REDUCER
export default (state = cart, action) => {
    const {product} = action;
    const i = state.indexOf(product);
    switch (action.type) {
        case GOT_CART:
            return action.cart;
        case ADD_TO_CART: {
            if (i === -1) {
                product.quantity = 1;
                return [...state, product];
            } else {
                product.quantity = state[i].quantity + 1;
                return [...state.slice(0, i), product, ...state.slice(i + 1)];
            }
        }
        case REMOVE_FROM_CART: {
            product.quantity = state[i].quantity - 1;
            if (product.quantity) {
                return [...state.slice(0, i), product, ...state.slice(i + 1)];
            } else {
                return [...state.slice(0, i), ...state.slice(i + 1)];
            }
        }
        default:
            return state;
    }
}
