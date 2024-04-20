import projects from '../../data/projects'
import Me from '../../images/me.jpeg'
import './Cv.scss'
import Image from '../../components/Image'

const CvPage = () => {
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
        <h1>Antonija's CV 💼</h1>

        <Image src={Me} alt="Antonija" />
      </div>

      {Object.entries(groupedByCompany).map(([company, projects]) => (
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
              <p className="skills">
                {project.skills.split(',').map((s) => (
                  <span className="skill">{s}</span>
                ))}
              </p>
              <a href={`/project/${project.id}`}>Read more</a>
            </article>
          ))}
        </section>
      ))}
    </main>
  )
}

export default CvPage
