import Confetti from 'react-confetti';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';
import AnimatedCursor from 'react-animated-cursor';
import { useWindowSize } from 'hooks/useWindowSize';
import { useSelector } from 'react-redux';
import { StateInterface } from 'store/slices/CounterSlice';

function App() {
  const size = useWindowSize();
  const showConfetti = useSelector(
    (state: StateInterface) => state.counterSlice.showConfetti
  );

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
          backgroundColor: 'transparent',
          zIndex: 99999,
        }}
        outerStyle={{
          border: '5px solid rgba(0,0,0,0.7)',
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
          'svg',
          '.is-clickable',
        ]}
      />
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
