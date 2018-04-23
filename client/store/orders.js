// ACTION TYPE
const GOT_ORDERS = 'GOT_ORDERS';
const CREATED_ORDER = 'CREATED_ORDER'

// INITIAL STATE
const orders = [];

// ACTION CREATORS
const gotOrders = orders => ({type: GOT_ORDERS, orders});
const createdOrder = order => ({type: CREATED_ORDER, order})

// THUNK CREATORS
export const getOrders = userId => {
  return (dispatch, _, {axios}) => {
    axios.get(`/api/orders/${userId}`)
      .then(res => res.data)
      .then(orders => dispatch(gotOrders(orders)))
      .catch(console.error.bind(console));
  }
}

export const createOrder = (order, userId) => {
  return (dispatch, _, {axios}) => {
    axios.post(`/api/orders/${userId.toString()}`, order)
      .then(res => res.data)
      .then(order => dispatch(createdOrder(order)))
      .catch(console.error.bind(console));
  }
}

//REDUCER
export default (state = orders, action) => {
  switch (action.type) {
    case GOT_ORDERS:
      return action.orders;
    case CREATED_ORDER:
      return [...state, action.order]
    default:
      return state;
  }
}
