import Modal from 'react-modal'
import usePrefersDarkMode from '../../../../hooks/usePrefersDarkMode'
import { useState } from 'react'
import Image from '../../../../components/Image'

const ProjectPhotosModal = ({
  project,
  isModalOpen,
  setIsModalOpen,
  currentPhoto,
}) => {
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
      <Image isBackgroundImage={true} src={currentPhoto} alt={project.title} />
    </Modal>
  )
}

const ProjectPhotos = ({ project }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (project.title === 'Craftstrom') {
    return (
      <>
        <div className="flex flex-gap flex-wrap">
          {project.photos.map((photo, index) => (
            <Image
              key={index}
              isBackgroundImage={true}
              src={photo}
              alt={project.title}
              style={{
                height: 550,
                minWidth: 300,
                backgroundPositionX: 'center',
                backgroundPositionY: 'center',
                backgroundSize: "contain"
              }}
              onClick={() => {
                setCurrentPhoto(photo)
                setIsModalOpen(true)
              }}
            />
          ))}
        </div>

        <ProjectPhotosModal
          project={project}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          currentPhoto={currentPhoto}
        />
      </>
    )
  }

  return (
    <>
      <div className="flex flex-responsive flex-gap flex-wrap">
        {project.photos.map((photo, index) => (
          <Image
            key={index}
            src={photo}
            alt={project.title}
            onClick={() => {
              setCurrentPhoto(photo)
              setIsModalOpen(true)
            }}
            isBackgroundImage={true}
          />
        ))}
      </div>
      <ProjectPhotosModal
        project={project}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        currentPhoto={currentPhoto}
      />
    </>
  )
}

export default ProjectPhotos
