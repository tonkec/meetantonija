import React from "react";
import { Link } from "react-router-dom";
import button from "stylesheets/button";
import navigation from "./stylesheets/navigation";
import navOpener from "./stylesheets/navOpener";
import data from "components/data";

class Navigation extends React.Component {
  state = {
    visible: false,
    location: ""
  };

  toggleVisibility = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };

  escFunction = event => {
    if (event.keyCode === 27) {
      this.toggleVisibility();
    }
  };

  componentDidMount() {
    let location = window.location.href;
    this.setState({ location });
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    let { visible } = this.state;
    return (
      <>
        <button
          className={`${navOpener} ${button}`}
          onClick={this.toggleVisibility}
        >
          MENU
        </button>
        <nav className={`${navigation} ${visible ? "show" : ""}`}>
          <div
            className={`navigation__inner navigation__inner--left ${
              visible ? "show" : ""
            }`}
          ></div>
          <div
            className={`navigation__inner navigation__inner--right ${
              visible ? "show" : ""
            }`}
          >
            <ul className="navigation__list">
              {data.items.map((item, i) => {
                let a = item.title.replace(/ /g, "").toLowerCase();
                return (
                  <li key={i}>
                    <Link
                      to={a}
                      onClick={this.toggleVisibility}
                      className={button}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navigation;
