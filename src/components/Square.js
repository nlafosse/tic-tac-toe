import React from "react";

const Square = (props) => {
  console.log("props", props);
  return (
    <div>
      <button onClick={props.onClick}>{props.value}</button>
    </div>
  );
};

export default Square;
