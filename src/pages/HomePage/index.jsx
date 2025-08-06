import Header from './components/Header'
import Previewer from './components/Previewer'
import Aside from './components/Aside'
import Videos from './components/Videos/'
import projects from '../../data/projects'
import { Helmet } from 'react-helmet'
import Testimonial from './components/Testimonial'
import { useCallback, useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { rootImageUrl } from '../../rootImageUrl'
import Paginated from 'components/Paginated'
import { removeSpacesAndDashes } from 'utils'
import { useNavigate } from 'react-router-dom'
import Image from 'components/Image'
import Cta from 'components/Cta'
import Social from 'components/Social'

const SingleProject = ({ post }) => {
  const navigate = useNavigate()
  return (
    <div className="bg-pink-light xs-padding flex flex-responsive flex-gap space-between">
      <Image src={post.data.coverPhoto} isBackgroundImage />
      <div className="flex-1">
        <h2 className="no-padding">{post.data.title}</h2>
        <p className="small-margin-top">{post.data.conclusion}</p>

        <button
          onClick={() => {
            navigate(`/project/${removeSpacesAndDashes(post.data.title)}`)
          }}
          className="primary small-margin-top"
        >
          Read more 👉
        </button>
      </div>
    </div>
  )
}

const testimonials = [
  {
    content:
      "Antonija is a superb developer. She is detail focused and she helped us make a superb educational product. She is a pleasure to work with. I'd highly recommend her.",
    author: "Brian O'Grady",
    project: 'Code Institute',
    avatar: rootImageUrl + 'testimonials/brian.jpeg',
  },
  {
    content:
      "Thank you so much for staying dedicated and working hard on all of the TINT projects we give you. You've made our lives easier and have allowed Joel and I to focus more on growing our brand and enhancing our UX",
    author: 'Daniel Baldwin',
    project: 'TINT',
    avatar: rootImageUrl + 'testimonials/daniel.jpeg',
  },
  {
    content:
      'Antonija is a great developer. She is very detail oriented and she always delivers on time. I would highly recommend her to anyone looking for a serious developer.',
    author: 'Dražen Lučanin',
    project: 'Formunauts',
    avatar: rootImageUrl + 'testimonials/drazen.jpeg',
  },
]

const HomePage = () => {
  const myRef = useRef(null)

  const handleScrollToElement = useCallback(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <>
      <Helmet>
        <title>Meetantonija | Home </title>
      </Helmet>
      <Header />

      <div className="container">
        <div className="text-center">
          <FaChevronDown
            onClick={() => handleScrollToElement()}
            className="pointer"
            fontSize={50}
            color="var(--color-pink)"
          />
        </div>
      </div>

      <div className="container" ref={myRef} style={{ paddingTop: '80px' }}>
        <h2 className="medium-margin-bottom">🌐 I am active online.</h2>
        <Social />
      </div>

      <section>
        <div className="container">
          <h2>💼 I work with clients.</h2>

          <Paginated
            data={projects.sort((a, b) => b.from - a.from)}
            postsPerPage={1}
            singleEntry={(project) => <SingleProject post={project} />}
          />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>🗣 What they say about me.</h2>
          <div className="grid">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <Previewer />

      <Aside numberOfPosts={3} />

      <Videos />

      <Cta />
    </>
  )
}

export default HomePage
