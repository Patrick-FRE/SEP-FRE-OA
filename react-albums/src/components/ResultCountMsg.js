import React from 'react';

const ResultCountMsg = ({ count, artist }) => {
  let resultCount;
  if(count && artist) {
    resultCount = `${count} Results Found for ${artist}`
  } else {
    resultCount = "Search Albums by Artist Name:"
  }

  return (
      <div className="search-result-header">
          <h1 className="search-message">{resultCount}</h1>
      </div>
  )
 
}
export default ResultCountMsg;


