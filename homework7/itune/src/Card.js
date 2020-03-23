import React from "react";

const Card = ({ img, name }) => {
  return (
    <div className="album-card">
      <img src={img} alt="album" />
      <div className="album-name">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
