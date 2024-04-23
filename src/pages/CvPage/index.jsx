import projects from '../../data/projects'
import Me from '../../images/me.jpeg'
import './Cv.scss'
import Image from '../../components/Image'
import TypedText from '../../components/TypedText'
import Skills from '../../components/Skills'
import { useSearchParams } from 'react-router-dom'
import { arrayHasFullString } from '../../utils'

const CvPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const skill = searchParams.get('skill')
  const sortedProjects = projects.sort((a, b) => b.to - a.to)
  const groupedByCompany = sortedProjects.reduce((acc, project) => {
    if (!acc[project.company]) {
      acc[project.company] = []
    }
    acc[project.company].push(project)
    return acc
  }, {})

  return (
    <main className="container cv-container">
      <div className="flex">
        <TypedText type="h1">Antonija's CV </TypedText>
        <Image hasBackground src={Me} alt="Antonija" />
      </div>

      {skill
        ? sortedProjects
            .filter((project) =>
              arrayHasFullString(project.skills.split(','), skill)
            )
            .map((project) => (
              <article key={project.id}>
                <h3>
                  {project.title !== project.company
                    ? `${project.title} at`
                    : null}{' '}
                  {project.company}
                </h3>
                <p>
                  {project.from} - {project.to}
                </p>
                <p>{project.cvDescription}</p>
                <Skills skills={project.skills.split(',')} />
                <a href={`/project/${project.id}`}>Read more</a>
              </article>
            ))
        : Object.entries(groupedByCompany).map(([company, projects]) => (
            <section key={company}>
              {projects.map((project) => (
                <article key={project.id}>
                  <h3>
                    {project.title !== company ? `${project.title} at` : null}{' '}
                    {company}
                  </h3>
                  <p>
                    {project.from} - {project.to}
                  </p>
                  <p>{project.cvDescription}</p>
                  <Skills skills={project.skills.split(',')} />
                  <a href={`/project/${project.id}`}>Read more</a>
                </article>
              ))}
            </section>
          ))}
    </main>
  )
}

export default CvPage
