import './App.scss'
import { useState, useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import routes from './routes'
import Footer from './components/Footer'
import { LuLinkedin, LuGithub, LuCodepen } from 'react-icons/lu'
import { RxHamburgerMenu } from 'react-icons/rx'

function Layout() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsNavigationOpen(false)
  }, [location])

  return (
    <>
      <Navigation isNavigationOpen={isNavigationOpen} />
      <div className="container flex icons-container">
        <button>
          <RxHamburgerMenu
            onClick={() => setIsNavigationOpen(!isNavigationOpen)}
            fontSize={'2rem'}
          />
        </button>
        <h6>Command + K</h6>
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
    </>
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
