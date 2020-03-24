import React from 'react';

const AlbumListEntry = ({cover, collectionName}) => {
  
    //return <div>album</div>
    return <li className="album-item"><img src={cover} alt=''/><div className="collection-name">{collectionName}</div></li>
}

export default AlbumListEntry