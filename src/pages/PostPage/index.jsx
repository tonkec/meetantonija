import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import PostsImage from './PostsImage'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './Post.scss'
import posts from '../../data/posts'
import {
  formatNoteTitle,
  removeSpacesAndDashes,
  shuffleArray,
} from '../../utils'
import { readingTime } from 'reading-time-estimator'
import { Helmet } from 'react-helmet'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { SinglePost } from '../PostsPage'
import { setQueryParams } from '../../components/Paginated'

const Tags = (tags, handleTagClick) => {
  return (
    <p className="small-margin-bottom">
      {tags.split(',').map((tag) => (
        <span
          key={tag}
          className="tag bg-black small-margin-right border-radius pointer"
          onClick={() => {
            handleTagClick(tag)
          }}
        >
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
  const { title } = useParams()
  const otherPosts = posts.filter(
    (post) => formatNoteTitle(post.title) !== formatNoteTitle(title)
  )
  const currentPost = posts.find(
    (post) => formatNoteTitle(post.title) === formatNoteTitle(title)
  )

  const handleTagClick = (tag) => {
    navigate('/posts')
    const lowercasedTag = removeSpacesAndDashes(tag).toLowerCase()
    setQueryParams({ page: 1, tag: lowercasedTag })
  }

  useEffect(() => {
    import(`./../../data/notes/${title}.md`)
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
  }, [title, navigate])

  if (isLoading) {
    return (
      <div className="post-loader post-container">
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
      <Helmet>
        <title>Meetantonija | {currentPost.title}</title>
      </Helmet>
      <ReactMarkdown
        children={text}
        components={{
          h1({ children }) {
            return (
              <header className="medium-padding-top medium-padding-bottom small-margin-bottom">
                <div className="post-container">
                  <Link
                    to="/posts"
                    className="post-link flex flex-y-center medium-margin-bottom"
                  >
                    <IoIosArrowRoundBack fontSize="2rem" />{' '}
                    <h5> Back to all posts</h5>
                  </Link>
                  {currentPost && Tags(currentPost.tags, handleTagClick)}
                  <span>{minutesToRead} to read</span>
                  <h1>{children}</h1>
                </div>
              </header>
            )
          },

          h4({ children }) {
            return (
              <h4 className="post-container medium-margin-top">{children}</h4>
            )
          },

          p({ children }) {
            return (
              <p className="post-container medium-margin-top">{children}</p>
            )
          },
          a: ({ node, children, ...props }) => {
            return (
              <a
                {...props}
                target="_blank"
                rel="noreferrer"
                className="normal-font text-black"
              >
                {children}
              </a>
            )
          },
          blockquote({ children }) {
            return (
              <blockquote className="post-container medium-margin-top">
                {children}
              </blockquote>
            )
          },
          img({ src, alt }) {
            return <PostsImage src={src} alt={alt} />
          },
          code({ node, inline, className, children, ...props }) {
            return (
              <span>
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  language={String(className).replace('language-', '')}
                  style={atomOneDark}
                  customStyle={{
                    display: 'inline',
                  }}
                />
              </span>
            )
          },
          ol({ children }) {
            return (
              <div className="post-container">
                <ol>{children}</ol>
              </div>
            )
          },

          pre({ children }) {
            return <div className="post-container code-block">{children}</div>
          },
        }}
      />

      <section className="post-container">
        <div className="extra-large-margin-top large-margin-bottom">
          {shuffleArray(otherPosts)
            .slice(0, 1)
            .map((post) => (
              <SinglePost
                key={post.id}
                post={post}
                onClick={(tag) => {
                  handleTagClick(tag)
                }}
              />
            ))}
        </div>
      </section>
    </div>
  )
}

export default PostPage
