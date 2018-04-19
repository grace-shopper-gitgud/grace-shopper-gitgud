import React from 'react'
import MiniProduct from './MiniProduct';
import {connect} from 'react-redux'
import SearchBar from './SearchBar'

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div className='products-container'>
      <div className='products-container-search-bar  sidebar bgcolor-darkslateblue'>
        <SearchBar />
      </div>
      <div className='products-list'>
        {this.props.searchTerm ? this.props.products.filter(product => {
          return product.title.toLowerCase().includes(this.props.searchTerm);
        }).map((product) => {
          return <MiniProduct key={product.id} product={product} />
        }) : this.props.products.map((product) => {
          return <MiniProduct key={product.id} product={product} />
        })}
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    searchTerm: state.searchTerm
  };
};

export default connect(mapStateToProps, null)(Products);
