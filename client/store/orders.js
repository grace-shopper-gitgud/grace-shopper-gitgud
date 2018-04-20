// ACTION TYPE
const GOT_ORDERS = 'GOT_ORDERS';

// INITIAL STATE
const orders = [];

// ACTION CREATORS
const gotOrders = orders => ({type: GOT_ORDERS, orders});

// THUNK CREATORS
export const getOrders = (userId) => {
  return (dispatch, _, {axios}) => {
    axios.get(`/api/orders/${userId}`)
      .then(res => res.data)
      .then(orders => dispatch(gotOrders(orders)))
      .catch(console.error.bind(console));
  }
}

//REDUCER
export default (state = orders, action) => {
  switch (action.type) {
    case GOT_ORDERS:
      return action.orders;
    default:
      return state;
  }
}