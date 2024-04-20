import './App.scss'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import routes from './routes'
import Footer from './components/Footer'
import { LuLinkedin, LuGithub, LuCodepen } from 'react-icons/lu'
import { RxHamburgerMenu } from 'react-icons/rx'
import PageTransition from './components/PageTransition'

function Layout() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [isOutletLoaded, setIsOutletLoaded] = useState(false)
  const location = useLocation()
  const contentWrapper = useRef(null)

  useEffect(() => {
    setIsNavigationOpen(false)
    setIsOutletLoaded(false)
  }, [location])

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsOutletLoaded(true)
    }, 1500)
  }, [location])

  useEffect(() => {
    console.log('isOutletLoaded', isOutletLoaded)
    if (isOutletLoaded) {
      contentWrapper.current.classList.add('enter')
    }
  }, [isOutletLoaded])

  if (!isOutletLoaded) {
    return <PageTransition />
  }

  return (
    <div ref={contentWrapper} className='content'>
      <Navigation isNavigationOpen={isNavigationOpen} />
      <div className="container flex icons-container">
        <button>
          <RxHamburgerMenu
            onClick={() => setIsNavigationOpen(!isNavigationOpen)}
            fontSize={'2rem'}
          />
        </button>
        <h6>Shift + K</h6>
        <div className="flex icons">
          <a href="https://codepen.io/tonkec" target="_blank" rel="noreferrer">
            <LuCodepen fontSize={'2rem'} />
          </a>
          <a href="https://github.com/tonkec" target="_blank" rel="noreferrer">
            {' '}
            <LuGithub fontSize={'2rem'} />
          </a>
          <a
            href="https://www.linkedin.com/in/antonija-simic/"
            target="_blank"
            rel="noreferrer"
          >
            <LuLinkedin fontSize={'2rem'} />
          </a>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Route>
    </Routes>
  )
}

export default App
