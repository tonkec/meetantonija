import Skills from 'components/Skills'
import { removeSpacesAndDashes } from 'utils'

const CvProject = ({ project }) => {
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
      <a
        href={`/project/${removeSpacesAndDashes(project.title.toLowerCase())}`}
        role="button"
        className="primary"
      >
        Read more
      </a>
    </article>
  )
}

export default CvProject
