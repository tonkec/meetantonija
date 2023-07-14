import { useState } from 'react';
import Modal from 'react-modal';
import Text from 'components/Text';
import { useDispatch } from 'react-redux';
import { setShowConfetti } from 'store/slices/CounterSlice';

interface MyModalInterface {
  children: React.ReactNode;
  opener: React.ReactNode;
  modalHeading: string;
  openModalFn?: () => void;
  id?: string;
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
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50,
    paddingBottom: 50,
  },
};
const MyModal = ({
  children,
  opener,
  modalHeading,
  openModalFn,
  id,
}: MyModalInterface) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    openModalFn && openModalFn();
  };
  const closeModal = () => {
    setIsOpen(false);
    dispatch(setShowConfetti(false));
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Just a tiny modal"
        style={customStyles}
        ariaHideApp={false}
        id={id}
      >
        <Text type="h4" color="#292929">
          {modalHeading}
        </Text>
        {children}
      </Modal>
      <div onClick={openModal}>{opener}</div>
    </>
  );
};

export default MyModal;
