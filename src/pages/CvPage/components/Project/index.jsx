import Skills from 'components/Skills'
import { removeSpacesAndDashes } from 'utils'
import { useNavigate } from 'react-router-dom'

const CvProject = ({ project }) => {
  const navigate = useNavigate()
  return (
    <article key={project.id} className="medium-padding-bottom">
      <h4>{project.title}</h4>

      <p className="small-margin-bottom">
        {project.from} - {project.to || 'Present'}
      </p>

      <p className="max-w-600">{project.description}</p>
      <div className="small-margin-top small-margin-bottom">
        <Skills buttonClass="ternary" skills={project.skills.split(',')} />
      </div>
      <button
        className="bg-black"
        onClick={() => {
          navigate(
            `/project/${removeSpacesAndDashes(project.title.toLowerCase())}`
          )
        }}
      >
        Read more
      </button>
    </article>
  )
}

export default CvProject
