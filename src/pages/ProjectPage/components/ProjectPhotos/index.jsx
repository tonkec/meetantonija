import Image from 'components/Image'

const ProjectPhotos = ({ project }) => {
  return (
    <>
      <div className="flex flex-gap flex-wrap">
        {project.photos.map((photo, index) => (
          <div className="small-margin-bottom">
            <Image key={index} src={photo} alt={project.title} />
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectPhotos
