import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import PostsImage from './PostsImage'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './Post.scss'
import posts from '../../data/posts'
import { shuffleArray } from '../../utils'
import { readingTime } from 'reading-time-estimator'

const Tags = (tags) => {
  return (
    <p className="small-margin-bottom">
      {tags.split(',').map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </p>
  )
}

const PostPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const { id } = useParams()
  const otherPosts = posts.filter((post) => post.id !== id)
  const currentPost = posts.find((post) => post.id === Number(id))
  useEffect(() => {
    import(`./../../data/notes/${id}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((response) => {
            setIsLoading(false)
            setText(response)
          })
          .catch((err) => {
            console.log(err)
            navigate('/')
          })
      })
      .catch(() => navigate('/404'))
  }, [id, navigate])

  if (isLoading) {
    return (
      <div className="post-loader">
        <h2>Fetching post data from markdown files...</h2>
      </div>
    )
  }

  const minutesToRead =
    readingTime(text).minutes === 1
      ? '1 minute'
      : `${readingTime(text).minutes} minutes`
  return (
    <div className="post-page">
      <ReactMarkdown
        children={text}
        components={{
          h1({ children }) {
            return (
              <header className="medium-padding-top medium-padding-bottom small-margin-bottom">
                <div className="container">
                  {currentPost && Tags(currentPost.tags)}
                  <span>{minutesToRead} to read</span>
                  <h1>{children}</h1>
                </div>
              </header>
            )
          },
          p({ children }) {
            return <p className="container medium-margin-top">{children}</p>
          },
          img({ src }) {
            return <PostsImage src={src} />
          },
          code({ node, inline, className, children, ...props }) {
            return (
              <div className="container">
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  language={'Javascript'}
                  PreTag="div"
                  style={monoBlue}
                />
              </div>
            )
          },
        }}
      />

      <section
        className="container large-margin-top bg-black medium-padding border-radius max-w-600 pointer primary"
        role="button"
      >
        {shuffleArray(otherPosts)
          .slice(0, 1)
          .map((post) => (
            <div
              key={post.id}
              className="medium-padding small-margin-bottom text-center"
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <h5>Read next</h5>
              <h3 className="small-margin-bottom">{post.title}</h3>
              {post && Tags(post.tags)}
            </div>
          ))}
      </section>
    </div>
  )
}

export default PostPage
