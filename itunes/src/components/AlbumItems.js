import React from 'react'

const AlbumItems = ({albumCover, collection}) => {
  return (
    <>
      <li class="itunes-list-content__item-container">
        <img class="cover" src={albumCover}/>
        <h6 class="album-title">{collection}</h6>
      </li>
    </>
  );
}

export default AlbumItems;