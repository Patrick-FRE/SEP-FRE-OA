import React from 'react';

const AlbumListEntry = ({cover, collectionName}) => {
  
    //return <div>album</div>
    return <li className="album-item"><div className="album-detail"><img src={cover} alt=''/>{collectionName}</div></li>
}

export default AlbumListEntry