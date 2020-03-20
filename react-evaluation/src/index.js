const View = (() => {
    const DOMString = {
        inputElement: ".search-header__search-bar",
        searchContentList: ".search-content-list",
        searchContentItem: ".search-content-list__item"
    };
  
    const render = (template, element) => {
        element.innerHTML = template;
    };
  
    return {
        DOMString,
        render
    };
  })();
  
const TodosAPI = (() => {
    const baseURL_front = "https://itunes.apple.com/search?term=";
    const baseURL_end = "&media=music&entity=album&attribute=artistTerm&limit=50";

    const getAlbum = (artistName) => {
        const apiUrl = baseURL_front + artistName + baseURL_end;
        const method = "GET";
        return fetch(apiUrl, {
            method: method,
            headers: {
            "Content-Type": "application/json"
            }
        });
    };
  
    return {
        getAlbum
    };
})();
  
const Model = (todoAPI => {
    class Album {
        constructor(coverSrc, name) {
            this.coverSrc = coverSrc;
            this.name = name;
        }
  
        generateTemplate() {
            //console.log(this.coverSrc);
            return `<figure class="search-content-list__item"><img src=${this.coverSrc} class="album-image"><figcaption class="figcaption">${this.name}</figcaption></figure>`;
        }
    }
  
    const getAlbum = (artistName) => {
        return todoAPI
            .getAlbum(artistName)
            .then(data => data.json())
            .then(data => {
                //console.log(data);
                return data.results;
            });
    };
  
    return {
        Album,
        getAlbum
    };
})(TodosAPI);
  
const Controller = ((view, model) => {
    const inputEle = document.querySelector(view.DOMString.inputElement);
    const searchContentList = document.querySelector(
        view.DOMString.searchContentList
    );
    const searchContentItem = document.querySelector(view.DOMString.searchContentItem);
  
    const updateUISearchList = (searchList, renderElement) => {
        let tmp = searchList
            .map(album => {
            return album.generateTemplate();
            })
            .join("");
        //console.log("Tmp", tmp);
        view.render(tmp, renderElement);
    };
  
    class State {
        constructor() {
            this._userInput = "";
            this._searchList = [];
      }
  
        get searchList() {
            return this._searchList;
        }
  
        set searchList(newValue) {
            this._searchList = newValue;
            updateUISearchList(this._searchList, searchContentList);
        }
  
        get userInput() {
            return this._userInput;
        }
  
        set userInput(newValue) {
            this._userInput = newValue;
            inputEle.value = this._userInput;
        }
    }
  
    let state = new State();
  
    const setUpEvent = () => {
        //console.log("setUpEvent");
        let inputElement = document.querySelector(view.DOMString.inputElement);
        //console.log(inputElement);
        inputElement.addEventListener("keyup", event => {
            state.userInput = event.target.value;
            if (event.keyCode === 13) {
                //console.log("Enter");
            /// Add New Todo
                model.getAlbum(state.userInput).then(data => {
                    setUpData(data);
                });
            /// clean the UserInput
                state.userInput = "";
            }
        });
    };

    const setUpData = (data) => {
        //console.log(data);
        state.searchList = data.map(album => new model.Album(album.artworkUrl60, album.collectionName));
    };
  
    const init = () => {
        //console.log("app is working");
        setUpEvent();
    };
  
    return {
        init
    };
})(View, Model);
  
window.addEventListener("DOMContentLoaded", () => {
    Controller.init();
});
  