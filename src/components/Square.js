import React from "react";

const Square = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.value}</button>
    </div>
  );
};

export default Square;
