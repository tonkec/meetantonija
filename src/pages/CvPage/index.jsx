import projects from '../../data/projects'
import TypedText from '../../components/TypedText'
import { useSearchParams } from 'react-router-dom'
import { arrayHasFullString } from '../../utils'
import CvProject from './CvProject'
import { Link } from 'react-router-dom'
import cv from './../../files/cv.pdf'
import { Helmet } from 'react-helmet'
import Timeline from './components/Timeline'

const CvPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const skill = searchParams.get('skill')

  const sortedProjects = projects.sort((a, b) => b.from - a.from)

  const groupByStartYear = sortedProjects.reduce((acc, project) => {
    if (!acc[project.from]) {
      acc[project.from] = []
    }
    acc[project.from].push(project)
    return acc
  }, {})

  return (
    <>
      <Helmet>
        <title>Meetantonija | My CV</title>
      </Helmet>
      <header className="container header-padding-top header-padding-bottom">
        <div className="flex flex-gap flex-responsive space-between">
          <div>
            <TypedText type="h1">My CV</TypedText>
            <Link
              to={cv}
              target="_blank"
              download
              role="button"
              className="ternary small-margin-bottom inline-block"
            >
              Download CV
            </Link>
          </div>
        </div>
      </header>
      <section className="container">
        {skill
          ? Object.entries(groupByStartYear)
              .reverse()
              .map(([entry, projects]) =>
                projects
                  .filter((project) =>
                    arrayHasFullString(project.skills.split(','), skill)
                  )
                  .map((project, index) => (
                    <div className="flex">
                      <CvProject key={project.id} project={project} />
                      {index > 0 ? null : <Timeline start={entry} />}
                    </div>
                  ))
              )
          : Object.entries(groupByStartYear)
              .reverse()
              .map(([entry, projects]) =>
                projects.map((project, index) => (
                  <div className="flex">
                    <CvProject key={project.id} project={project} />
                    {index > 0 ? null : <Timeline start={entry} />}
                  </div>
                ))
              )}
      </section>
    </>
  )
}

export default CvPage
