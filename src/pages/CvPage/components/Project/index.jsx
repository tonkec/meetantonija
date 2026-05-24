import Skills from 'components/Skills'
import { formatProjectPeriod, removeSpacesAndDashes } from 'utils'
import { useNavigate } from 'react-router-dom'

const CvProject = ({ project }) => {
  const navigate = useNavigate()
  return (
    <article key={project.id} className="cv-project-card">
      <div className="cv-project-meta">
        <span>{project.position}</span>
        <span>{formatProjectPeriod(project)}</span>
      </div>

      <h2>{project.title}</h2>
      <h3>{project.headline}</h3>

      <p>{project.description}</p>

      <div className="cv-project-skills">
        <Skills buttonClass="outlined" skills={project.skills.split(',')} />
      </div>

      <button
        className="primary cv-project-link"
        onClick={() => {
          navigate(
            `/project/${removeSpacesAndDashes(project.title.toLowerCase())}`
          )
        }}
      >
        Read case study
      </button>
    </article>
  )
}

export default CvProject
