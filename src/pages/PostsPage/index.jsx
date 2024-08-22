import { useState } from 'react'
import posts from '../../data/posts'
import { Helmet } from 'react-helmet'
import { formatNoteTitle } from '../../utils'
import Image from '../../components/Image'

export const SinglePost = ({ post }) => {
  return (
    <div key={post.id} className="bg-black small-padding border-radius">
      <span className="flex flex-y-center small-margin-bottom flex-gap-small">
        <Image
          src="https://avatars.githubusercontent.com/u/5020758?v=4"
          style={{ width: 50, height: 50, borderRadius: '50%' }}
        />
        <h6>
          {post.author} | {post.date}{' '}
        </h6>
      </span>
      <span className="inline-block">
        <h3>{post.title}</h3>
      </span>

      <p>{post.subtitle}</p>

      <p className="small-margin-top flex flex-gap-small">
        {post.tags.split(', ').map((tag) => (
          <span key={tag} className="tag bg-dark border-radius">
            {tag}
          </span>
        ))}
      </p>

      <span className="flex flex-y-center flex-gap space-between medium-margin-top">
        <a
          className="secondary xs-padding border-radius inline-block no-underline normal-font"
          href={`/post/${formatNoteTitle(post.title.toLowerCase())}`}
          role="button"
        >
          Read post
        </a>
        <span className="extra-large-font">{post.icon()}</span>
      </span>
    </div>
  )
}

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
        <div className="flex flex-y-center medium-margin-bottom">
          <input
            type="text"
            placeholder={`Search ${posts.length} posts`}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            className="w-full xs-padding border border-radius"
          />
        </div>
        <div
          className="grid"
          style={
            postsToRender.length === 1
              ? { maxWidth: '50%' }
              : { maxWidth: 'none' }
          }
        >
          {postsToRender.length ? (
            postsToRender.map((post) => {
              return <SinglePost post={post} />
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
