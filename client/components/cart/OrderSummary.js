import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const OrderSummary = (props) => {
  const { subtotal } = props;
  const tax = (subtotal * 0.09);
  const total = (subtotal + tax);
  return (
    <div className='cart-order-summary sidebar bgcolor-darkslateblue'>
      <h1>Order Summary</h1>
      <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
      <h2>Tax: ${tax.toFixed(2)}</h2>
      <h2>Total: ${total.toFixed(2)}</h2>
      <Link to='/checkout'>
        <button className='checkout bgcolor-buymegreen'>Checkout</button>
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => ({
  subtotal: state.cart.reduce((acc, product) => {
    if (!product) return acc;
    return acc + product.price;
  }, 0.00)
});

export default connect(mapStateToProps)(OrderSummary);



