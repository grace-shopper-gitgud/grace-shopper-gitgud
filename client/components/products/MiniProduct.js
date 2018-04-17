import React from 'react'

const MiniProduct = (props) => {
  // const { name, description, price, imageUrl } = props; 
  const name = "Skyrim",
        description = "This is a wonderful game set in the province of skyrim. Beware of dragons and bandits",
        price = "$15.99",
        imageUrl = "https://cdn3.dualshockers.com/wp-content/uploads/2017/06/tes-skyrim_switch_frontcover-07-RP_1496832137.jpg"
  return (
    <div className='mini-product-container'>
      <div className='mini-product-top-row'>
        <div className='mini-product-container-image'>
          <img src={imageUrl} alt="test" />
        </div>
        <div className='mini-product-container-name-price'>
          <h3 id="mini-product-name">{name}</h3>
          <h3 id="mini-product-price">{price}</h3>
        </div>
      </div>
        <div className="mini-product-container-description">
          <p id="mini-product-description">{description}</p>
        </div>
    </div>
  );
};

export default MiniProduct;