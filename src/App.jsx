import './App.scss'
import { useState, useEffect, useMemo } from 'react'
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

  const location = useLocation()
  const introAnimationDuration = 4000
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
    return <IntroAnimation introAnimationDuration={introAnimationDuration} />
  }

  if (!isOutletLoaded && !isIntroAnimationActive) {
    return <PageTransition />
  }

  return (
    <div className="fadeIn">
      <ScrollToTop />
      <SearchBar />
      <Navigation />
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
