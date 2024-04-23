import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import routes from '../../routes'
import FocusTrap from 'focus-trap-react'
import './Navigation.scss'

const delay = 0.1

const Navigation = ({ isMobileNavigationOpen }) => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        return setIsNavigationOpen(false)
      }

      if (event.shiftKey && event.key === 'K') {
        // hack that clears the input and ignores just pressed shift + K as an input value
        return isNavigationOpen
          ? setTimeout(() => {
              setSearch('')
              setIsNavigationOpen(false)
            }, delay)
          : (setSearch(''),
            setTimeout(() => {
              setIsNavigationOpen(true)
            }, delay))
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isNavigationOpen])

  const onSubmit = (event) => {
    event.preventDefault()
    const route = routes.find((route) => route.path === search)
    if (route) {
      navigate(route.path)
    }
  }

  const shouldShowNavigation = isMobileNavigationOpen || isNavigationOpen

  if (!shouldShowNavigation) {
    return null
  }

  return (
    <FocusTrap>
      <div className="search-container show">
        <form onSubmit={onSubmit}>
          <input
            type="search"
            placeholder="Where would you like to go?"
            onChange={(event) => {
              setSearch(event.target.value)
            }}
            value={search}
            autoFocus
          />

          <div className="search-results">
            {routes
              .filter(
                (route) => !route.path.includes(':id') && route.path !== '*'
              )
              .filter((route) => route.path.includes(search))
              .map((route) => (
                <button
                  key={route.path}
                  onClick={() => {
                    navigate(route.path)
                    setIsNavigationOpen(false)
                  }}
                >
                  {route.path}
                </button>
              ))}
          </div>
        </form>
      </div>
    </FocusTrap>
  )
}

export default Navigation
