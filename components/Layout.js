import Nav from "./Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Layout({ children }) {
  const containerRef = useRef();
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      containerRef.current.classList.add("removeContainer");
    }, 2000);
  }, []);
  return (
    <>
      <motion.div
        className="animationContainer"
        variants={container}
        initial="hidden"
        animate="visible"
        ref={containerRef}
      >
        <div>
          {[0, 1, 2, 3].map((index) => (
            <motion.div key={index} className="item" variants={item} />
          ))}
        </div>
      </motion.div>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
