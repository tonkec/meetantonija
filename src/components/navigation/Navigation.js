import React from "react";
import { NavLink } from "react-router-dom";
class Navigation extends React.Component {
  state = {
    visible: false,
    location: ""
  };

  render() {
    return (
      <>
        <div className="navigation__inner navigation__inner--right">
          <ul className="navigation__list">
            <li>
              <NavLink
                exact
                to="/"
                activeStyle={{
                  fontWeight: "bold"
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/projects"
                activeStyle={{
                  fontWeight: "bold"
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                activeStyle={{
                  fontWeight: "bold"
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
                activeStyle={{
                  fontWeight: "bold"
                }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a
                href="https://mytwocents.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
