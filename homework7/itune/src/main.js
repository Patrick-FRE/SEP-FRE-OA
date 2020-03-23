import React, { Component } from "react";
import AlbumList from "./AlbumList";

class Main extends Component {
  state = { searchInput: "", albumList: [] };

  changeHandler = event => {
    this.setState({ searchInput: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log("submit");
    fetch(
      `https://itunes.apple.com/search?term=${this.state.searchInput}&media=music&entity=album&attribute=artistTerm&limit=50`
    )
      .then(data => data.json())
      .then(data => this.setState({ albumList: data.results }));
  };

  render() {
    let resultNum = this.state.albumList.length;
    return (
      <>
        <div>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              value={this.state.searchInput}
              onChange={this.changeHandler}
              placeholder="...artist name"
            />
          </form>
        </div>
        {resultNum === 0 ? (
          <p>Search Album by ArtistName</p>
        ) : (
          <p>
            {resultNum} results for {this.state.searchInput}
          </p>
        )}
        <AlbumList list={this.state.albumList} />;
      </>
    );
  }
}

export default Main;
