import React from 'react';
import Search from './Search';
import AlbumList from './AlbumList';
import ResultCountMsg from './ResultCountMsg';

class App extends React.Component{
  state = {
    albums: []
  }

  search = artist => {
    
    // let response = await fetch(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=50`)
    // let data = await response.json()
    
    // console.log(data)
    fetch(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=50`)
    .then(response => response.json())
    .then(data => this.setState({ albums: data.results, artist}))
  }

  componentDidMount = () => {
    this.search('Patrick');
    
  }

  render = () => {
    return(
      <div>
          <Search search={this.search} />
          <ResultCountMsg count={this.state.albums.length} artist={this.state.artist} />
          <AlbumList albums={this.state.albums} />
      </div>
    )
  }

}


export default App;