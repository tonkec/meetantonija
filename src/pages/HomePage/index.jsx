import { createMagicSquares } from '../../utils/index'
import { useEffect } from 'react'

import HireMe from '../../components/HireMe'

import Header from './components/Header'
import Previewer from './components/Previewer'
import Slider from './components/Slider'
import Aside from './components/Aside'
import Search from './components/Search'

import CodeEditor from './components/CodeEditor'
import Videos from './components/Videos/'

import Steps from './components/Steps'
import projects from '../../data/projects'

const HomePage = () => {
  useEffect(() => {
    createMagicSquares(['footer'])
  }, [])

  return (
    <>
      <Header />
      <main>
        <Previewer />
        <CodeEditor />
        <Slider headline="🏢 I work with clients." items={projects} />
        <Steps steps={[{
          title: 'Understand the problem',
          description: 'Understanding the problem is half the solution.',
        }, {
          title: 'Plan',
          description: 'Plan the solution and create a roadmap.',
        }, {
          title: 'Investigate',
          description: 'Check the codebase, explore the web, read the documentation, ask the team.',
        }, {
          title: 'Code',
          description: 'Write the code in a clean manner. Junior and senior should both understand it.',
        }, {
          title: 'Test',
          description: 'Test the code, increase coverage.',
        }, {
          title: 'Deliver',
          description: 'Deliver the solution to the client. Make sure it is working as expected.',
        
        }]} className="has-padding" />
        <Aside />
        <Videos />
        <Search />
        <HireMe />
      </main>
    </>
  )
}

export default HomePage
