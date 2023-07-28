import { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import Loader from 'components/Loader';
import Cursor from 'components/Cursor';
import MyConfetti from 'components/Confetti';
import Search from 'components/Search';
import AnimatedRoutes from 'routes';
import { HashRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StateInterface, setShowSearch } from 'store/slices/CounterSlice';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const showSearch = useSelector(
    (state: StateInterface) => state.counterSlice.showSearch
  );

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.shiftKey && e.key === 'F') {
      dispatch(setShowSearch(!showSearch));
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    document?.querySelector('body')?.addEventListener('keydown', onKeyDown);

    return () => {
      document
        ?.querySelector('body')
        ?.removeEventListener('keydown', onKeyDown);
    };
  }, [showSearch]);

  return loading ? (
    <Loader
      style={{
        position: 'fixed',
        inset: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
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
