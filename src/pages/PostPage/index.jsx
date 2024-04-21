import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import PostsImage from './PostsImage'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './Posts.scss'

const PostPage = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const { id } = useParams()
  useEffect(() => {
    import(`./../../data/notes/${id}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((response) => {
            setText(response)
          })
          .catch((err) => {
            console.log(err)
            navigate('/')
          })
      })
      .catch(() => navigate('/404'))
  }, [id, navigate])
  return (
    <div className="post-page">
      <ReactMarkdown
        children={text}
        components={{
          h1({ children }) {
            return (
              <div className="container">
                <h1>{children}</h1>
              </div>
            )
          },
          p({ children }) {
            return (
              <div className="container">
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
                  style={nord}
                />
              </div>
            )
          },
        }}
      />
    </div>
  )
}

export default PostPage
