import React from 'react'
import MiniProduct from './MiniProduct';

export const Products = () => {
  return (
    <div className='products-container'>
      <div id='products-container-search-bar'>
        <h1>Search</h1>
      </div>
      <div className='test-border-dot'>
        <MiniProduct />
      </div>
    </div>
  );
};
