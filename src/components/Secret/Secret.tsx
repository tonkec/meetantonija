import { useState } from 'react';
import useSound from 'use-sound';
import Modal from 'react-modal';
import { Dot } from './../Dots/Dot.styles';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../store/slices/CounterSlice';
import Text from '../Text';

const sound = require('./../../sounds/bell.mp3');

interface SecretInterface {
  secretName: string;
  style?: React.CSSProperties;
  dotBackground: string;
}

const customStyles = {
  overlay: {
    zIndex: 9999,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
  },
};
const Secret = ({ secretName, style, dotBackground }: SecretInterface) => {
  const currentScore = useSelector(
    (state: { counterSlice: string[] }) => state.counterSlice
  );

  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [playOn] = useSound(sound, { volume: 0.25 });
  const openModal = () => {
    setIsOpen(true);
    dispatch(increment(secretName));
  };
  const closeModal = () => setIsOpen(false);

  const afterOpenModal = () => {
    playOn();
  };

  return (
    <div style={style}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Secret Modal"
        style={customStyles}
        onAfterOpen={afterOpenModal}
        ariaHideApp={false}
      >
        <h2>You found a secret key!</h2>
        <Text type="p" color="black">
          <>
            Currently you have {4 - currentScore.length} secret keys out of 3.
            Collect them all and you will get a keyword to download my CV. 🧙‍♂️
          </>
        </Text>
      </Modal>
      <Dot
        width="10"
        height="10"
        backgroundColor={dotBackground}
        onClick={openModal}
        className="is-clickable"
      />
    </div>
  );
};

export default Secret;
