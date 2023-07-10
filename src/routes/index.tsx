import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from 'pages/Homepage/Homepage';
import Project from 'pages/Project';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/project/:id" element={<Project />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
