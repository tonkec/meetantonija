'use client';
import { useState } from 'react';
import Modal from 'react-modal';
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
      <span
        className="w-[10px] h-[10px] bg-orange inline-block mx-1 dot cursor-pointer"
        onClick={openModal}
      ></span>
      <span className="w-[10px] h-[10px] bg-white inline-block mx-0.5 dot"></span>
      <span className="w-[10px] h-[10px] bg-white inline-block mx-0.5 dot"></span>
    </>
  );
};

export default Dots;
