import React from 'react';
import {addToCart, removeFromCart} from '../../store';
import {connect} from 'react-redux';
import {MiniProduct} from '../products';

const Cart = (props) => {
  const { cart, subtotal } = props;
  const tax = (subtotal * 0.09);
  const total = (subtotal + tax);
  return (
    <div className='cart-view'>
      <div className='cart-order-summary sidebar bgcolor-darkslateblue'>
        <h1>Order Summary</h1>
        <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
        <h2>Tax: ${tax.toFixed(2)}</h2>
        <h2>Total: ${total.toFixed(2)}</h2>
        <button className='checkout bgcolor-buymegreen'>Checkout</button>
      </div>
      <div className='cart-products'>
        {
            cart.map(product => (
              <div key={product.id} className='cart-product-gallery'>
                <MiniProduct product={product} />
                <button className='remove-from-cart'>Remove from cart</button>
              </div>
            ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  subtotal: state.cart.reduce((acc, product) => {
    if (!product) return acc;
    return acc + product.price;
  }, 0.00)
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
  removeFromCart: (product) => dispatch(removeFromCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
