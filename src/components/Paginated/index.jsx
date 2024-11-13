import { useEffect, useState } from 'react'
import { removeSpacesAndDashes } from 'utils'
import { SinglePost } from 'pages/PostsPage'
import { useWindowSize } from 'hooks/useWindowSize'
const getMaxWidth = (posts, windowSize) => {
  if (windowSize < 768) {
    return { maxWidth: '100%' }
  }

  if (posts.length === 1) {
    return { maxWidth: '50%' }
  }

  return { maxWidth: '100%' }
}

export const setQueryParams = (params) => {
  const searchParams = new URLSearchParams(window.location.search)
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      searchParams.set(key, value)
    } else {
      searchParams.delete(key)
    }
  }
  window.history.pushState(
    {},
    '',
    `${window.location.pathname}?${searchParams}`
  )
}

const Pagination = ({ data = [], clearSearch, searchValue }) => {
  const { width } = useWindowSize()
  const searchParams = new URLSearchParams(window.location.search)
  const page = searchParams.get('page')
  const tag = searchParams.get('tag')
  const [tagParam, setTagParam] = useState(tag ? tag.toLowerCase() : '')

  const [paginatedPosts, setPaginatedPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const postsPerPage = 4

  const filteredData = tagParam
    ? data.filter((post) =>
        post.tags
          .split(', ')
          .map((t) => removeSpacesAndDashes(t).toLowerCase())
          .includes(removeSpacesAndDashes(tagParam).toLowerCase())
      )
    : data

  const totalPages = Math.ceil(filteredData.length / postsPerPage)

  useEffect(() => {
    const currentPage = page ? Number(page) : 1

    const startIdx = (currentPage - 1) * postsPerPage
    const endIdx = startIdx + postsPerPage

    setPaginatedPosts(filteredData.slice(startIdx, endIdx))
    setCurrentPage(currentPage)
  }, [page, tagParam, data])

  const onPageChange = (page) => {
    if (page < 1 || page > totalPages) return

    setQueryParams({ page, tag: tagParam })
    setCurrentPage(page)
  }

  const handleTagClick = (tag) => {
    const lowercasedTag = tag.toLowerCase()
    setTagParam(lowercasedTag)
    setQueryParams({ page: 1, tag: lowercasedTag })
  }

  const shouldShowButtons = totalPages > 1
  const shouldShowClearButton = tagParam !== '' || searchValue !== ''

  return (
    <>
      {' '}
      {tagParam && (
        <>
          <h5 className="small-margin-top">
            Tag: <span className="tag bg-dark border-radius">{tagParam}</span>
          </h5>
        </>
      )}
      {shouldShowClearButton && (
        <button
          onClick={() => {
            setTagParam('')
            setQueryParams({ search: '', page: 1, tag: '' })
            clearSearch()
          }}
          className="secondary small-margin-bottom small-margin-top"
        >
          Clear all filters
        </button>
      )}
      <div className="medium-grid">
        {paginatedPosts.length ? (
          paginatedPosts.map((post) => (
            <div style={getMaxWidth(paginatedPosts, width)}>
              <SinglePost
                key={post.id}
                post={post}
                onClick={(tag) => handleTagClick(tag)}
              />
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
      {shouldShowButtons && (
        <div className="medium-margin-top flex flex-x-center flex-y-center flex-gap">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="primary"
          >
            Previous
          </button>
          <span>
            {currentPage}/{totalPages}
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="primary"
          >
            Next
          </button>
        </div>
      )}
    </>
  )
}

export default Pagination
