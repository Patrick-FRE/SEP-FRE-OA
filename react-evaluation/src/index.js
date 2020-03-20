const input = document.querySelector('.input-bar')
const albumListContent = document.querySelector('.album-list-content');
const displaySpan = document.querySelector('.result');


const render = (template, element) => {
    element.innerHTML = template;
  };

const setUpEvent = () => {
  input.addEventListener('keyup', event => {
      let newInput = '';
      if(event.keyCode === 13) {
          newInput = event.target.value;
          console.log('artist is', newInput)
          fetchAblum(newInput);
      } 
  });

}


const fetchAblum = async (ARTIST_NAME) => {
    let response = await fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`, {
      method:'GET'
    })
    let data = await response.json()
    //console.log('fetched albums', data.results);
    let albums = data.results.map(artist => `<li class="album-item"><div class="album-detail"><img src="${artist.artworkUrl60}"/>${artist.collectionName}</div></li>`).join('');
    //console.log('albums', albums)
    render(albums, albumListContent)
    let resultTemplate = `Found ${albums.length} Results, see below`
    render(resultTemplate, displaySpan);

  }

function init() {
    setUpEvent();
}

init();