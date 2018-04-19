import React from 'react';
import history from '../../history';

const MiniProduct = (props) => {
  const { id, title, description, price, imageURL } = props.product;
  return (
    <div className='mini-product-container' onClick={() => history.push(`/products/${id}`)}>
      <div className='mini-product-container-image'>
        <img src={imageURL} alt="test" />
      </div>
      <div className="mini-product-info">
        <p className="mini-product-price bgcolor-darkestslateblue">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default MiniProduct;
