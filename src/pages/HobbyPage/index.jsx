import { useParams, useNavigate } from 'react-router-dom'
import projects from '../../data/hobby'
import { removeSpacesAndDashes } from '../../utils'
import { Helmet } from 'react-helmet'

const HobbyPage = () => {
  const navigate = useNavigate()
  const { title } = useParams()
  const project = projects.find(
    (project) => removeSpacesAndDashes(project.title) === title
  )

  const hasSubprojects = project.projects.length > 0

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
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </header>

      {hasSubprojects && (
        <section>
          <div className="container">
            <h2>Subprojects are listed below</h2>
            <div className="flex flex-responsive flex-gap">
              {project.projects.map((subproject, index) => (
                <div
                  onClick={() => {
                    navigate(
                      `/hobby/${removeSpacesAndDashes(project.title)}/${removeSpacesAndDashes(subproject.title)}`
                    )
                  }}
                  className="bg-black small-padding border-radius pointer ternary"
                  role="button"
                  key={index}
                >
                  <h3>{subproject.title}</h3>
                  <p>{subproject.description}</p>
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
