import React from 'react';
import {Link} from 'react-router-dom';

const MiniProduct = (props) => {
  const { id, title, description, price, imageURL } = props.product;
  return (
    <Link to={`/products/${id}`}>
      <div className='mini-product-container'>
        <div className='mini-product-container-image'>
          <img src={imageURL} alt="test" />
        </div>
        <div className="mini-product-info">
          <p className="mini-product-price bgcolor-darkestslateblue">{`$${price}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default MiniProduct;
