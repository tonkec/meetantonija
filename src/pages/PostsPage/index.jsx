import { useState } from 'react'
import posts from '../../data/posts'
import { Helmet } from 'react-helmet'
import { formatNoteTitle } from '../../utils'

const PostsPage = () => {
  const [search, setSearch] = useState('')
  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase())
  })

  const postsToRender = search ? filteredPosts : posts
  return (
    <>
      <Helmet>
        <title>Meetantonija | All Posts</title>
      </Helmet>
      <section className="container large-padding-top">
        <h2>I like to write about technology.</h2>
        <div className="flex flex-center medium-margin-bottom">
          <input
            type="text"
            placeholder={`Search ${posts.length} posts`}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            className="w-full xs-padding border border-radius"
          />
        </div>
        <div className="grid">
          {postsToRender.length ? (
            postsToRender.map((post) => {
              return (
                <a
                  href={`/post/${formatNoteTitle(post.title.toLowerCase())}`}
                  key={post.id}
                  role="button"
                  className="ternary inline-block small-margin-bottom"
                >
                  <h3>{post.title}</h3>
                  <p>{post.subtitle}</p>
                </a>
              )
            })
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </section>
    </>
  )
}

export default PostsPage
