import { useParams } from 'react-router-dom'
import projects from '../../data/hobby'
import { removeSpacesAndDashes } from '../../utils'

const HobbySubPage = () => {
  const { title } = useParams()
  const { subproject } = useParams()

  const project = projects.find(
    (project) => removeSpacesAndDashes(project.title) === title
  )

  const subprojects = project.projects.find(
    (subprojectRaw) => removeSpacesAndDashes(subprojectRaw.title) === subproject
  )

  return (
    <div style={{ marginTop: 200 }}>
      <h1>{subprojects.description}</h1>
    </div>
  )
}

export default HobbySubPage
