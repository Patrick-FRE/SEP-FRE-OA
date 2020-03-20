const View = (() => {
  const DOMString = {
    inputElement: ".input-bar",
    albumListContent: ".album-list-content",
    albumHeaderContent: ".album-header-content"
  };

  const render = (template, element) => {
    element.innerHTML = template;
  };

  return {
    DOMString,
    render
  };
})();

const albumAPI = (() => {
  const getAlbums = name => {
    return fetch(
      `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=50`
    );
  };

  return {
    getAlbums
  };
})();

const Model = (albumAPI => {
  class Album {
    constructor(name, cover, id) {
      this.name = name;
      this.cover = cover;
      this.id = id;
    }
  }

  const getAlbums = name => {
    return albumAPI
      .getAlbums(name)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        return data.results;
      });
  };

  return {
    Album,
    getAlbums
  };
})(albumAPI);

const Controller = ((view, model) => {
  const inputEle = document.querySelector(view.DOMString.inputElement);
  const albumListContent = document.querySelector(
    view.DOMString.albumListContent
  );
  const albumHeaderContent = document.querySelector(
    view.DOMString.albumHeaderContent
  );

  const updateUIAlbumList = (albumList, renderElement) => {
    let tmp = albumList
      .map(album => {
        console.log("album", album);
        return `<div class="album-card"><img class="album-image" src=${album.artworkUrl100} alt="cover"><div class="album-name"><p>${album.collectionName}</p></div></div>`;
      })
      .join("");
    view.render(tmp, renderElement);
  };

  const updateUIHeader = (searchResNum, searchInput, renderElement) => {
    let tmp = `${searchResNum} results for "${searchInput}" `;
    view.render(tmp, renderElement);
  };

  class State {
    constructor() {
      this._userInput = "";
      this._albumList = [];
    }

    get albumList() {
      return this._albumList;
    }

    set albumList(newValue) {
      this._albumList = newValue;
      updateUIAlbumList(this._albumList, albumListContent);
    }

    get userInput() {
      return this._userInput;
    }

    set userInput(newValue) {
      console.log("set");
      this._userInput = newValue;
      inputEle.value = this._userInput;
    }
  }

  let state = new State();

  const setUpEvent = () => {
    console.log("setUpEvent");
    let inputElement = document.querySelector(view.DOMString.inputElement);
    inputElement.addEventListener("keyup", event => {
      state.userInput = event.target.value;
      if (event.keyCode === 13) {
        console.log("Enter");
        model.getAlbums(state.userInput).then(data => {
          state.albumList = data;
          updateUIHeader(data.length, state.userInput, albumHeaderContent);
        });
      }
    });
  };

  const init = () => {
    setUpEvent();
  };

  return {
    init
  };
})(View, Model);

window.addEventListener("DOMContentLoaded", () => {
  Controller.init();
});
