import React from "react";
import { header } from "./stylesheets/header";
import Particle from "../particle/Particle";

const Header = props => {
  const numberOfParticles = 100;
  const particles = [];

  const createParticles = () => {
    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(<Particle key={i} particleKey={i} />);
    }

    return particles;
  };

  return (
    <header className={header}>
      {createParticles()}
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
    </header>
  );
};

export default Header;
