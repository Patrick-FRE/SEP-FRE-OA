import React from 'react';
import AlbumListEntry from './AlbumListEntry';

const AlbumList = ({ albums }) => {

  return(
    <main class="album-content">
            <ul className="album-list-content">
              {albums.map(({artworkUrl100, collectionName, collectionId})=> <AlbumListEntry cover={artworkUrl100} collectionName={collectionName} key={collectionId}/>)}
            </ul>
    </main>
  ) 
}

export default AlbumList;