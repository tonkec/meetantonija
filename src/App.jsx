import './App.scss'
import { useState, useEffect, useRef, useMemo } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import routes from './routes'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import SearchBar from './components/SearchBar'
import Navigation from './components/Navigation'
import Emoji from './components/Emoji'
import JobAlert from './components/JobAlert'
import ScrollToTop from './components/ScrollToTop'
import useIsDarkMode from './hooks/useIsDarkMode'

function Layout() {
  const [isDarkLocalStorage] = useIsDarkMode()
  const value = useMemo(() => !!isDarkLocalStorage, [isDarkLocalStorage])

  const [isOutletLoaded, setIsOutletLoaded] = useState(false)
  const location = useLocation()
  const contentWrapper = useRef(null)

  useEffect(() => {
    if (value) {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
  }, [value])

  useEffect(() => {
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
      <ScrollToTop />
      <SearchBar />
      <Navigation />
      <JobAlert />
      <div ref={contentWrapper} className="page-content">
        <main>
          <Outlet />
        </main>
        <Emoji />
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
