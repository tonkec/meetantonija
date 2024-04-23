import { useParams } from 'react-router-dom'
import projects from '../../data/projects'
import Steps from '../HomePage/components/Steps'
import './Project.scss'
import HireMe from '../../components/HireMe'
import Slider from '../HomePage/components/Slider'
import { scrollToTheElement } from '../../utils'
import Skills from '../../components/Skills'

const getTeamSize = (team) => {
  if (team <= 1) {
    return 'Solo'
  } else if (team <= 30) {
    return `Small, cca ${team} people`
  } else if (team <= 150) {
    return `Big, cca ${team} people`
  } else {
    return `Huge, cca ${team} people`
  }
}

const ProjectPage = () => {
  const { id } = useParams()
  const project = projects.find((project) => project.id === Number(id))

  if (!project) {
    return <h1>Project not found</h1>
  }
  return (
    <>
      <header className="project-header">
        <div className="container">
          <div className="flex">
            <div>
              <h1>{project.title}</h1>
              <p>{project.headline}</p>
              <button
                className="button"
                onClick={() => {
                  scrollToTheElement('tldr')
                }}
              >
                <span>Skip to TLDR</span> <span>👇</span>
              </button>
            </div>

            <div>{project.fakeContent}</div>
          </div>
        </div>
      </header>

      <section className="bg-blue has-elevated">
        <div className="skewed-top">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="flex container">
          <div>
            <h3>Technologies 🚀</h3>
            <Skills skills={project.skills.split(',')} />
          </div>

          <div>
            <h3>Timeline 🗓️</h3>
            <p>
              {project.from} - {project.to}
            </p>
          </div>

          <div>
            <h3>Link 🌐</h3>
            <a href={project.link} target="_blank" rel="noreferrer">
              Open website
            </a>
          </div>
        </div>

        <div className="flex container">
          <div>
            <h3>Position 💼</h3>
            <p>{project.position}</p>
          </div>

          <div>
            <h3>Methodology 👩‍🏫</h3>
            <p>{project.methodology}</p>
          </div>

          <div>
            <h3>Team 👨‍👩‍👧‍👦</h3>
            <p>{getTeamSize(project.team)}</p>
          </div>
        </div>

        <div className="elevated">
          <h2>Description</h2>
          <p>{project.cvDescription}</p>
        </div>
      </section>

      <Steps
        steps={project.responsibilities}
        className="project-steps two-col"
        headline="🦶 These were the steps I took"
      />

      <section>
        <div className="container">
          <h2>What did I learn in this project?</h2>
          <p>{project.learned}</p>
        </div>
      </section>

      <section id="tldr">
        <div className="container">
          <h2>TL;DR</h2>
          <p>{project.conclusion}</p>
        </div>
      </section>

      <Slider
        headline="🏢 Check out other projects"
        items={projects.filter((p) => p.id !== project.id)}
      />
      <HireMe />
    </>
  )
}

export default ProjectPage
