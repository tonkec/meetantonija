import { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import Loader from 'components/Loader';
import Cursor from 'components/Cursor';
import MyConfetti from 'components/Confetti';
import Search from 'components/Search';
import AnimatedRoutes from 'routes';
import { HashRouter } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <MyConfetti />
      <Cursor />
      <GlobalStyle />
      <HashRouter>
        <Search />
        <AnimatedRoutes />
      </HashRouter>
    </>
  );
}

export default App;
