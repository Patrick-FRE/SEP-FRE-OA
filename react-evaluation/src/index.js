


//get itunes data

document.querySelector('.submit-artist').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted');
    const ARTIST_NAME = document.querySelector('.artist-input').value
    console.log(ARTIST_NAME)
    const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log('data', data.results)
            addRows(data.results)
        })
        .catch(err => console.error(err))
})

const addRows = (data) => {
    console.log('add rows initiated')
    let result = '';
    for (let i = 0; i < data.length; i += 2) {
        if (i + 1 !== data.length) {
            result += `
        <div class="flex-grid">
            <div class="col">
                <div class = 'album-name' >${data[i].collectionName}</div>
                <img src=${data[i].artworkUrl100}>
            </div>
            <div class="col">
                <div class = 'album-name' >${data[i + 1].collectionName}</div>
                <img src=${data[i + 1].artworkUrl100}>
            </div>
        </div>
        `
            console.log(result);
        }
        else {
            result += `
            <div class="flex-grid">
                <div class="col">
                    <div class = 'album-name'>${data[i].collectionName}</div>
                    <img src=${data[i].artworkUrl100}>
                </div>
            </div>
            `
        }
    }
    document.querySelector('.results-container').insertAdjacentHTML('beforeend', result);
}