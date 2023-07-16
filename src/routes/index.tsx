import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from 'pages/Homepage/Homepage';
import Project from 'pages/Project';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
