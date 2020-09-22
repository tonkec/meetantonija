import React from "react";
import { header } from "./stylesheets/header";
import Particles from "react-particles-js";

const Header = props => (
  <header className={header}>
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false
            }
          },
          size: {
            value: 10,
            random: true
          },
          move: {
            direction: "bottom",
            out_mode: "out"
          },
          line_linked: {
            enable: false
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "remove"
            }
          },
          modes: {
            remove: {
              particles_nb: 10
            }
          }
        }
      }}
    />
    <div className="container-fluid header__container">
      <div className="row">{props.children}</div>
    </div>
  </header>
);

export default Header;
