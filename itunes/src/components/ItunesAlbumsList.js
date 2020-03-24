import React from 'react'
import AlbumItems from './AlbumItems.js';

const ItunesAlbumsList = ({albums}) => {
  const albumList = albums.map(({collectionName, artworkUrl100}) => <AlbumItems collection={collectionName} albumCover={artworkUrl100}/>);
  return (
    <>
      <main class="itunes-list">
        <section class="itunes">
          <ul class="itunes-list-content">
            {albumList}
          </ul>
        </section>
      </main>
    </>
  );
}

export default ItunesAlbumsList;