import React from 'react';

class Search extends React.Component {
  render(){
    return (
      <div>
        <div className="input-box">
          <header className="searchbar-header">
            <input className="input-bar" placeholder="Search.."/>
            </header>
        </div>
        <div className="search-result-header">
            <h1 className="search-message">Search Albums by Artist Name:</h1>
        </div>
      </div>

    )
  }
}

export default Search;