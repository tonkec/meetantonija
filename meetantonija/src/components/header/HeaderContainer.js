import React from "react";
import { header } from "./stylesheets/header";
const Header = props => (
  <header className={header}>
    <div className="container-fluid">
      <div className="row">{props.children}</div>
    </div>
  </header>
);

export default Header;
