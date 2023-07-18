import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import GlobalStyle from './styles/global';
import AnimatedCursor from 'react-animated-cursor';
import { useWindowSize } from 'hooks/useWindowSize';
import { useSelector } from 'react-redux';
import { StateInterface, setShowSearch } from 'store/slices/CounterSlice';
import Search from 'components/Search/';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './routes';
import { useDispatch } from 'react-redux';
import { Circles } from 'react-loader-spinner';
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const size = useWindowSize();
  const showConfetti = useSelector(
    (state: StateInterface) => state.counterSlice.showConfetti
  );

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

  return loading ? (
    <div
      style={{
        position: 'fixed',
        inset: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Circles
        height="80"
        width="80"
        color="#43cea2"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  ) : (
    <>
      {showConfetti && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
          <Confetti
            tweenDuration={100}
            width={size.width}
            height={size.height}
          />
        </div>
      )}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: '#A98AFE',
          zIndex: 99999,
        }}
        outerStyle={{
          border: '5px solid #A98AFE',
          zIndex: 99999,
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.is-clickable',
        ]}
      />

      <GlobalStyle />
      <BrowserRouter>
        <Search />
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
