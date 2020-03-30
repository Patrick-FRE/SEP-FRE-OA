import React from "react";

const Input = props => {
  return (
    <input
      className={props.clsName}
      type={props.type}
      value={props.inputValue}
      name={props.name}
      onChange={props.changeHandler}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
