import Image from 'components/Image'

const ProjectPhotos = ({ project }) => {
  return (
    <div className="project-photos-grid">
      {project.photos.map((photo, index) => (
        <div key={photo} className="project-photo-card">
          <Image src={photo} alt={`${project.title} screenshot ${index + 1}`} />
        </div>
      ))}
    </div>
  )
}

export default ProjectPhotos
