import { useCallback, useEffect, useMemo, useState } from 'react'
import { removeSpacesAndDashes } from 'utils'
import { useWindowSize } from 'hooks/useWindowSize'

const getMaxWidth = (posts, windowWidth, postsPerPage) => {
  if (postsPerPage === 1) return { maxWidth: '100%' }

  if (windowWidth < 768) return { maxWidth: '100%' }

  if (posts.length === 1) return { maxWidth: '33.33333%' }

  return { maxWidth: '100%' }
}

export const setQueryParams = (params) => {
  const searchParams = new URLSearchParams(window.location.search)

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === '') {
      searchParams.delete(key)
    } else {
      searchParams.set(key, String(value))
    }
  }

  window.history.pushState(
    {},
    '',
    `${window.location.pathname}?${searchParams.toString()}`
  )

  window.dispatchEvent(new Event('popstate'))
}

const Pagination = ({
  data = [],
  clearSearch = () => {},
  searchValue = '',
  singleEntry: SingleEntry,
  postsPerPage = 4,
}) => {
  const { width } = useWindowSize()

  // ✅ make URL changes reactive (pushState doesn't re-render by itself)
  const [locationSearch, setLocationSearch] = useState(window.location.search)

  useEffect(() => {
    const onPopState = () => setLocationSearch(window.location.search)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const searchParams = useMemo(
    () => new URLSearchParams(locationSearch),
    [locationSearch]
  )
  const searchParamFromUrl = searchParams.get('search') || ''

  const pageParam = searchParams.get('page')
  const tagParamFromUrl = searchParams.get('tag')

  const [tagParam, setTagParam] = useState(
    tagParamFromUrl ? tagParamFromUrl.toLowerCase() : ''
  )
  const [paginatedPosts, setPaginatedPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setTagParam(tagParamFromUrl ? tagParamFromUrl.toLowerCase() : '')
  }, [tagParamFromUrl])

  const filteredData = useCallback(() => {
    const normalizedSearch = (searchParamFromUrl || searchValue)
      .trim()
      .toLowerCase()

    return data.filter((post) => {
      const matchesTag = tagParam
        ? post.tags
            .split(', ')
            .map((t) => removeSpacesAndDashes(t).toLowerCase())
            .includes(removeSpacesAndDashes(tagParam).toLowerCase())
        : true

      const matchesSearch = normalizedSearch
        ? (post.title || '').toLowerCase().includes(normalizedSearch) ||
          (post.description || '').toLowerCase().includes(normalizedSearch) ||
          (post.content || '').toLowerCase().includes(normalizedSearch)
        : true

      return matchesTag && matchesSearch
    })
  }, [data, tagParam, searchParamFromUrl, searchValue])

  const totalPages = Math.max(
    1,
    Math.ceil(filteredData().length / postsPerPage)
  )

  useEffect(() => {
    const pageInUrl = searchParams.get('page')
    const tagInUrl = searchParams.get('tag') ?? ''

    if (!pageInUrl) {
      setQueryParams({ page: 1, tag: tagInUrl })
      setCurrentPage(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationSearch])

  useEffect(() => {
    const nextPage = pageParam ? Number(pageParam) : 1

    const safePage =
      Number.isFinite(nextPage) && nextPage >= 1 && nextPage <= totalPages
        ? nextPage
        : 1

    const startIdx = (safePage - 1) * postsPerPage
    const endIdx = startIdx + postsPerPage

    setPaginatedPosts(filteredData().slice(startIdx, endIdx))
    setCurrentPage(safePage)

    if (safePage !== nextPage) {
      setQueryParams({ page: safePage, tag: tagParam })
    }
  }, [pageParam, postsPerPage, filteredData, totalPages, tagParam])

  const onPageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setQueryParams({ page, tag: tagParam })
    setCurrentPage(page)
  }

  const shouldShowButtons = totalPages > 1
  const shouldShowClearButton =
    tagParam !== '' || searchValue !== '' || searchParamFromUrl !== ''

  const handleTagClick = (tag) => {
    const lowercasedTag = tag.toLowerCase()
    setTagParam(lowercasedTag)
    setQueryParams({ page: 1, tag: lowercasedTag })
    setCurrentPage(1)
  }

  return (
    <>
      {tagParam && (
        <h5 className="small-margin-top">
          Tag: <span className="tag bg-dark border-radius">{tagParam}</span>
        </h5>
      )}

      {shouldShowClearButton && (
        <button
          onClick={() => {
            setTagParam('')
            setQueryParams({ search: '', page: 1, tag: '' })
            clearSearch()
          }}
          className="post-filter-clear ternary small-margin-bottom small-margin-top"
        >
          Clear all filters
        </button>
      )}

      <div className="medium-grid">
        {paginatedPosts.length ? (
          paginatedPosts.map((post, index) => (
            <div
              key={index}
              style={getMaxWidth(paginatedPosts, width, postsPerPage)}
            >
              <SingleEntry data={post} onClick={(t) => handleTagClick(t)} />
            </div>
          ))
        ) : (
          <div className="posts-empty-state" aria-live="polite">
            <span>No matches</span>
            <h2>No notes found</h2>
            <p>Try a different search term or clear the active filters.</p>
          </div>
        )}
      </div>

      {shouldShowButtons && (
        <div className="medium-margin-top flex flex-x-center flex-y-center flex-gap">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="ternary"
          >
            Previous
          </button>

          <span>
            {currentPage}/{totalPages}
          </span>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="ternary"
          >
            Next
          </button>
        </div>
      )}
    </>
  )
}

export default Pagination
