import React from 'react'

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    };
  }

  render () {
    return (
    <div>
      <div className="store-categories">
        <htmlForm>
          <div>
            <input type="text" />
            <label htmlFor="category1" >Category 1</label>
            <input type="checkbox" id="category1" name="category1" value="category1"/>
            
            <label htmlFor="category2" >Category 1</label>
            <input type="checkbox" id="category2" name="category2" value="category2"/> 
            
            <label htmlFor="category3" >Category 1</label>
            <input type="checkbox" id="category3" name="category3" value="category3"/>
          </div>
          <div>
            <button type="submit">Search</button>
          </div>
        </htmlForm>
      </div>
    </div>
    )
  }     
}

export default SearchBar;
