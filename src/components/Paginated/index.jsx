import { useEffect, useState } from 'react'
import { SinglePost } from '../../pages/PostsPage'

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

const Pagination = ({ data }) => {
  const postsPerPage = 4
  const [paginatedPosts, setPaginatedPosts] = useState(data.slice(0, postsPerPage))

  const [currentPage, setCurrentPage] = useState(1)
 
  const totalPages = Math.ceil(data.length / postsPerPage)

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const page = searchParams.get('page')
    if (page) {
      setCurrentPage(Number(page))
      setPaginatedPosts(
        data.slice((page - 1) * postsPerPage, page * postsPerPage)
      )
    } else {
      setQueryParams({ page: 1 })
    }
  }, [totalPages, data])

  const onPageChange = (page) => {
    setQueryParams({ page })
    setPaginatedPosts(
      data.slice((page - 1) * postsPerPage, page * postsPerPage)
    )
    if (page < 1 || page > totalPages) {
      return
    }
    setCurrentPage(page)
  }

  const shouldShowButtons = totalPages > 1

  return (
    <>
      <div
        className="grid"
        style={
          paginatedPosts.length === 1
            ? { maxWidth: '50%' }
            : { maxWidth: 'none' }
        }
      >
        {paginatedPosts.length ? (
          paginatedPosts.map((post) => {
            return <SinglePost post={post} />
          })
        ) : (
          <p>No posts found.</p>
        )}
      </div>

      {shouldShowButtons && (
        <div className="medium-margin-top flex flex-x-center flex-y-center flex-gap">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="secondary"
          >
            Previous
          </button>
          <span>
            {currentPage}/ {totalPages}
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="secondary"
          >
            Next
          </button>
        </div>
      )}
    </>
  )
}

export default Pagination
