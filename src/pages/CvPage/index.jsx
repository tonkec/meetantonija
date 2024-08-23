import projects from '../../data/projects'
import { useSearchParams } from 'react-router-dom'
import { arrayHasFullString } from '../../utils'
import CvProject from './components/Project'
import { Link } from 'react-router-dom'
import cv from './../../files/cv.pdf'
import { Helmet } from 'react-helmet'
import Timeline from './components/Timeline'

const CvProjectWrapper = ({ project, index, entry }) => {
  return (
    <div className="flex flex-responsive-reverse flex-gap">
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

  const sortedProjects = projects.sort((a, b) => b.from - a.from)

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
      <header className="container header-padding-top header-padding-bottom">
        <div className="flex flex-gap flex-responsive space-between flex-y-center">
          <h1 className="no-margin">Antonija's CV</h1>
          <div className="flex flex-gap-small flex-y-center">
            <Link
              to={cv}
              target="_blank"
              download
              role="button"
              className="ternary inline-block"
            >
              Download CV
            </Link>

            {shouldShowResetButton && (
              <button
                className="ternary"
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
      <section className="container">
        {start
          ? filteredByStart(groupByStartYear, start)
          : skill
            ? filteredBySkill(groupByStartYear, skill)
            : reversedProjects(groupByStartYear)}
      </section>
    </>
  )
}

export default CvPage
