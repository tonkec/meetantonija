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

  useEffect(() => {
    const timeout = setTimeout(() => {
      const route = routes.find((route) => {
        if (search === '') {
          return undefined
        }

        if (search.toLowerCase() === 'home') {
          return route.path === '/'
        }

        if (search.toLowerCase() === 'answer') {
          return undefined
        }

        return (
          route.path.includes(search.toLowerCase()) &&
          !route.path.includes('answer')
        )
      })

      if (route) {
        navigate(route.path)
        setSearch('')
        navigationContainer.current.classList.remove('show')
      }
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [search, navigate])

  return (
    <div className="search-container" ref={navigationContainer}>
      <input
        type="search"
        placeholder="Where would you like to go?"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      <p>Example: "posts, home"</p>
    </div>
  )
}

export default Navigation
