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
        <Slider />
        <Aside />
        <Videos />
        <Search />
        <section className="container">
          <HireMe />
        </section>
      </main>
    </>
  )
}

export default HomePage
