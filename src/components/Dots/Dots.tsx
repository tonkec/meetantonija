import { useState } from 'react';
import Modal from 'react-modal';
import { Dot } from './Dot.styles';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};
const Dots = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Secret Modal"
        style={customStyles}
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
        backgroundColor="#ff944e"
        onClick={openModal}
        style={{ cursor: 'pointer' }}
      />
    </>
  );
};

export default Dots;
