import HireMe from '../../components/HireMe'

import Header from './components/Header'
import Previewer from './components/Previewer'
import Slider from './components/Slider'
import Aside from './components/Aside'
import Search from './components/Search'

import Code from './components/Code'
import Videos from './components/Videos/'

import Steps from './components/Steps'
import projects from '../../data/projects'

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Previewer />
        <Code />
        <Slider headline="🏢 I work with clients." items={projects} />
        <Steps
          headline={'🚀 My development process'}
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
          className="has-padding"
        />
        <Aside numberOfPosts={2} />
        <Videos />
        <Search />
        <HireMe />
      </main>
    </>
  )
}

export default HomePage
