import posts from 'data/posts'
import { Helmet } from 'react-helmet'
import { formatNoteTitle } from 'utils'
import Image from 'components/Image'
import Paginated, { setQueryParams } from 'components/Paginated'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const sortedPosts = posts.sort((a, b) => {
  return new Date(b.date) - new Date(a.date)
})

export const SinglePost = ({ post, onClick }) => {
  const navigate = useNavigate()
  const currentPost = post.data ? post.data : post
  const onSinglePostClick = post.onClick ? post.onClick : onClick

  return (
    <div
      key={currentPost.id}
      className="small-padding border-radius h-full bg-pink-light"
    >
      <span className="flex flex-y-center small-margin-bottom flex-gap-small">
        <Image
          src="https://avatars.githubusercontent.com/u/5020758?v=4"
          style={{ width: 50, height: 50, borderRadius: '50%' }}
        />
        <h6>
          {currentPost.author} | {currentPost.date}{' '}
        </h6>
      </span>
      <span className="inline-block">
        <h3>{currentPost.title}</h3>
      </span>

      <p>{currentPost.subtitle}</p>

      {currentPost.tags && (
        <p className="small-margin-top flex flex-wrap flex-gap-small">
          {currentPost.tags.split(', ').map((tag) => (
            <span
              key={tag}
              className="tag bg-dark border-radiu pointer"
              onClick={() => {
                onSinglePostClick(tag)
              }}
            >
              {tag}
            </span>
          ))}
        </p>
      )}
      <span className="flex align-start flex-gap space-between small-margin-top">
        <button
          className="primary xs-padding border-radius inline-block no-underline"
          onClick={() => {
            navigate(`/post/${formatNoteTitle(currentPost.title)}`)
          }}
        >
          Read post
        </button>
        {currentPost.hasOwnProperty('icon') && (
          <span className="extra-large-font">{currentPost.icon()}</span>
        )}
      </span>
    </div>
  )
}

const PostsPage = () => {
  const [search, setSearch] = useState('')

  const filteredPosts = sortedPosts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <Helmet>
        <title>Meetantonija | All Posts</title>
      </Helmet>
      <section className="container extra-large-padding-top">
        <h2 className="no-padding">I like to write about the technology.</h2>

        <input
          type="text"
          placeholder="Search posts by title"
          className="small-margin-top bg-pink-light border-none small-margin-bottom w-full border-radius xs-padding"
          onChange={(e) => {
            setSearch(e.target.value)
            setQueryParams({ search: e.target.value })
            setQueryParams({ page: 1 })
          }}
          value={search}
        />
        <Paginated
          data={filteredPosts}
          postsPerPage={2}
          searchValue={search}
          clearSearch={() => {
            setSearch('')
          }}
          singleEntry={(post, onClick) => {
            return <SinglePost post={post} onClick={onClick} />
          }}
        />
      </section>
    </>
  )
}

export default PostsPage
