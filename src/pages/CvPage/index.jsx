import projects from 'data/projects'
import { useSearchParams } from 'react-router-dom'
import { arrayHasFullString } from 'utils'
import CvProject from './components/Project'
import { Link } from 'react-router-dom'
import cv from 'files/cv.pdf'
import { Helmet } from 'react-helmet'
import Timeline from './components/Timeline'
import { FaDownload } from 'react-icons/fa'
import './CvPage.scss'

const CvProjectWrapper = ({ project, index, entry }) => {
  return (
    <div className="cv-entry-row">
      <CvProject key={project.id} project={project} />
      {index > 0 ? null : <Timeline start={entry} />}
    </div>
  )
}

const filteredBySkill = (groupByStartYear, skill) => {
  return Object.entries(groupByStartYear)
    .reverse()
    .map(([entry, projects]) =>
      projects
        .filter((project) =>
          arrayHasFullString(project.skills.split(','), skill)
        )
        .map((project, index) => (
          <CvProjectWrapper
            key={index}
            project={project}
            entry={entry}
            index={index}
          />
        ))
    )
}

const reversedProjects = (groupByStartYear) => {
  return Object.entries(groupByStartYear)
    .reverse()
    .map(([entry, projects]) =>
      projects.map((project, index) => (
        <CvProjectWrapper
          key={index}
          project={project}
          index={index}
          entry={entry}
        />
      ))
    )
}

const filteredByStart = (groupByStartYear, start) => {
  return Object.entries(groupByStartYear)
    .reverse()
    .map(([entry, projects]) =>
      entry === start
        ? projects.map((project, index) => (
            <CvProjectWrapper
              key={index}
              project={project}
              index={index}
              entry={entry}
            />
          ))
        : null
    )
}

const CvPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const skill = searchParams.get('skill')
  const start = searchParams.get('start')

  const sortedProjects = [...projects].sort((a, b) => b.from - a.from)

  const groupByStartYear = sortedProjects.reduce((acc, project) => {
    if (!acc[project.from]) {
      acc[project.from] = []
    }
    acc[project.from].push(project)
    return acc
  }, {})

  const shouldShowResetButton = skill || start

  return (
    <>
      <Helmet>
        <title>Meetantonija | My CV</title>
      </Helmet>
      <header className="cv-hero">
        <div className="container cv-hero-grid">
          <div>
            <p className="section-kicker">CV</p>
            <h1>Work history shaped by frontend craft.</h1>
            <p>
              A timeline of the teams, products and technologies I have worked
              with across React, TypeScript, Angular and product UI delivery.
            </p>
          </div>

          <div className="cv-actions-card">
            <Link
              to={cv}
              target="_blank"
              download="antonija_simic_cv"
              role="button"
              className="primary"
            >
              <span>Download CV</span> <FaDownload />
            </Link>

            {shouldShowResetButton && (
              <button
                className="outlined"
                onClick={() => {
                  setSearchParams({})
                }}
              >
                Reset filters
              </button>
            )}
          </div>
        </div>
      </header>
      <section className="cv-history">
        <div className="container">
          <div className="cv-filter-summary">
            <span>
              {start
                ? `Showing projects from ${start}`
                : skill
                  ? `Showing projects using ${skill}`
                  : 'Showing all projects'}
            </span>
          </div>
          <div className="cv-history-list">
            {start
              ? filteredByStart(groupByStartYear, start)
              : skill
                ? filteredBySkill(groupByStartYear, skill)
                : reversedProjects(groupByStartYear)}
          </div>
        </div>
      </section>
    </>
  )
}

export default CvPage
