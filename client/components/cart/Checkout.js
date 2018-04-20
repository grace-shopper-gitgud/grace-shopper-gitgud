import React from 'react';
import {connect} from 'react-redux';
import OrderSummary from './OrderSummary';

const Checkout = (props) => {
  const {cart} = props;
  return (
    <div className='checkout-view'>
      <OrderSummary />
      <div className='checkout-form interactive-container'>
        <form>
          <label htmlFor='email'>Email</label>
          <input type='text' value='email' /><br></br>
          <label htmlFor='street'>Street address</label>
          <input type='text' value='street' /><br></br>
          <label htmlFor='unit'>Unit #</label>
          <input type='text' value='unit' /><br></br>
          <label htmlFor='state'>State</label>
          <input type='text' value='state' /><br></br>
          <label htmlFor='zipcode'>Zipcode</label>
          <input type='text' value='zipcode' /><br></br>
          <button type='submit' className='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Checkout);
