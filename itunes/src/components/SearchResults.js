import React from 'react';

const SearchResults = ({albumCount, artist}) => {
  return (
    <>
      <div class="album-count-container">
        <h3 class="album-count">Results for {artist} : {albumCount}</h3>
      </div>
    </>
  );
}

export default SearchResults;