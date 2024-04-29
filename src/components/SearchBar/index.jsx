import { useEffect, useState, useRef, forwardRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import routes from '../../routes'
import FocusTrap from 'focus-trap-react'
import { FaArrowRight } from 'react-icons/fa'
import projects from '../../data/projects'
import posts from '../../data/posts'

import './SearchBar.scss'

const delay = 0.1
const maxNumberOfResults = 2

const SearchResults = forwardRef(({ searchResults }, ref) => {
  return (
    <div ref={ref} className="search-results">
      {searchResults}
    </div>
  )
})

const SearchBar = ({ isMobileNavigationOpen }) => {
  const searchResultsRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
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
      <input
        key={route.path}
        className="block w-full text-left ternary"
        onClick={() => {
          navigate(route.path)
          setIsNavigationOpen(false)
        }}
        value={`Page: ${route.path}`}
        type="submit"
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
      <input
        key={project.title}
        className="block w-full text-left ternary"
        onClick={() => {
          navigate(`/project/${project.id}`)
          setIsNavigationOpen(false)
        }}
        type="submit"
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
      <input
        key={post.title}
        className="block w-full text-left ternary"
        onClick={() => {
          navigate(`/post/${post.id}`)
          setIsNavigationOpen(false)
        }}
        type="submit"
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
      <input
        key={route.path}
        className="block w-full text-left ternary"
        onClick={() => {
          navigate(route.path)
          setIsNavigationOpen(false)
        }}
        type="submit"
        value={`Page: ${route.path}`}
      />
    ))

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

  const onKeyDownPress = (event) => {
    if (event.key === 'Escape') {
      setIsNavigationOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownPress)

    return () => {
      window.removeEventListener('keydown', onKeyDownPress)
    }
  }, [])

  const shouldShowNavigation = isMobileNavigationOpen || isNavigationOpen

  if (!shouldShowNavigation) {
    return null
  }

  return (
    <FocusTrap>
      <div className="search-container show">
        <form onSubmit={onSubmit} className="relative" autoFocus>
          <input
            type="text"
            placeholder="What are you looking for?"
            onChange={(event) => {
              setSearch(event.target.value)
            }}
            value={search}
          />

          <FaArrowRight className="absolute" />
          <SearchResults
            ref={searchResultsRef}
            searchResults={searchedResults.length ? searchedResults : allRoutes}
          />
        </form>
      </div>
    </FocusTrap>
  )
}

export default SearchBar
