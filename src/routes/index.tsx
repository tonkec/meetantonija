import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
