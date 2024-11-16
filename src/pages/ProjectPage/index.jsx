import { useParams } from 'react-router-dom'
import projects from 'data/projects'
import Steps from '../HomePage/components/Steps'
import HireMe from 'components/HireMe'
import Slider from '../HomePage/components/Slider'
import { removeSpacesAndDashes, scrollToTheElement } from 'utils'
import Skills from 'components/Skills'
import { Helmet } from 'react-helmet'
import ProjectPhotos from './components/ProjectPhotos'
import RecordNotFound from 'components/RecordNotFound'

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

  return (
    <>
      <Helmet>
        <title>Meetantonija | {project.title}</title>
      </Helmet>
      <header className="header-padding-top bg-pink header-padding-bottom">
        <div className="container">
          <div className="text-center">
            <h1>{project.title}</h1>
            <p>{project.headline}</p>
            <button
              className="button secondary inline-block medium-margin-top"
              onClick={() => {
                scrollToTheElement('tldr')
              }}
            >
              <span>Skip to TLDR</span> <span>👇</span>
            </button>
          </div>
        </div>
      </header>

      <section className="bg-white">
        <div className="container flex flex-wrap flex-gap medium-margin-bottom space-between">
          <div>
            <div className="medium-margin-bottom">
              <h3 className="small-margin-bottom">Position 💼</h3>
              <p>{project.position}</p>
            </div>

            <div>
              <h3 className="small-margin-bottom"> Years 🗓️</h3>
              <p>
                {project.from} - {project.to || 'Present'}
              </p>
            </div>
          </div>

          <div>
            <div className="medium-margin-bottom">
              <h3 className="small-margin-bottom"> Link 🌐</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                role="button"
                className="ternary inline-block"
              >
                Open website
              </a>
            </div>

            <div>
              <h3 className="small-margin-bottom"> Technologies 🚀</h3>
              <Skills
                buttonClass="ternary"
                skills={project.skills.split(',')}
              />
            </div>
          </div>

          <div>
            <div className="medium-margin-bottom">
              <h3 className="small-margin-bottom">Methodology 👩‍🏫</h3>
              <p>{project.methodology}</p>
            </div>

            <div>
              <h3 className="small-margin-bottom">Team 👨‍👩‍👧‍👦</h3>
              <p>{getTeamSize(project.team)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="no-padding-top">
        <div className="container">
          <h3 className="small-margin-bottom">Description</h3>
          <p>{project.description}</p>
        </div>
      </section>

      <Steps
        steps={project.responsibilities}
        headline="✅ These were the tasks I had"
      />

      <section className="bg-white">
        <div className="container">
          <h2>
            📸{' '}
            {project.photos.lenght > 1
              ? 'Here are some photos'
              : 'Here is a photo of the app'}
          </h2>
        </div>
        <div className="small-container">
          <ProjectPhotos project={project} />
        </div>
      </section>

      <section className="bg-sky-blue small-padding" id="tldr">
        <div className="container">
          <h2 className="text-black">🤔 Having some questions? </h2>
        </div>

        <div className="container">
          <div className="flex flex-gap flex-responsive">
            <div className="flex-1">
              <h4 className="text-black">What did I learn in this project?</h4>
              <p className="text-black">{project.learned}</p>
            </div>
            <div className="flex-1">
              <h4 className="text-black">What was the most difficult part?</h4>
              <p className="text-black">{project.problem}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-blue small-padding">
        <div className="container">
          <div className="flex flex-gap flex-responsive">
            <div className="flex-1">
              <h4 className="text-black">Who was my manager?</h4>
              <p className="text-black">{project.manager}</p>
            </div>

            <div className="container medium-margin-bottom flex-1">
              <h4 className="text-black">TL;DR</h4>
              <p className="text-black">{project.conclusion}</p>
            </div>
          </div>
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
