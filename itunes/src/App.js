import React from 'react';
import './App.css';
import SearchArtist from './components/SearchArtist';
import ItunesAlbumsList from './components/ItunesAlbumsList';
import SearchResults from './components/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }
  searchArtist = artist => {
    fetch(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=50`)
    .then(response => response.json())
    .then(data => this.setState({albums: data.results, artist}));
  }
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <SearchArtist search={this.searchArtist} />
          <SearchResults albumCount={this.state.albums.length} artist={this.state.artist}/>
          <ItunesAlbumsList albums={this.state.albums}/>
        </header>
      </div>
    );
  }
}

export default App;
