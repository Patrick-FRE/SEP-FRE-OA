import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      artist: ''
    }
  }

  handleSearch = e => {
    this.setState({
      artist: e.target.value
    })
  }

  handleKeyPress = e => {
    console.log(e.key)
    if(e.key === 'Enter') {
      this.props.search(this.state.artist);
    }
  }


  render(){
    return (
      <div>
        <div className="input-box">
          <header className="searchbar-header">
            <input className="input-bar" value ={this.state.artist} onChange={this.handleSearch} onKeyPress={this.handleKeyPress}placeholder="Search.."/>
            </header>
        </div> 
      </div>

    )
  }
}

export default Search;