import HireMe from '../../components/HireMe'
import Header from './components/Header'
import Previewer from './components/Previewer'
import Slider from './components/Slider'
import Aside from './components/Aside'
import Code from './components/Code'
import Videos from './components/Videos/'
import Steps from './components/Steps'
import projects from '../../data/projects'
import hobbyProjects from '../../data/hobby'
import Image from '../../components/Image'
import { Helmet } from 'react-helmet'
import { removeSpacesAndDashes } from '../../utils'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Meetantonija | Home </title>
      </Helmet>
      <Header />
      <Previewer />
      <Code />
      <Slider headline="🏢 I work with clients." items={projects} />
      <Steps
        headline={'🚀 My development process.'}
        steps={[
          {
            title: 'Understand the problem',
            description: 'Understanding the problem is half the solution.',
          },
          {
            title: 'Plan',
            description: 'Plan the solution and create a roadmap.',
          },
          {
            title: 'Investigate',
            description:
              'Check the codebase, explore the web, read the documentation, ask the team.',
          },
          {
            title: 'Code',
            description:
              'Write the code in a clean manner. Junior and senior should both understand it.',
          },
          {
            title: 'Test',
            description: 'Test the code, increase coverage.',
          },
          {
            title: 'Deliver',
            description:
              'Deliver the solution to the client. Make sure it is working as expected.',
          },
        ]}
        className="large-padding-bottom"
      />
      <Aside numberOfPosts={2} />
      <Videos />

      <section className="">
        <div className="container">
          <h2>🎨 I work on side projects.</h2>

          <div className="flex flex-responsive flex-gap">
            {hobbyProjects.map((project, index) => (
              <div key={index} className="project">
                <h3>
                  {project.id}. {project.title}
                </h3>
                <p className="small-margin-bottom">{project.description}</p>
                <div>
                  <div className="grid">
                    <Image src={project.mainPhoto} alt={project.title} />
                  </div>
                </div>

                <a
                  className="normal-font small-margin-top inline-block"
                  href={`hobby/${removeSpacesAndDashes(project.title.toLocaleLowerCase())}`}
                >
                  {' '}
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HireMe />
    </>
  )
}

export default HomePage
