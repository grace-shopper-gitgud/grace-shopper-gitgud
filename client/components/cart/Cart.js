import React from 'react';
import {addToCart, removeProduct} from '../../store/cart';
import {connect} from 'react-redux';
import {MiniProduct} from '../products';
import OrderSummary from './OrderSummary'

// move order summary to its own component
const Cart = (props) => {
  const { cart, removeProduct } = props;
  return (
    <div className='cart-view'>
      <OrderSummary />
      <div className='cart-products interactive-container'>
        {
          cart.map(product => (
            <div key={product.id} className='cart-product-gallery'>
              <span>
                <MiniProduct product={product} />
              </span>
              <span>
                <p>Quantity: {product.quantity}</p>
              </span>
              <span>
                <button onClick={() => removeProduct(product)} className='remove-from-cart'>Remove from cart</button>
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
  removeProduct: (product) => dispatch(removeProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
