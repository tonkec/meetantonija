import { useParams } from 'react-router-dom'
import projects from 'data/projects'
import Steps from '../HomePage/components/Steps'
import HireMe from 'components/HireMe'
import Slider from '../HomePage/components/Slider'
import {
  formatProjectPeriod,
  removeSpacesAndDashes,
  scrollToTheElement,
} from 'utils'
import Skills from 'components/Skills'
import { Helmet } from 'react-helmet'
import ProjectPhotos from 'components/ProjectPhotos'
import RecordNotFound from 'components/RecordNotFound'
import './ProjectPage.scss'

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
  const { title } = useParams()
  const project = projects.find(
    (project) => removeSpacesAndDashes(project.title) === title
  )

  if (!project) {
    return <RecordNotFound />
  }

  const isModeMobile = project.id === 11

  return (
    <>
      <Helmet>
        <title>Meetantonija | {project.title}</title>
      </Helmet>
      <header className="project-hero">
        <div className="container project-hero-grid">
          <div className="project-hero-copy">
            <p className="section-kicker">Project case study</p>
            <h1>{project.title}</h1>
            <p>{project.headline}</p>
          </div>
          <div className="project-hero-card">
            <span>{project.position}</span>
            <strong>{formatProjectPeriod(project)}</strong>
            <button
              className="primary"
              onClick={() => scrollToTheElement('tldr')}
            >
              Skip to TLDR
            </button>
          </div>
        </div>
      </header>

      <section className="project-overview">
        <div className="container project-overview-grid">
          <article>
            <span>Role</span>
            <div>
              <h3>Position</h3>
              <p>{project.position}</p>
            </div>
            <div>
              <h3>Timeline</h3>
              <p>{formatProjectPeriod(project)}</p>
            </div>
          </article>

          <article>
            <span>Stack</span>
            <div>
              <h3>Website</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                role="button"
                className="outlined inline-block"
              >
                Open website
              </a>
            </div>
            <div>
              <h3>Technologies</h3>
              <Skills
                buttonClass="outlined"
                skills={project.skills.split(',')}
              />
            </div>
          </article>

          <article>
            <span>Team</span>
            <div>
              <h3>Methodology</h3>
              <p>{project.methodology}</p>
            </div>
            <div>
              <h3>Team size</h3>
              <p>{getTeamSize(project.team)}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="project-description">
        <div className="container project-description-card">
          <p className="section-kicker">Context</p>
          <h2>What this project was about.</h2>
          <p>{project.description}</p>
        </div>
      </section>

      <Steps
        steps={project.responsibilities}
        headline="✅ These were the tasks I had"
      />

      {!isModeMobile && project.photos.length > 0 && (
        <section className="project-gallery">
          <div className="container">
            <p className="section-kicker">Product snapshots</p>
            <h2>
              {project.photos.length > 1
                ? 'Here are some photos of the app'
                : 'Here is a photo of the app'}
            </h2>
          </div>
          <div className="small-container">
            <ProjectPhotos project={project} />
          </div>
        </section>
      )}

      <section className="project-tldr" id="tldr">
        <div className="container">
          <p className="section-kicker">TLDR</p>
          <h2>What mattered most.</h2>
          <div className="project-tldr-grid">
            <article>
              <h3>What I learned</h3>
              <p>{project.learned}</p>
            </article>
            <article>
              <h3>Hardest part</h3>
              <p>{project.problem}</p>
            </article>
            <article>
              <h3>Manager</h3>
              <p>{project.manager}</p>
            </article>
            <article>
              <h3>Conclusion</h3>
              <p>{project.conclusion}</p>
            </article>
          </div>
        </div>
      </section>

      <Slider
        headline="🏢 Check out other projects"
        items={projects.filter((p) => p.id !== project.id)}
      />

      <div className="medium-margin-top">
        <HireMe />
      </div>
    </>
  )
}

export default ProjectPage
