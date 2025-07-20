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
              <header className="medium-padding-top no-padding-bottom small-margin-bottom">
                <div className="container">
                  <Link
                    to="/posts"
                    className="post-link flex flex-y-center medium-margin-bottom"
                  >
                    <IoIosArrowRoundBack fontSize="2rem" />{' '}
                    <h5> Back to all notes</h5>
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
              <h4 className="container small-padding-bottom">{children}</h4>
            )
          },
          h5({ children }) {
            return (
              <h5 className="container small-padding-bottom">{children}</h5>
            )
          },

          h2({ children }) {
            return (
              <h2 className="container small-padding-bottom">{children}</h2>
            )
          },
          h3({ children }) {
            return (
              <h3 className="container small-padding-bottom">{children}</h3>
            )
          },
          h6({ children }) {
            return (
              <h6 className="container small-padding-bottom">{children}</h6>
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
              <p className="container small-padding-bottom line-height-2">
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
                className="normal-font text-black"
              >
                {children}
              </a>
            )
          },
          blockquote({ children }) {
            return (
              <blockquote className="medium-margin-top">
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
              <div className="container">
                <ol>{children}</ol>
              </div>
            )
          },

          ul({ children }) {
            return (
              <div className="container">
                <ul>{children}</ul>
              </div>
            )
          },
          pre({ children }) {
            return <div className="container code-block">{children}</div>
          },
        }}
      />

      <section className="container">
        <div className="large-margin-top large-margin-bottom">
          <h2 className="no-margin-bottom no-padding-bottom no-padding-top text-center">
            Read more 👉
          </h2>
          <p className="medium-margin-bottom text-center">
            Here are some of my other notes that you might find interesting.
          </p>
          <div className="flex flex-gap-small flex-responsive">
            {shuffleArray(otherPosts)
              .slice(0, 3)
              .map((post) => (
                <div className="flex-1" key={post.id}>
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
