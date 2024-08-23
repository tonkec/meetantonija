import Skills from '../../components/Skills'
import { removeSpacesAndDashes } from '../../utils'

const CvProject = ({ project }) => {
  return (
    <article key={project.id} className="large-padding-bottom">
      <h3>
        {project.title !== project.company ? `${project.title} at` : null}{' '}
        {project.company}
      </h3>

      <p>
        {project.from} - {project.to || 'Present'}
      </p>

      <p>{project.description}</p>
      <div className="small-margin-top small-margin-bottom">
        <Skills skills={project.skills.split(',')} />
      </div>
      <a
        href={`/project/${removeSpacesAndDashes(project.title.toLowerCase())}`}
        role="button"
        className="secondary"
      >
        Read more
      </a>
    </article>
  )
}

export default CvProject
