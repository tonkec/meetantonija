import { useState } from 'react'
import Image from 'components/Image'
import ImageModal from 'components/ImageModal'

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
                backgroundSize: 'contain',
              }}
              onClick={() => {
                setCurrentPhoto(photo)
                setIsModalOpen(true)
              }}
            />
          ))}
        </div>

        <ImageModal
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
      <ImageModal
        project={project}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        currentPhoto={currentPhoto}
      />
    </>
  )
}

export default ProjectPhotos
