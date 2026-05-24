import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import PostsImage from './PostsImage'
import SyntaxHighlighter from 'react-syntax-highlighter'
import './Post.scss'
import posts from 'data/posts'
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
import HireMe from 'components/HireMe'

const Tags = (tags, handleTagClick) => {
  return (
    <div className="post-tags">
      {tags.split(',').map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => {
            handleTagClick(tag)
          }}
        >
          {tag}
        </button>
      ))}
    </div>
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
      <div className="post-loader container">
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
              <header className="post-hero">
                <div className="container post-hero-grid">
                  <div>
                  <Link
                    to="/posts"
                    className="post-back-link"
                  >
                    <IoIosArrowRoundBack fontSize="2rem" />
                    <span>Back to all notes</span>
                  </Link>
                    <p className="section-kicker">Note</p>
                  <h1>{children}</h1>
                    {currentPost?.intro && <p>{currentPost.intro}</p>}
                  </div>
                  <aside className="post-hero-card">
                    <span>{minutesToRead} read</span>
                    <strong>{currentPost?.date}</strong>
                    {currentPost && Tags(currentPost.tags, handleTagClick)}
                  </aside>
                </div>
              </header>
            )
          },
          h4({ children }) {
            return (
              <h4 className="post-content-container post-heading">{children}</h4>
            )
          },
          h5({ children }) {
            return (
              <h5 className="post-content-container post-heading">{children}</h5>
            )
          },

          h2({ children }) {
            return (
              <h2 className="post-content-container post-heading">{children}</h2>
            )
          },
          h3({ children }) {
            return (
              <h3 className="post-content-container post-heading">{children}</h3>
            )
          },
          h6({ children }) {
            return (
              <h6 className="post-content-container post-heading">{children}</h6>
            )
          },
          strong({ children }) {
            return <strong>{children}</strong>
          },
          em({ children }) {
            return <em>{children}</em>
          },
          i({ children }) {
            return <i>{children}</i>
          },
          b({ children }) {
            return <b>{children}</b>
          },
          p({ children }) {
            return (
              <p className="post-content-container post-paragraph post-body-block">
                {children}
              </p>
            )
          },
          a: ({ node, children, ...props }) => {
            return (
              <a
                {...props}
                target="_blank"
                rel="noreferrer"
                className="normal-font"
              >
                {children}
              </a>
            )
          },
          blockquote({ children }) {
            return (
              <blockquote className="post-content-container">
                <i>{children}</i>
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
                  customStyle={{
                    display: 'inline',
                  }}
                />
              </span>
            )
          },
          ol({ children }) {
            return (
              <div className="post-content-container post-list">
                <ol>{children}</ol>
              </div>
            )
          },

          ul({ children }) {
            return (
              <div className="post-content-container post-list">
                <ul>{children}</ul>
              </div>
            )
          },
          pre({ children }) {
            return <div className="post-content-container code-block">{children}</div>
          },
        }}
      />

      <section className="post-related">
        <div className="container">
          <p className="section-kicker">Keep reading</p>
          <h2>Read more notes.</h2>
          <p>
            Here are some of my other notes that you might find interesting.
          </p>
          <div className="post-related-grid">
            {shuffleArray(otherPosts)
              .slice(0, 3)
              .map((post) => (
                <div key={post.id}>
                  <SinglePost
                    post={post}
                    onClick={(tag) => {
                      handleTagClick(tag)
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      <HireMe />
    </div>
  )
}

export default PostPage
