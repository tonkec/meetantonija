const normalizePhoto = (photo, projectTitle, index) => {
  if (typeof photo === 'string') {
    return {
      src: photo,
      alt: `${projectTitle} screenshot ${index + 1}`,
    }
  }

  return {
    src: photo?.src,
    alt: photo?.alt || `${projectTitle} screenshot ${index + 1}`,
    caption: photo?.caption,
    width: photo?.width,
    height: photo?.height,
  }
}

const ProjectPhotos = ({ project }) => {
  if (!project?.photos?.length) {
    return null
  }

  return (
    <div className="project-photos-grid">
      {project.photos.map((photo, index) => {
        const item = normalizePhoto(photo, project.title, index)
        if (!item.src) {
          return null
        }

        const isPortrait =
          Boolean(item.width && item.height) && item.height > item.width

        return (
          <figure
            key={item.src}
            className={`project-photo-card${isPortrait ? ' project-photo-card--portrait' : ''}`}
          >
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="project-photo-card__link"
              aria-label={`Open full-size image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width || undefined}
                height={item.height || undefined}
                loading="lazy"
                decoding="async"
              />
            </a>
            {item.caption ? <figcaption>{item.caption}</figcaption> : null}
          </figure>
        )
      })}
    </div>
  )
}

export default ProjectPhotos
