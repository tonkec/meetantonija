import posts from '../../data/posts'

const PostsPage = () => {
  return (
    <main className="container">
      <section className="bg-white has-padding">
        <h2>All of my posts.</h2>
        {posts.map((post) => {
          return (
            <a href={`/post/${post.id}`} key={post.id} className="note">
              <h3>{post.title}</h3>
              <p>{post.subtitle}</p>
            </a>
          )
        })}
      </section>
    </main>
  )
}

export default PostsPage
