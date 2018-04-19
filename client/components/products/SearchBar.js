import React from 'react'
import { connect } from 'react-redux'
import { Products } from './Products';
import { searchButtonPressed, searchIsPressed } from '../../store/searchTerm';


class SearchBar extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchTerm: ''
    };
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSearch(event) {
    event.preventDefault();
    this.props.searchIsPressed(this.state.searchTerm);
  }

  render () {
    return (
    <div>
      <div className="store-categories">
        <form>
          <div>
            <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />

            <label htmlFor="category1" >Category 1</label>
            <input type="checkbox" id="category1" name="category1" value="category1"/>
            
            <label htmlFor="category2" >Category 1</label>
            <input type="checkbox" id="category2" name="category2" value="category2"/> 
            
            <label htmlFor="category3" >Category 1</label>
            <input type="checkbox" id="category3" name="category3" value="category3"/>
          </div>
          
          <div>
            <button type="submit" onClick={this.handleSearch} >Search</button>
          </div>
        </form>
      </div>
    </div>
    )
  }     
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  };
};

const mapDispatch = (dispatch) => {
  return {
    searchIsPressed: (searchTerm) => dispatch(searchIsPressed(searchTerm))
  }
}

export default connect(mapStateToProps, mapDispatch)(SearchBar);
