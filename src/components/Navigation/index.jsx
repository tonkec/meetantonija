import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import routes from '../../routes'

const Navigation = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const navigationContainer = useRef(null)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey && event.key === 'k') {
        navigationContainer.current.classList.toggle('show')
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()
    const route = routes.find((route) => route.path === search)
    if (route) {
      navigate(route.path)
      navigationContainer.current.classList.remove('show')
    }
  }

  return (
    <div className="search-container" ref={navigationContainer}>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="search"
            placeholder="Where would you like to go?"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
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
                    navigationContainer.current.classList.remove('show')
                  }}
                >
                  {route.path}
                </button>
              ))}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Navigation
