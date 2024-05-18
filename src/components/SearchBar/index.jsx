import { useEffect, useState, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import routes from '../../routes'
import FocusTrap from 'focus-trap-react'
import { FaArrowRight } from 'react-icons/fa'
import projects from '../../data/projects'
import posts from '../../data/posts'
import './SearchBar.scss'

const delay = 0.1
const maxNumberOfResults = 2

const SearchResults = ({ searchResults }) => {
  return <div className="search-results">{searchResults}</div>
}

const NavigationButton = ({ onClick, value }) => (
  <input
    className="block w-full text-left ternary active navigation-button"
    onClick={onClick}
    type="submit"
    value={value}
  />
)

const SearchBar = ({ isMobileNavigationOpen, setIsMobileNavigationOpen }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [keyPressCounter, setKeyPressCounter] = useState(0)
  const searchedRoutes = routes
    .filter(
      (route) =>
        !route.path.includes(':id') &&
        route.path !== '*' &&
        search !== '' &&
        route.path !== location.pathname
    )
    .filter((route) => route.path.includes(search))
    .map((route) => (
      <NavigationButton
        key={route.path}
        onClick={() => {
          navigate(route.path)
          setIsNavigationOpen(false)
        }}
        value={`Page: ${route.path}`}
      />
    ))
    .slice(0, maxNumberOfResults)

  const searchedProjects = projects
    .filter((project) => {
      return (
        search !== '' &&
        project.title.toLowerCase().includes(search.toLowerCase())
      )
    })
    .map((project) => (
      <NavigationButton
        key={project.title}
        onClick={() => {
          navigate(`/project/${project.id}`)
          setIsNavigationOpen(false)
        }}
        value={`Project: ${project.title}`}
      />
    ))
    .slice(0, maxNumberOfResults)

  const searchedPosts = posts
    .filter((post) => {
      return (
        search !== '' && post.title.toLowerCase().includes(search.toLowerCase())
      )
    })
    .map((post) => (
      <NavigationButton
        key={post.title}
        onClick={() => {
          navigate(`/post/${post.id}`)
          setIsNavigationOpen(false)
        }}
        value={`Post: ${post.title}`}
      />
    ))
    .slice(0, maxNumberOfResults)

  const searchedResults = searchedRoutes
    .concat(searchedProjects)
    .concat(searchedPosts)

  const allRoutes = routes
    .filter((route) => !route.path.includes(':id') && route.path !== '*')
    .map((route) => (
      <NavigationButton
        key={route.path}
        onClick={() => {
          navigate(route.path)
          setIsNavigationOpen(false)
        }}
        value={`Page: ${route.path}`}
      />
    ))

  const closeNavigation = useCallback(() => {
    setSearch('')
    setIsNavigationOpen(false)
    setIsMobileNavigationOpen(false)
    const body = document.querySelector('body')
    body.style.overflow = 'auto'
    const html = document.querySelector('html')
    html.style.overflow = 'auto'
  }, [setIsMobileNavigationOpen])

  const openNavigation = useCallback(() => {
    setSearch('')
    setIsNavigationOpen(true)
    setIsMobileNavigationOpen(true)
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
    const html = document.querySelector('html')
    html.style.overflow = 'hidden'
  }, [setIsMobileNavigationOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeNavigation()
        return
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeNavigation])

  useEffect(() => {
    const handleNavigationWithArrowKeys = (event) => {
      if (event.key === 'ArrowDown') {
        // on each arrow down key press, focus on the next navigation button
        const navigationButtons = document.querySelectorAll('.navigation-button')
        if (navigationButtons.length) {
          navigationButtons[keyPressCounter].focus()
          setKeyPressCounter((prev) => (prev + 1) % navigationButtons.length)
        }
      }

      if (event.key === 'ArrowUp') {
        const navigationButtons = document.querySelectorAll('.navigation-button')
        if (navigationButtons.length) {
          navigationButtons[keyPressCounter].focus()
          setKeyPressCounter(
            (prev) => (prev - 1 + navigationButtons.length) % navigationButtons.length
          )
        }
      }
    }

    window.addEventListener('keydown', handleNavigationWithArrowKeys)

    return () => {
      window.removeEventListener('keydown', handleNavigationWithArrowKeys)
    }
  })

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.shiftKey && event.key === 'K') {
        // hack that clears the input and ignores just pressed shift + K as an input value
        isNavigationOpen || isMobileNavigationOpen
          ? setTimeout(() => {
              closeNavigation()
            }, delay)
          : setTimeout(() => {
              openNavigation()
            }, delay)
        return
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [
    isNavigationOpen,
    isMobileNavigationOpen,
    closeNavigation,
    openNavigation,
    setIsMobileNavigationOpen,
  ])

  const onSubmit = (event) => {
    event.preventDefault()
    const route = routes.find((route) => route.path === search)
    if (route) {
      navigate(route.path)
    }
  }

  const shouldShowNavigation = isNavigationOpen || isMobileNavigationOpen

  if (!shouldShowNavigation) {
    return null
  }

  return (
    <FocusTrap active>
      <div className="search-container show">
        <form onSubmit={onSubmit} className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            onChange={(event) => {
              setSearch(event.target.value)
            }}
            className='navigation-input'
            value={search}
          />

          <FaArrowRight className="absolute" />
          <SearchResults
            searchResults={searchedResults.length ? searchedResults : allRoutes}
          />
        </form>
        <button onClick={closeNavigation} className="absolute secondary">
          Close
        </button>
      </div>
    </FocusTrap>
  )
}

export default SearchBar
