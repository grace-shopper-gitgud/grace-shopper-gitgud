import React from 'react';
import { connect } from 'react-redux';



export const SingleProductView = (props) => {
  const { product } = props;
  return (
    <div className='single-product-view'>
      <div className='back'>
        <button className='back-button'>{'<='}</button>
      </div>
      <div className='single-product-meta'>
        <div className='single-product-image-large'>
          <img className='lrg-img' src={`${product.imageURL}`} />
        </div>
        <div className='single-product-info'>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          {/* placeholder buttons */}
          <div className='buttons'>
            <button className='add-to-cart bgcolor-buymegreen'>Add to cart</button>
          </div>
        </div>
      </div>
      <div className='single-product-bottom'>
        <div className='single-product-desc'>
          <h2>Description</h2>
          <p>aklsjdhflasjudfgoaiwyugeflajhsdflakjsdhfailuwefhl;auefalisudhfalksjdfh</p>
        </div>
        <div className='single-product-reviews'>
          <h2>Reviews</h2>
          <p className='review'>Best game ever 10/10</p>
          <p className='review'>Worst game ever I want my money back</p>
          <p className='review'>Just right</p>
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

export default connect(mapStateToProps)(SingleProductView);
