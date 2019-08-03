import React from "react";
import { header } from "./stylesheets/Header";
const Header = () => (
  <header className={header}>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1 className="header__heading">
            I’m <b>Antonija</b> - a freelance <b>front-end developer</b> based
            in Zagreb. I am a <b>glue</b> that holds back-end developers and
            designers <b>together.</b>
          </h1>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
