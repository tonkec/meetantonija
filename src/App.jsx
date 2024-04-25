import './App.scss'
import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import routes from './routes'
import Footer from './components/Footer'
import { LuLinkedin, LuGithub, LuCodepen } from 'react-icons/lu'
import { RxHamburgerMenu } from 'react-icons/rx'
import PageTransition from './components/PageTransition'
import Social from './components/Social'

const socialLinks = [
  { href: 'https://codepen.io/tonkec', icon: LuCodepen },
  { href: 'https://github.com/tonkec', icon: LuGithub },
  { href: 'https://www.linkedin.com/in/antonija-simic/', icon: LuLinkedin },
];


function Layout() {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false)
  const [isOutletLoaded, setIsOutletLoaded] = useState(false)
  const location = useLocation()
  const contentWrapper = useRef(null)

  useEffect(() => {
    setIsMobileNavigationOpen(false)
    setIsOutletLoaded(false)
  }, [location])

  useEffect(() => {
    setTimeout(() => {
      setIsOutletLoaded(true)
    }, 2500)
  }, [location])

  useEffect(() => {
    if (isOutletLoaded) {
      contentWrapper.current.classList.add('enter')
    }
  }, [isOutletLoaded])

  if (!isOutletLoaded) {
    return <PageTransition />
  }

  return (
    <>
      <Navigation isMobileNavigationOpen={isMobileNavigationOpen} />
      <div ref={contentWrapper} className="page-content">
        <div className="container flex icons-container">
          <button>
            <RxHamburgerMenu
              onClick={() => setIsMobileNavigationOpen(!isMobileNavigationOpen)}
              fontSize={'2rem'}
            />
          </button>
          <h6>Shift + K</h6>
          <Social icons={socialLinks} />
        </div>
        <Outlet />
        <Footer />
      </div>
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
