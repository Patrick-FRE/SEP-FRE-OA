import React from 'react';

const ResultsDisplay = (props) => {
    const gridItems = props.data.map((album, i) => {
        return (
            <ul key={album.collectionId}>
                <li>
                    {album.artistName}
                </li>
                <li>
                    <img src={album.artworkUrl100} />
                </li>
                <li>
                    {album.collectionName}
                </li>
            </ul>
        )
    })
    return (
        <div>
            {gridItems}
        </div>
    )
}

export default ResultsDisplay;