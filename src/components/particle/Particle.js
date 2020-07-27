import React, { useRef, useEffect } from "react";

const Particle = ({ particleKey }) => {
  const colors = ["#f5f5f5", "#ffffff", "#fafafa"];
  const ball = useRef(null);

  useEffect(() => {
    styleParticle();
  });

  const styleParticle = () => {
    ball.current.style.borderColor =
      colors[Math.floor(Math.random() * colors.length)];
    ball.current.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.current.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.current.style.width = `${Math.random() * 2}rem`;
    ball.current.style.height = ball.current.style.width;

    console.log(particleKey);

    const x = Math.random() * (particleKey % 2 === 0 ? -11 : 11);
    const y = Math.random() * 12;

    // { transform: "translate(0, 0)" },
    // { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ball.current.style.transform = `translate(${x}rem, ${y}rem)`;
  };

  return <div className="ball" ref={ball}></div>;
};

export default Particle;
