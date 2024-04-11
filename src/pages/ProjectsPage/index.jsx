import projects from '../../data/projects'

const ProjectsPage = () => {
  const projectsSortedByYear = projects.sort((a, b) => b.year - a.year)
  return (
    <main className="container">
      {projectsSortedByYear.map((project) => {
        return (
          <a
            key={project.id}
            className="project"
            href={`/project/${project.id}`}
          >
            <h3>{project.title}</h3>
          </a>
        )
      })}
    </main>
  )
}

export default ProjectsPage
