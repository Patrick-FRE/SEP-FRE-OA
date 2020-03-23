import React from "react";
import Card from "./Card";

const AlbumList = ({ list }) => {
  return (
    <ul className="album-list">
      {list &&
        list.map((el, idx) => (
          <Card key={idx} img={el.artworkUrl100} name={el.collectionName} />
        ))}
    </ul>
  );
};

export default AlbumList;
