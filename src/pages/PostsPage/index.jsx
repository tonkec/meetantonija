import posts from '../../data/posts'
import { Helmet } from 'react-helmet'
import { formatNoteTitle } from '../../utils'
import Image from '../../components/Image'
import Paginated, { setQueryParams } from '../../components/Paginated'
import { useState } from 'react'

const sortedPosts = posts.sort((a, b) => {
  return new Date(b.date) - new Date(a.date)
})

export const SinglePost = ({ post, onClick }) => {
  return (
    <div key={post.id} className="bg-black small-padding border-radius">
      <span className="flex flex-y-center small-margin-bottom flex-gap-small">
        <Image
          src="https://avatars.githubusercontent.com/u/5020758?v=4"
          style={{ width: 50, height: 50, borderRadius: '50%' }}
        />
        <h6>
          {post.author} | {post.date}{' '}
        </h6>
      </span>
      <span className="inline-block">
        <h3>{post.title}</h3>
      </span>

      <p>{post.subtitle}</p>

      <p className="small-margin-top flex flex-gap-small">
        {post.tags.split(', ').map((tag) => (
          <span
            key={tag}
            className="tag bg-dark border-radiu pointer"
            onClick={() => {
              onClick(tag)
            }}
          >
            {tag}
          </span>
        ))}
      </p>

      <span className="flex align-start flex-gap space-between medium-margin-top">
        <a
          className="secondary xs-padding border-radius inline-block no-underline normal-font"
          href={`/post/${formatNoteTitle(post.title.toLowerCase())}`}
          role="button"
        >
          Read post
        </a>
        <span className="extra-large-font">{post.icon()}</span>
      </span>
    </div>
  )
}

const PostsPage = () => {
  const [search, setSearch] = useState('')

  const filteredPosts = sortedPosts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <Helmet>
        <title>Meetantonija | All Posts</title>
      </Helmet>
      <section className="container large-padding-top">
        <h2>I like to write about the technology.</h2>

        <input
          type="text"
          placeholder="Search posts by title"
          className="small-margin-top small-margin-bottom w-full border border-radius xs-padding"
          onChange={(e) => {
            setSearch(e.target.value)
            setQueryParams({ search: e.target.value })
            setQueryParams({ page: 1 })
          }}
          value={search}
        />
        <Paginated
          data={filteredPosts}
          searchValue={search}
          clearSearch={() => {
            setSearch('')
          }}
        />
      </section>
    </>
  )
}

export default PostsPage
