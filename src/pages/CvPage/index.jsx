import projects from '../../data/projects'
import Me from '../../images/me.jpeg'
import './Cv.scss'
import Image from '../../components/Image'
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
    <main className="container cv-container">
      <div className="flex">
        <div>
          <TypedText type="h1">Antonija's CV </TypedText>
          <Link to={cv} target="_blank" download className="download">
            Download CV
          </Link>
        </div>
        <Image hasBackground src={Me} alt="Antonija" />
      </div>

      {skill
        ? sortedProjects
            .filter((project) =>
              arrayHasFullString(project.skills.split(','), skill)
            )
            .map((project) => <CvProject key={project.id} project={project} />)
        : Object.entries(groupedByCompany).map(([, projects]) =>
            projects.map((project) => (
              <CvProject key={project.id} project={project} />
            ))
          )}
    </main>
  )
}

export default CvPage
