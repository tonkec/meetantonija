import Modal from 'react-modal'
import usePrefersDarkMode from '../../hooks/usePrefersDarkMode'
import Image from '../../components/Image'

const PhotoModal = ({ project, isModalOpen, setIsModalOpen, currentPhoto }) => {
  const isDark = usePrefersDarkMode()

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      className="modal"
      style={{
        overlay: {
          zIndex: 1000,
          backgroundColor: isDark
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
