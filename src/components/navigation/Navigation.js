import React from "react";
import { NavLink } from "react-router-dom";
import Headroom from "react-headroom";
class Navigation extends React.Component {
  render() {
    return (
      <Headroom style={{ zIndex: 999 }}>
        <nav className="navigation__inner navigation__inner--right">
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
                className="contact"
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
        </nav>
      </Headroom>
    );
  }
}

export default Navigation;
