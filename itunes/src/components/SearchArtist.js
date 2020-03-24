import React from 'react';

class SearchArtist extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      artist: ''
    };
  }
  search = event => {
    this.setState({ artist: event.target.value });
  }
  enter = event => {
    if (event.key === 'Enter') return this.props.search(this.state.artist);
  }
  render = () => {
    return (
      <>
        <header class="itunes-search-header">
          <div class="itunes-search-header__item">
            <input class="itunes-search-bar"
                   placeholder="Search artist..."
                   value={this.state.artist}
                   onChange={this.search}
                   onKeyPress={this.enter}
            />
          </div>
        </header>
      </>
    );
  }
}

export default SearchArtist;