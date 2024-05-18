import posts from '../../data/posts'

const PostsPage = () => {
  return (
    <section className="container large-padding-top">
      <h2>I like to write about the technology.</h2>
      <div className="grid">
        {posts.map((post) => {
          return (
            <a
              href={`/post/${post.id}`}
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
  )
}

export default PostsPage
