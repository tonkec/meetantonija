import posts from '../../data/posts'

const PostsPage = () => {
  return <main className="container">
   {posts.map((post) => {
      return (
        <a href={`/post/${post.id}`} key={post.id} className="note">
          <h2>{post.title}</h2>
          <p>{post.subtitle}</p>
        </a>
      )
    } ) 
   }  
    
  </main>
}

export default PostsPage
