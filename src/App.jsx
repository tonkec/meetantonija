import './App.scss'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import routes from './routes'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import SearchBar from './components/SearchBar'
import Navigation from './components/Navigation'
import ScrollToTop from './components/ScrollToTop'
import useIsDarkMode from './hooks/useIsDarkMode'
import IntroAnimation from 'pages/HomePage/components/IntroAnimation'

function Layout() {
  const [isDarkLocalStorage] = useIsDarkMode()
  const value = useMemo(() => !!isDarkLocalStorage, [isDarkLocalStorage])

  const [isIntroAnimationActive, setIsIntroAnimationActive] = useState(true)
  const [isOutletLoaded, setIsOutletLoaded] = useState(true)
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [, setSearch] = useState('')

  const openNavigation = useCallback(() => {
    setSearch('')
    setIsNavigationOpen(true)
    preventScroll()
  }, [])

  const closeNavigation = useCallback(() => {
    setSearch('')
    setIsNavigationOpen(false)
    enableSrcoll()
  }, [])

  const enableSrcoll = () => {
    const body = document.querySelector('body')
    body.style.overflow = 'auto'
    const html = document.querySelector('html')
    html.style.overflow = 'auto'
  }

  const preventScroll = () => {
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
    const html = document.querySelector('html')
    html.style.overflow = 'hidden'
  }

  const location = useLocation()
  const introAnimationDuration = 1500
  const outletTransitionDuration = 1000

  useEffect(() => {
    if (value) {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
  }, [value])

  useEffect(() => {
    setTimeout(() => {
      setIsIntroAnimationActive(false)

      setTimeout(() => {
        setIsOutletLoaded(true)
      }, outletTransitionDuration)
    }, introAnimationDuration + 1000) // delay for the fade out animation
  }, [])

  useEffect(() => {
    setIsOutletLoaded(false)
  }, [location.pathname])

  useEffect(() => {
    setTimeout(() => {
      setIsOutletLoaded(true)
    }, outletTransitionDuration)
  }, [location.pathname])

  if (isIntroAnimationActive) {
    return <IntroAnimation />
  }

  if (!isOutletLoaded && !isIntroAnimationActive) {
    return <PageTransition />
  }

  return (
    <div className="fadeIn">
      <ScrollToTop />
      <SearchBar
        closeNavigation={closeNavigation}
        openNavigation={openNavigation}
        enableSrcoll={enableSrcoll}
        setIsNavigationOpen={setIsNavigationOpen}
        isNavigationOpen={isNavigationOpen}
      />
      <Navigation openNavigation={openNavigation} />
      <main>
        <Outlet />
      </main>
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
