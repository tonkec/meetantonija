import { useParams } from 'react-router-dom'
import projects from 'data/hobby'
import { Helmet } from 'react-helmet'
import ProjectPhotos from 'components/ProjectPhotos'
import RecordNotFound from 'components/RecordNotFound'
import HireMe from 'components/HireMe'
import { FaExternalLinkAlt } from 'react-icons/fa'

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
      <header className="header-padding-top header-padding-bottom bg-pink">
        <div className="container">
          <div className="text-center">
            <h1 className="no-margin">{project.title}</h1>
            <p>{project.description}</p>
            <a
              target="_blank"
              rel="noreferrer"
              className="secondary small-margin-top inline-block"
              role="button"
              href={project.link}
            >
              <span> Live demo</span>{' '}
              <FaExternalLinkAlt style={{ marginTop: 'px' }} />
            </a>
          </div>
        </div>
      </header>

      <section className="bg-sky-blue small-padding">
        <div className="container">
          <h2 className="text-black">🤔 Having some questions? </h2>
        </div>

        <div className="container">
          <div className="flex flex-gap flex-responsive">
            <div className="flex-1">
              <h4 className="text-black small-margin-bottom">
                What is this project about?
              </h4>
              <p className="text-black">{project.longDescription}</p>
            </div>
            <div className="flex-1">
              <h4 className="text-black small-margin-bottom">
                What was my motivation?
              </h4>
              <p className="text-black">{project.motivation}</p>

              <div>
                <h4 className="text-black small-margin-bottom small-margin-top">
                  What was my role?
                </h4>
                <p className="text-black">{project.role}</p>
              </div>

              <div>
                <h4 className="text-black small-margin-bottom small-margin-top">
                  What technologies did I use?
                </h4>
                <div className="flex flex-wrap">
                  {project.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="bg-black xs-padding small-margin-right border-radius small-margin-bottom"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <h2>
            📸{' '}
            {project.photos.length > 1
              ? 'Here are some photos'
              : 'Here is a photo of the app'}
          </h2>
        </div>
        <div className="small-container">
          <ProjectPhotos project={project} />
        </div>
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
                    className="ternary inline-block small-margin-top"
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
