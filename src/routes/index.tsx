import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from 'pages/Homepage/Homepage';
import Project from 'pages/Project';
import { AnimatePresence } from 'framer-motion';
import Notes from 'pages/NotesPage';
import SingleNote from 'pages/NotesPage/SingleNote';
import NotFoundPage from 'pages/NotFoundPage';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import AboutPage from 'pages/AboutPage/AboutPage';
import ProjectsPage from 'pages/ProjectsPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
      <ErrorBoundary location={location}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:id" element={<SingleNote />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
