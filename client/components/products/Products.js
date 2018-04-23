import React from 'react'
import MiniProduct from './MiniProduct';
import {connect} from 'react-redux'
import SearchBar from './SearchBar'


const Products = (props) => {
  const {products} = props;
  let render;
  if (products.length) {
    render = products.map(product => (
      <MiniProduct key={product.id} product={product} />
    ))
  } else {
    render = <p>No games match your search criteria...</p>
  }

  return (
    <div className='products-container'>
      <div className='products-container-search-bar sidebar bgcolor-darkslateblue'>
        <SearchBar />
      </div>
      <div className='products-list interactive-container'>
        {render}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  let {searchTerm, products, selectedCategory} = state;
  if (searchTerm) {
    console.log("got to searchTerm");
    products = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  if (selectedCategory) {
    products = products.filter(product => product.categories[0] && product.categories[0].title === selectedCategory)
    
  }
  return {
    products,
  };
};

export default connect(mapStateToProps, null)(Products);
