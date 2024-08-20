import Modal from 'react-modal'
import usePrefersDarkMode from '../../../../hooks/usePrefersDarkMode'
import { useState } from 'react'

const ProjectPhotos = ({ project }) => {
  const isDark = usePrefersDarkMode()

  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (project.title === 'Craftstrom') {
    return (
      <>
        <div className="flex flex-gap flex-wrap">
          {project.photos.map((photo, index) => (
            <div
              id={index}
              className="project-bg pointer"
              style={{
                backgroundImage: `url(${photo})`,
                height: 550,
                minWidth: 300,
                backgroundPositionX: 'center',
                backgroundPositionY: 'center',
              }}
              onClick={() => {
                setCurrentPhoto(photo)
                setIsModalOpen(true)
              }}
            ></div>
          ))}
        </div>
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
          <div
            className="content contain border-radius"
            style={{ backgroundImage: `url(${currentPhoto})` }}
          ></div>
        </Modal>
      </>
    )
  }

  return (
    <>
      <div className="flex flex-responsive flex-gap flex-wrap">
        {project.photos.map((photo, index) => (
          <div
            id={index}
            className="project-bg pointer"
            style={{ backgroundImage: `url(${photo})` }}
            onClick={() => {
              setCurrentPhoto(photo)
              setIsModalOpen(true)
            }}
          ></div>
        ))}
      </div>
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
        <div
          className="content contain border-radius"
          style={{ backgroundImage: `url(${currentPhoto})` }}
        ></div>
      </Modal>
    </>
  )
}

export default ProjectPhotos
