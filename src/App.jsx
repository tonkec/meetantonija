import './App.scss'
import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import routes from './routes'
import Footer from './components/Footer'

import PageTransition from './components/PageTransition'
import SearchBar from './components/SearchBar'
import Navigation from './components/Navigation'
import useScrollPosition from './hooks/useScrollPosition'

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
      <SearchBar isMobileNavigationOpen={isMobileNavigationOpen} />
      <Navigation
        isMobileNavigationOpen={isMobileNavigationOpen}
        setIsMobileNavigationOpen={setIsMobileNavigationOpen}
      />
      <div ref={contentWrapper} className="page-content">
        <main>
          <Outlet />
        </main>
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
