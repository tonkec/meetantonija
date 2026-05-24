import posts from 'data/posts'
import { Helmet } from 'react-helmet'
import { formatNoteTitle } from 'utils'
import Image from 'components/Image'
import Paginated, { setQueryParams } from 'components/Paginated'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HireMe from 'components/HireMe'
import './PostsPage.scss'

const sortedPosts = posts.sort((a, b) => {
  return new Date(b.date) - new Date(a.date)
})

export const SinglePost = ({ post, onClick }) => {
  const navigate = useNavigate()
  const currentPost = post.data ? post.data : post
  const onSinglePostClick = post.onClick ? post.onClick : onClick

  return (
    <article className="post-card">
      <div className="post-card-meta">
        <Image
          src="https://avatars.githubusercontent.com/u/5020758?v=4"
          alt={currentPost.author}
          style={{ width: 42, height: 42, borderRadius: '50%' }}
        />
        <div>
          <span>{currentPost.author}</span>
          <span>{currentPost.date}</span>
        </div>
      </div>

      <div>
        <span className="post-card-level">{currentPost.level || 'note'}</span>
        <h2>{currentPost.title}</h2>
        <p>{currentPost.subtitle}</p>
      </div>

      {currentPost.intro && <p className="post-card-intro">{currentPost.intro}</p>}

      {currentPost.tags && (
        <div className="post-card-tags">
          {currentPost.tags.split(', ').map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                onSinglePostClick(tag)
              }}
            >
              #{tag.toLowerCase()}
            </button>
          ))}
        </div>
      )}

      <button
        className="primary post-card-link"
        onClick={() => {
          navigate(`/post/${formatNoteTitle(currentPost.title)}`)
        }}
      >
        Read note
      </button>
    </article>
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
      <header className="posts-hero">
        <div className="container posts-hero-grid">
          <div>
            <p className="section-kicker">Learning archive</p>
            <h1>Notes for curious frontend developers.</h1>
          </div>
          <p>
            Practical React, JavaScript and performance notes from problems I
            have solved, talks I have prepared and things I keep relearning.
          </p>
        </div>
      </header>
      <section className="posts-page">
        <div className="container">
          <div className="posts-toolbar">
            <label htmlFor="posts-search">Search notes</label>
            <input
              id="posts-search"
              type="text"
              placeholder={`Search ${posts.length} notes by title`}
              onChange={(e) => {
                setSearch(e.target.value)
                setQueryParams({ search: e.target.value })
                setQueryParams({ page: 1 })
              }}
              value={search}
            />
          </div>
          <Paginated
            data={filteredPosts}
            postsPerPage={4}
            searchValue={search}
            clearSearch={() => {
              setSearch('')
            }}
            singleEntry={(post, onClick) => {
              return <SinglePost post={post} onClick={onClick} />
            }}
          />
        </div>
      </section>

      <HireMe className="medium-margin-top" />
    </>
  )
}

export default PostsPage
