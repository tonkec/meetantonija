import React, { useRef } from "react";
import { header } from "./stylesheets/header";
import Particle from "../particle/Particle";

const Header = props => {
  const numberOfParticles = 100;
  const particles = [];

  const createParticles = () => {
    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(<Particle key={i} particleKey={i} />);
    }

    animateParticles();

    return particles;
  };

  const animateParticles = () => {
    particles.forEach((el, i, ra) => {
      console.log(el);
      // let to = {
      //   x: Math.random() * (i % 2 === 0 ? -11 : 11),
      //   y: Math.random() * 12
      // };
      // let anim = el.animate(
      //   [
      //     { transform: "translate(0, 0)" },
      //     { transform: `translate(${to.x}rem, ${to.y}rem)` }
      //   ],
      //   {
      //     duration: (Math.random() + 1) * 2000, // random duration
      //     direction: "alternate",
      //     fill: "both",
      //     iterations: Infinity,
      //     easing: "ease-in-out"
      //   }
      // );
    });
  };

  return (
    <header className={header}>
      {createParticles()}
      <div className="container-fluid">
        <div className="row">{props.children}</div>
      </div>
    </header>
  );
};

export default Header;
