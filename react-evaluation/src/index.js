const searchElement = document.querySelector(".search-bar")

// console.log(searchElement);
let ARTIST_NAME;

searchElement.addEventListener("keypress", event => {
    if (event.keyCode === 13) {
        event.preventDefault();
        console.log("Enter");
        ARTIST_NAME = event.target.value;
        // console.log(ARTIST_NAME);
        getTodos();
    }
    
});

let getTodos = () => {
    fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let result = ``;
        data.results.forEach(user => {
          const { collectionName, artworkUrl100 } = user;
          console.log(collectionName);
          result += `<div class="card">
              <div><img src=${artworkUrl100}></div>
              <p>${collectionName}</p>
          </div>`
          document.getElementById("cards").innerHTML = result;
        });
      });
  };

 