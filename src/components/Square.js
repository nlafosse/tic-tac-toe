import React from "react";

const Square = (props) => {
  return (
    <div className="cell-btn">
      <button className="cell-btn" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};

export default Square;
