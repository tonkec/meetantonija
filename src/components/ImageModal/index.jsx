import Modal from 'react-modal'
import Image from 'components/Image'
import { useLocalStorage } from '@uidotdev/usehooks'

const PhotoModal = ({ project, isModalOpen, setIsModalOpen, currentPhoto }) => {
  const [isDarkLocalStorage] = useLocalStorage('dark-mode', false)

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      className="modal"
      style={{
        overlay: {
          zIndex: 1000,
          backgroundColor: isDarkLocalStorage
            ? 'rgba(0, 0, 0, 0.8)'
            : 'rgba(255, 255, 255, 0.8)',
        },
      }}
    >
      <button
        className="small-margin-top secondary"
        onClick={() => {
          setIsModalOpen(false)
        }}
      >
        Close{' '}
      </button>
      <Image isBackgroundImage={true} src={currentPhoto} alt={project.title} />
    </Modal>
  )
}

export default PhotoModal
