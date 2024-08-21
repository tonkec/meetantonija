import { useParams } from 'react-router-dom'
import projects from '../../data/hobby'
import { Helmet } from 'react-helmet'

const findProjectByRoute = (projects, route) => {
  for (const hobby of projects) {
    const project = hobby.projects.find(project => project.route === route);
    if (project) {
      return project;
    }
  }
  return null; 
};

const HobbyPage = () => {
  const { title } = useParams()
  const project = findProjectByRoute(projects, title);
  if (!project) {
    return <h1>Project not found</h1>
  }

  return (
    <>
      <Helmet>
        <title>Meetantonija | {project.title}</title>
      </Helmet>
      <header className="header-padding-top header-padding-bottom bg-black">
        <div className="container">
          <div className="flex flex-responsive flex-gap space-between">
            <div>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HobbyPage
