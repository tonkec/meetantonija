import { useParams } from 'react-router-dom'
import projects from '../../data/hobby'
import { removeSpacesAndDashesFromString } from '../../utils'
import { Helmet } from 'react-helmet'

const HobbyPage = () => {
  const { title } = useParams()
  const project = projects.find(
    (project) => removeSpacesAndDashesFromString(project.title) === title
  )

  if (!project) {
    return <h1>Project not found</h1>
  }

  return (
    <>
      <Helmet>
        <title>Meetantonija | {project.title}</title>
      </Helmet>
      <header className="header-padding-top header-padding-bottom project-header">
        <div className="container">
          <div className="flex flex-responsive flex-gap">
            <div>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HobbyPage
