import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import GlobalStyle from './styles/global';
import AnimatedCursor from 'react-animated-cursor';
import { useWindowSize } from 'hooks/useWindowSize';
import { useSelector } from 'react-redux';
import { StateInterface } from 'store/slices/CounterSlice';
import Search from 'components/Search/';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './routes';

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const size = useWindowSize();
  const showConfetti = useSelector(
    (state: StateInterface) => state.counterSlice.showConfetti
  );
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.shiftKey && e.key === 'F') {
      setShowSearch(!showSearch);
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

  return (
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
      <Search show={showSearch} />
      <GlobalStyle />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
