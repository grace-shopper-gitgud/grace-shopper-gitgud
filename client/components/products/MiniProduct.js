import React from 'react'

const MiniProduct = (props) => {
  const { title, description, price, imageURL } = props.product;
  return (
    <div className='mini-product-container'>
      <div className='mini-product-container-image'>
        <img src={imageURL} alt="test" />
      </div>
      <div className="mini-product-info">
        <h3 id="mini-product-name">{title}</h3>
        <h3 id="mini-product-price">{`$${price}`}</h3>
      </div>
    </div>
  );
};

export default MiniProduct;
