import { useEffect } from 'react'
import projects from '../../data/projects'
import { createMagicSquares } from '../../utils'

const ProjectsPage = () => {
  useEffect(() => {
    createMagicSquares(['main'])
  }, [])
  const projectsSortedByYear = projects.sort((a, b) => b.year - a.year)
  return (
    <main className="container">
      {projectsSortedByYear.map((project) => {
        return (
          <div className="projects">
            <a
              key={project.id}
              className="project"
              href={`/project/${project.id}`}
            >
              <h3>{project.title}</h3>
            </a>
          </div>
        )
      })}
    </main>
  )
}

export default ProjectsPage
