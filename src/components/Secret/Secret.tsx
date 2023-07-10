import useSound from 'use-sound';
import { Dot } from './../Dots/Dot.styles';
import { useDispatch, useSelector } from 'react-redux';
import { increment, initialState } from '../../store/slices/CounterSlice';
import Text from '../Text';
import MyModal from '../MyModal/MyModal';

const sound = require('./../../sounds/bell.mp3');

interface SecretInterface {
  secretName: string;
  style?: React.CSSProperties;
  dotBackground: string;
}

const Secret = ({ secretName, style, dotBackground }: SecretInterface) => {
  const dispatch = useDispatch();
  const currentState = useSelector(
    (state: { counterSlice: string[] }) => state.counterSlice
  );
  const currentScore = initialState.length - currentState.length;

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
        <Text type="p" color="#292929">
          <>
            Currently you have {currentScore} secret keys out of 3. Collect them
            all and you will get a keyword to download my CV. 🧙‍♂️
          </>
        </Text>
      </MyModal>
    </div>
  );
};

export default Secret;
