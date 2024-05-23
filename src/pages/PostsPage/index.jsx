import posts from '../../data/posts'
import { Helmet } from 'react-helmet'
import { formatNoteTitle } from '../../utils'

const PostsPage = () => {
  return (
    <>
      <Helmet>
        <title>Meetantonija | All Posts</title>
      </Helmet>
      <section className="container large-padding-top">
        <h2>I like to write about technology.</h2>
        <div className="grid">
          {posts.map((post) => {
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
          })}
        </div>
      </section>
    </>
  )
}

export default PostsPage
