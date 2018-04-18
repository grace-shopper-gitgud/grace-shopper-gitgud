import React from 'react'
import MiniProduct from './MiniProduct';
import {connect} from 'react-redux'

const Products = (props) => {
  return (
    <div className='products-container'>
      <div className='products-container-search-bar bgcolor-darkslateblue'>
        <h1>Search</h1>
      </div>
      <div className='products-list'>
        {props.products.map((product) => {
          return <MiniProduct key={product.id} product={product} />
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, null)(Products);
