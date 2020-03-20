// const View = (() => {
//   const DOMContent = {
//     inputElement: ".itunes-search-bar",
//     itunesListContent: ".itunes-list-content",
//     itunesListContentItem: ".itunes-list-content__item"
//   }
//   const render = (template, element) => {
//     element.innerHTML = template;
//   };
//   return {
//     DOMContent,
//     render
//   };
// })();

// const ITunesAPI = (() => {
//   const baseURL = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;
  
//   const getAlbums = () => {
//     const method = "GET",
//     return fetch(apiUrl, {
//       method: method,
//     })
//   }
// })();

// const Model = (ITunesAPI => {
//   class ITunes {
//     constructor(artistName, artistId, artworkUrl, collectionName) {
//       this.artistName = artistName;
//       this.artistId = artistId;
//       this.artworkUrl = artworkUrl;
//       this.collectionName = collectionName;
//     }
//     generateTemplate() {
//       return `<li class="itunes-list-content__item"><div class="itunes-list-content__item-container><img src=${this.artworkUrl} /><span class="title">${this.collectionName}</span><span class="artist">${this.artistName}</span></div></li>`
//     }
//   }
//   const getAlbums = () => {
//     return ITunesAPI.getAlbums()
//     .then(data => data.json())
//     .then(data => {
//       return data.data;
//     });
//   };

//   return {
//     getAlbums
//   };
// })(ITunesAPI);

// const Controller = ((view, model) => {
//   const inputEle = document.querySelector(view.DOMContent.inputElement);
//   const itunesListContent = document.querySelector(view.DOMContent.itunesListContent);

//   const updateUIItunesList = (itunesList, renderElement) => {
//     let temp = itunesList.map(itunes => {
//       return itunes.generateTemplate();
//     }).join('');
//     view.render(tmp, renderElement);
//   };

//   class State {
//     constructor(){
//       this._userInput = "",
//       this._itunesList = getAlbums();
//     }
//     get itunesList() {
//       return this._itunesList;
//     }
//     set itunesList(newValue) {
//       this._itunesList = newValue;
//       updateUIItunesList(this._itunesList, todoListContent)
//     }
//     get userInput() {
//       return this._userInput;
//     }
//     set userInput(newValue) {
//       this._userInput = newValue;
//       inputEle.value = this._userInput;
//     }
//   }
//   let state = new State();

//   const setUpEvent = () => {
//     let inputElement = document.querySelector(view.DOMContent.input-element);
//     inputElement.addEventListener("keyup", event => {
//       state.userInput = event.target.value;
//       if (event.keyCode === 13){
//         console.log("Enter");
//         model.getAlbums(state.userInput)
//         .then(data => {
//           if (data.artistName === state.userInput) {
//             setUpData();
//           }
//         }); 
//       }
//     });
//   }

//   const setUpData = () => {
//     Model.getAlbums().then(data => {
//       state.itunesList = data.filter(album => {
//         const {artistName, artistId, artworkUrl, collectionName} = album;

//       })
//     })
//   };

//   const init = () => {
//     console.log("app is working");
//     setUpEvent();
//     setUpData();
//   };
//   return {
//     init
//   };
// })(View, Model);

// window.addEventListener("DOMContentLoaded", () => {
//   Controller.init();
// });
const itunesSubmit = document.querySelector('.itunes-submit');
const inputElement = document.querySelector('.itunes-search-bar');
const itunesListContent = document.querySelector('.itunes-list-content');
let ARTIST_NAME =  inputElement.value;
const itunesURL = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;


function clickHandler () {
  itunesSubmit.addEventListener('submit', event => {
    event.preventDefault();
    fetch(itunesURL)
      .then(response => response.json())
      .then(data => {
        let artistAlbum = '';
        data.forEach(album => {
          const {collectionName, artworkUrl100} = album.results;
          artistAlbum += `<li class="itunes-list-content__item">
                      <div class="itunes-list-content__item-container>
                        <img src=${artworkUrl100} />
                        <span class="title">${collectionName}</span>
                      </div>
                    </li>`
        }).join("");
      })
      .catch(error => console.error(error))
  });
  //insert innerHTML
}

function init() {
  clickHandler();
}

init();