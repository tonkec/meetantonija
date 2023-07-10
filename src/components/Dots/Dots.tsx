import { useState } from 'react';
import useSound from 'use-sound';
import Modal from 'react-modal';
import { Dot } from './Dot.styles';
const sound = require('./../../sounds/bell.mp3');
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
const Dots = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [playOn] = useSound(sound, { volume: 0.25 });
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const afterOpenModal = () => {
    playOn();
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Secret Modal"
        style={customStyles}
        onAfterOpen={afterOpenModal}
      >
        <h2>You found a secret key!</h2>
        <p>
          Currently you have 3 secret keys out of 4. Collect them all and you
          will get a keyword to download my CV. 🧙‍♂️
        </p>
      </Modal>
      <Dot width="10" height="10" backgroundColor="#ffffff" />
      <Dot width="10" height="10" backgroundColor="#ffffff" />
      <Dot
        width="10"
        height="10"
        backgroundColor="#44756b"
        onClick={openModal}
        style={{ cursor: 'pointer' }}
        className="is-clickable"
      />
    </>
  );
};

export default Dots;
