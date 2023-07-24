import { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import { useSelector } from 'react-redux';
import { StateInterface, setShowSearch } from 'store/slices/CounterSlice';
import { useDispatch } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import Loader from 'components/Loader';
import Cursor from 'components/Cursor';
import MyConfetti from 'components/Confetti';
import Search from 'components/Search';
import AnimatedRoutes from 'routes';
import { HashRouter } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const showSearch = useSelector(
    (state: StateInterface) => state.counterSlice.showSearch
  );

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.shiftKey && e.key === 'F') {
      dispatch(setShowSearch(!showSearch));
    }
  };

  useEffect(() => {
    document?.querySelector('body')?.addEventListener('keydown', onKeyDown);

    return () => {
      document
        ?.querySelector('body')
        ?.removeEventListener('keydown', onKeyDown);
    };
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ErrorBoundary fallback={<h1>Something went a little wrong.</h1>}>
      {loading ? (
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
      )}
    </ErrorBoundary>
  );
}

export default App;
