import Skills from '../../components/Skills'

const CvProject = ({ project }) => {
  return (
    <article key={project.id} className='large-padding-bottom'>
      <h3>
        {project.title !== project.company ? `${project.title} at` : null}{' '}
        {project.company}
      </h3>
      <p>
        {project.from} - {project.to}
      </p>
      <p>{project.description}</p>
      <Skills skills={project.skills.split(',')} />
      <a href={`/project/${project.id}`} role='button' className='secondary'>Read more</a>
    </article>
  )
}

export default CvProject
