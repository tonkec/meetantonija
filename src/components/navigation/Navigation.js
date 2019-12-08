import React from "react";
import { Link } from "react-router-dom";
import navigation from "./stylesheets/navigation";
import navOpener from "./stylesheets/navOpener";
import data from "./../data";
import normalTitle from "./../helpers/normalTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
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
          className={`${navOpener} button`}
          onClick={this.toggleVisibility}
        >
          MENU
        </button>
        <div
          className={`${navigation} navigation__inner navigation__inner--left ${
            visible ? "show" : ""
          }`}
        >
          <ul className="navigation__list">
            <li>
              <Link to="/" onClick={this.toggleVisibility} className="button">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={this.toggleVisibility}
                className="button"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={this.toggleVisibility}
                className="button"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                onClick={this.toggleVisibility}
                className="button"
                href="https://mytwocents.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`${navigation} navigation__inner navigation__inner--right ${
            visible ? "show" : ""
          }`}
        >
          <ul className="navigation__list">
            {data.client.map((item, i) => {
              let title = normalTitle(item.title);
              return (
                <li key={i}>
                  <Link
                    to={`${this.state.location}/${title}`}
                    onClick={this.toggleVisibility}
                    className="button"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}

            {data.hobby.map((item, i) => {
              let title = normalTitle(item.title);
              return (
                <li key={i}>
                  <Link
                    to={`${this.state.location}/${title}`}
                    onClick={this.toggleVisibility}
                    className="button"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
