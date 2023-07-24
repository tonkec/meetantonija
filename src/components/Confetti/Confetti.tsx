import { useSelector } from 'react-redux';
import { StateInterface } from 'store/slices/CounterSlice';
import Confetti from 'react-confetti';
import { useWindowSize } from 'hooks/useWindowSize';

const MyConfetti = () => {
  const size = useWindowSize();
  const showConfetti = useSelector(
    (state: StateInterface) => state.counterSlice.showConfetti
  );

  return showConfetti ? (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <Confetti tweenDuration={100} width={size.width} height={size.height} />
    </div>
  ) : null;
};

export default MyConfetti;
