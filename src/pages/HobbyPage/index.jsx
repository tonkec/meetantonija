import { useParams } from 'react-router-dom'
import projects from '../../data/hobby'
import { Helmet } from 'react-helmet'
import Image from '../../components/Image'
import { useState } from 'react'
import ImageModal from './../../components/ImageModal'
import RecordNotFound from '../../components/RecordNotFound'
import HireMe from '../../components/HireMe'

const findProjectByRoute = (projects, route) => {
  for (const hobby of projects) {
    const project = hobby.projects.find((project) => project.route === route)
    if (project) {
      return project
    }
  }
  return null
}

const HobbyPage = () => {
  const [currentPhoto, setCurrentPhoto] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { title } = useParams()
  const project = findProjectByRoute(projects, title)

  if (!project) {
    return <RecordNotFound />
  }

  return (
    <>
    <Helmet>
        <title>Meetantonija | {project.title}</title>
      </Helmet>
      <header className="header-padding-top header-padding-bottom bg-black">
        <div className="container">
          <div className="flex flex-responsive flex-gap space-between">
            <div>
              <h1 className="no-margin">{project.title}</h1>
              <p>{project.description}</p>
              <a
                target="_blank"
                rel="noreferrer"
                className="secondary small-margin-top inline-block"
                role="button"
                href={project.link}
              >
                Open project
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-blue">
        <div className="container">
          <div>
            <h2>What is this project about?</h2>
            <p>{project.longDescription}</p>
          </div>
          <div>
            <h2>What was my motivation?</h2>
            <p>{project.motivation}</p>
          </div>

          <div>
            <h2>What was my role?</h2>
            <p>{project.role}</p>
          </div>

          <div>
            <h2>What technologies did I use?</h2>
            <div className="flex flex-wrap">
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="small-margin-bottom bg-black xs-padding small-margin-right border-radius"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>📸 Here are some photos</h2>
          <div className="grid">
            {project.photos.map((photo, index) => (
              <div
                className="pointer"
                key={index}
                onClick={() => {
                  setCurrentPhoto(photo)
                  setIsModalOpen(true)
                }}
              >
                <Image src={photo} alt={project.title} />
              </div>
            ))}
          </div>
        </div>

        <ImageModal
          project={project}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          currentPhoto={currentPhoto}
        />
      </section>

      {project.team && (
        <section>
          <div className="container">
            <h2>👩‍💻 Contributors</h2>
            <div className="flex flex-gap flex-responsive">
              {project.team.map((member, index) => (
                <div key={index}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="secondary inline-block small-margin-top"
                    role="button"
                    href={member.linkedin}
                  >
                    Linkedin
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <HireMe />
    </>
  )
}

export default HobbyPage
