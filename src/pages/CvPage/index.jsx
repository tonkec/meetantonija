import projects from '../../data/projects'
import TypedText from '../../components/TypedText'
import { useSearchParams } from 'react-router-dom'
import { arrayHasFullString } from '../../utils'
import CvProject from './CvProject'
import { Link } from 'react-router-dom'
import cv from './../../files/cv.pdf'

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
    <>
      <header className="container header-padding-top header-padding-bottom">
        <TypedText type="h1">My CV</TypedText>
        <Link
          to={cv}
          target="_blank"
          download
          role="button"
          className="primary"
        >
          Download CV
        </Link>
      </header>

      <section className="container">
        {skill
          ? sortedProjects
              .filter((project) =>
                arrayHasFullString(project.skills.split(','), skill)
              )
              .map((project) => (
                <CvProject key={project.id} project={project} />
              ))
          : Object.entries(groupedByCompany).map(([, projects]) =>
              projects.map((project) => (
                <CvProject key={project.id} project={project} />
              ))
            )}
      </section>
    </>
  )
}

export default CvPage
