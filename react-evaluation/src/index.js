const View = (() => {
     const DOMElement = {
          inputBar: ".input-bar",
          albumListContent: ".album-list-content",
          albumListContentItem: ".album-list-content__item",
          totalSearchCount: ".total-search-count"

     }
     const render = (tmp, element) => element.innerHTML = tmp;
     return {
          DOMElement, render
     }
})();

const Model = (() => {
     const generateTemplate = (list) => {
          return ` <li class="album-list-content__item"  id=${list.artistId} > <img class="album-list-image" src=${list.artworkUrl100}/> <p> ${list.collectionName} </p> </li>`;
     }
     const generateResultTemplate = (res, name) => {
          return `<p>${res} results for "${name}"</P>`
     }
     return {
          generateTemplate, generateResultTemplate
     };
})();

///////----------- ALBUM API ---------------///////

const albumApi = (() => {
     let patric = "patric";
     const albumListContent = document.querySelector(
          View.DOMElement.albumListContent
     );
     const totalSearchCount = document.querySelector(
          View.DOMElement.totalSearchCount
     );
     const findAlbum = async (name) => {
          const baseUrl = `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=50`;
          try {
               let response = await (await fetch(baseUrl, { method: 'GET', })).json();
               let resultCount = response.resultCount;
               let album = response.results;
               updateUIresultCount(resultCount, name, totalSearchCount);
               updateUIAlbumList(album, albumListContent)
          } catch (err) {
               console.log("Fetching err:", err);
          }

     }
     ////----------Insert FETCHED Album List into dom and render --------------////
     const updateUIAlbumList = (albumList, renderElement) => {
          let tmp = albumList
               .map(album => {
                    return Model.generateTemplate(album);
               })
               .join("");
          View.render(tmp, renderElement);
     };
     const updateUIresultCount = (resultCount, name, renderElement) => {
          const tmp = Model.generateResultTemplate(resultCount, name, renderElement)
          View.render(tmp, renderElement)
     }
     return {
          findAlbum,
          updateUIAlbumList
     }
})();

const Controller = ((view, model) => {
     const inputElement = document.querySelector(view.DOMElement.inputBar);
     const setUpEvent = () => {
          inputElement.addEventListener("keyup", event => {
               inputElement.value = event.target.value;
               if (event.key === "Enter") {
                    let name = inputElement.value;
                    albumApi.findAlbum(name);
                    inputElement.value = "";
               }
          });
     };
     const init = async () => {
          setUpEvent();
     };
     return {
          init,

     };
})(View, Model);

window.addEventListener("DOMContentLoaded", async () => {
     Controller.init();
});