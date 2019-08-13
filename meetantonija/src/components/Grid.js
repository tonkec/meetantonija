import React from "react";

const Grid = props => (
  <div className={props.container}>
    <div className="row">{props.children}</div>
  </div>
);

export default Grid;
