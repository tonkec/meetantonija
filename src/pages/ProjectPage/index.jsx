import { useParams } from 'react-router-dom'
import projects from '../../data/projects'
import { useEffect } from 'react'
import { createMagicSquares } from '../../utils/index'
import HireMe from '../../components/HireMe'
import OtherItems from '../../components/OtherItems'

const ProjectPage = () => {
  useEffect(() => {
    createMagicSquares(['main'])
  }, [])

  const { id } = useParams()
  const project = projects.find((project) => project.id === Number(id))
  return (
    <main className="container">
      {project ? (
        <>
          <h1>
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.title}
            </a>
          </h1>
          <h4>{project.headline}</h4>
          <p>{project.description}</p>

          <h3>Technologies used:</h3>
          <p>{project.skills}</p>

          <h3>Responsibilities:</h3>
          <ul>
            {project.responsibilities.map((responsibility, index) => {
              return <li key={index}>{responsibility}</li>
            })}
          </ul>

          <p>{project.conclusion}</p>

          <HireMe />

          <section>
            <h3>Check some other projects</h3>
            <OtherItems items={projects} currentItem={project} url="project" />
          </section>
        </>
      ) : (
        <h1>Project not found</h1>
      )}
    </main>
  )
}

export default ProjectPage
