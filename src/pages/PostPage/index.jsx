import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import PostsImage from './PostsImage'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './Post.scss'
import TypedText from '../../components/TypedText'
import posts from '../../data/posts'
import { shuffleArray } from '../../utils'

const PostPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const { id } = useParams()
  const otherPosts = posts.filter((post) => post.id !== id)

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

  return (
    <div className="post-page">
      <ReactMarkdown
        children={text}
        components={{
          h1({ children }) {
            return (
              <header className='medium-padding-top medium-padding-bottom small-margin-bottom'>
                <div className="container">
                <TypedText type="h1">{children}</TypedText>
                </div>
              </header>
            )
          },
          p({ children }) {
            return (
              <div className="container medium-margin-top">
                <p>{children}</p>
              </div>
            )
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

      <section className='container medium-margin-top bg-black medium-padding border-radius'>
      <h3 className='small-margin-bottom'>Read some other posts</h3>
          <div className="grid">
            {shuffleArray(otherPosts)
              .slice(0, 2)
              .map((post) => (
                <div key={post.id} className="bg-blue medium-padding small-margin-bottom">
                  <h4>{post.title}</h4>
                  <button
                    onClick={() => navigate(`/post/${post.id}`)}
                    className="ternary small-margin-top inline-block"
                  >
                    Read more
                  </button>
                </div>
              ))}
          </div>
      </section>
    </div>
  )
}

export default PostPage
