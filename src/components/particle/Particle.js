import React, { useRef, useEffect } from "react";

const Particle = () => {
  const colors = ["#f5f5f5", "#ffffff", "#fafafa"];
  const particle = useRef(null);

  useEffect(() => {
    styleParticle();
  });

  const styleParticle = () => {
    particle.current.style.borderColor =
      colors[Math.floor(Math.random() * colors.length)];
    particle.current.style.left = `${Math.floor(Math.random() * 100)}vw`;
    particle.current.style.top = `${Math.floor(Math.random() * 100)}vh`;
    particle.current.style.width = `${Math.random() * 2}rem`;
    particle.current.style.height = particle.current.style.width;
  };

  return <div className="particle" ref={particle}></div>;
};

export default Particle;
