import { useParams } from 'react-router-dom'
import projects from '../../data/hobby'
import { Helmet } from 'react-helmet'
import Image from '../../components/Image'
import { useState } from 'react'
import Modal from 'react-modal'
import usePrefersDarkMode from '../../hooks/usePrefersDarkMode'

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
  const isDark = usePrefersDarkMode()

  const [currentPhoto, setCurrentPhoto] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { title } = useParams()
  const project = findProjectByRoute(projects, title)
  if (!project) {
    return <h1>Project not found</h1>
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
            className="content contain"
            style={{ backgroundImage: `url(${currentPhoto})` }}
          ></div>
        </Modal>
      </section>

      {project.team && (
        <section>
          <div className="container">
            <h2>👩‍💻 Contributors</h2>
            <div className="flex flex-gap">
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
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default HobbyPage
