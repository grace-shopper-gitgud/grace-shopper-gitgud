import React from 'react';
import { connect } from 'react-redux';
import {addProducts} from '../../store';



export const SingleProductView = (props) => {
  const { product, addProducts } = props;
  return (
    <div className='single-product-view'>
      <div className='single-product-meta'>
        <div className='single-product-image-large'>
          <img className='lrg-img' src={`${product.imageURL}`} />
        </div>
        <div className='single-product-info'>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <div className='buttons'>
            <button onClick={() => addProducts(product)} className='add-to-cart bgcolor-buymegreen'>Add to cart</button>
          </div>
        </div>
      </div>
      <div className='single-product-bottom'>
        <div className='single-product-desc'>
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>
        <div className='single-product-reviews'>
          <h2>Reviews</h2>
          {// rendering reviews, if no reviews then render a helpful line
            product.reviews.length ?
            product.reviews.map(review => {
              return (
              <div key={review.id} className='review'>
                <h3>{`${review.user.email} says:`}</h3>
                <p className='review-text'>{review.text}</p>
              </div>
            )
            }) :
            <p className='review'>No reviews yet... Be the first!</p>
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.productId;
  return {
    product: state.products.find(product => product.id === +id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addProducts: (product) => dispatch(addProducts(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductView);
