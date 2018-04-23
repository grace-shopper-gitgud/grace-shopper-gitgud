import React from 'react'
import { connect } from 'react-redux'
import { Products } from './Products';
import { searchButtonPressed } from '../../store/searchTerm';
import { categorySelected } from '../../store/category';
// here is a test comment

class SearchBar extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      searchTerm: '',
      selectedCategory: ''
    };
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSearch(event) {
    event.preventDefault();
    this.props.searchButtonPressed(this.state.searchTerm);
  }

  async handleClick(event) {
    await this.setState({selectedCategory: event.target.value})
    this.props.categorySelected(this.state.selectedCategory)
  }

  render () {
    return (
    <div>
      <div className="store-categories">
        <form>
          <div>
            <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />

            <input type="button" id="category1" name="action" onClick={this.handleClick} value="ACTION" />

            <input type="button" id="category2" name="horror" onClick={this.handleClick} value="HORROR" />

            <input type="button" id="category3" name="adventure" onClick={this.handleClick} value="ADVENTURE" />

            <label> CLEAR </label>
            <input type="button" id="clear" name="clear" onClick={this.handleClick} value="" />

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
    searchTerm: state.searchTerm,
    selectedCategory: state.selectedCategory
  };
};

const mapDispatch = (dispatch) => {
  return {
    searchButtonPressed: (searchTerm) => dispatch(searchButtonPressed(searchTerm)),
    categorySelected: (selectedCategory) => dispatch(categorySelected(selectedCategory))
  }
}

export default connect(mapStateToProps, mapDispatch)(SearchBar);
