import React from "react";

const Item = props => {
  return (
    <li className={props.liClass}>
      <div onClick={props.clickHandler} className={props.wrapClass}>
        {props.render()}
      </div>
    </li>
  );
};

export default Item;
