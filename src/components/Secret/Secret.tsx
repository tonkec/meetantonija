import useSound from 'use-sound';
import { Dot } from 'components/Dots/Dot.styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  StateInterface,
  increment,
  initialState,
} from 'store/slices/CounterSlice';
import Text from 'components/Text';
import MyModal from 'components/MyModal';
import SecretModalText from './SecretModalText';

const sound = require('sounds/bell.mp3');

interface SecretInterface {
  secretName: string;
  style?: React.CSSProperties;
  dotBackground: string;
}

const Secret = ({ secretName, style, dotBackground }: SecretInterface) => {
  const dispatch = useDispatch();
  const currentState = useSelector(
    (state: StateInterface) => state.counterSlice.keys
  );

  const currentScore = initialState.keys.length - currentState.length;

  const [playOn] = useSound(sound, { volume: 0.25 });
  const openModal = () => {
    dispatch(increment(secretName));
    playOn();
  };

  return (
    <div style={style}>
      <MyModal
        modalHeading="You found a secret key!"
        openModalFn={openModal}
        opener={
          <Dot
            width="10"
            height="10"
            backgroundColor={dotBackground}
            onClick={openModal}
            className="is-clickable"
          />
        }
      >
        <SecretModalText currentScore={currentScore} />
      </MyModal>
    </div>
  );
};

export default Secret;
