import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderSummary from './OrderSummary';
import {createOrder} from '../../store/orders';

class Checkout extends Component {
  constructor (props) {
    super(props);
    this.state = {
      order: {
        status: 'PENDING',
        email: '',
        street: '',
        unit: '',
        state: '',
        zipcode: 0,
        total: (props.subtotal + (props.subtotal * 0.09)).toFixed(2)
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({
      order: {
        ...this.state.order,
        [event.target.name]: event.target.value
      }
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    const userId = this.props.user.id;
    const {cart} = this.props;
    const order = {
      order: this.state.order,
      cart
    };
    this.props.createOrder(order, userId);
  }

  render () {
    const {cart, user} = this.props;
    const {email, street, unit, state, zipcode} = this.state;
    const {handleChange, handleSubmit} = this;
    return (
    <div className='checkout-view'>
      <OrderSummary />
      <div className='checkout-form interactive-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' value={email} onChange={handleChange}/><br></br>
          <label htmlFor='street'>Street address</label>
          <input type='text' name='street' value={street} onChange={handleChange}/><br></br>
          <label htmlFor='unit'>Unit #</label>
          <input type='text' name='unit' value={unit} onChange={handleChange}/><br></br>
          <label htmlFor='state'>State</label>
          <input type='text' name='state' value={state} onChange={handleChange}/><br></br>
          <label htmlFor='zipcode'>Zipcode</label>
          <input type='text' name='zipcode' value={zipcode} onChange={handleChange}/><br></br>
          <button type='submit' className='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  subtotal: state.cart.reduce((acc, product) => {
    if (!product) return acc;
    return acc + (product.price * product.quantity);
  }, 0.00),
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  createOrder: (order, userId) => dispatch(createOrder(order, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
