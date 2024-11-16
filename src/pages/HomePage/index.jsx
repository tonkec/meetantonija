import HireMe from '../../components/HireMe'
import Header from './components/Header'
import Previewer from './components/Previewer'
import Aside from './components/Aside'
import Videos from './components/Videos/'
import projects from '../../data/projects'
import { Helmet } from 'react-helmet'
import Tabs from './components/Tabs'
import Testimonial from './components/Testimonial'
import { useCallback, useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

import { rootImageUrl } from '../../rootImageUrl'
import Paginated from 'components/Paginated'
import { removeSpacesAndDashes, truncateString } from 'utils'
import { useNavigate } from 'react-router-dom'

const SingleProject = ({ post }) => {
  const navigate = useNavigate()
  return (
    <>
      <article className="flex flex-grow-1 flex-responsive">
        <div className="bg-pink xs-padding border-top-left-radius">
          <h5>{post.data.title}</h5>
          <h6>{post.data.headline}.</h6>
          <p className="small-margin-top">
            {truncateString(post.data.conclusion, 300)}
          </p>
        </div>

        <div className="bg-pink-dark xs-padding flex-1 border-top-right-radius">
          <h5 className="small-margin-bottom"> Skills:</h5>
          {post.data.skills.split(', ').map((skill, index) => (
            <span
              key={index}
              className="tag dark border-radius small-margin-right small-margin-bottom"
              role="button"
              onClick={() => {
                navigate(`/cv?skill=${removeSpacesAndDashes(skill)}`)
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </article>
      <button
        onClick={() => {
          navigate(`/project/${removeSpacesAndDashes(post.data.title)}`)
        }}
        className="dark w-full no-border-radius border-bottom-left-radius border-bottom-right-radius "
      >
        Read more
      </button>
    </>
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
      'It was a pleasure to work with Antonija. She is a very fast working developer with a large scope of frontend technologies. She takes every task in great detail and brings her advice and insight into development.  In the end she did great development.',
    author: 'Mario Stipetić',
    project: 'Peaks',
    avatar: rootImageUrl + 'testimonials/mario.jpeg',
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
      'Antonija has demonstrated a strong command of React Native, consistently creating smooth, functional mobile applications with a keen attention to UI/UX detail. Leveraging React Native’s core strengths, Antonija adept at building cross-platform apps that perform seamlessly on both iOS and Android.',
    author: 'Dražen Lučanin',
    project: 'Craftstrom',
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

      <Previewer ref={myRef} />

      <section>
        <div className="container">
          <h2>💼 I work with clients.</h2>

          <Paginated
            data={projects.sort((a, b) => b.from - a.from)}
            postsPerPage={2}
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

      <section className="">
        <div className="container">
          <h2 className="text-black">🎨 I work on side projects.</h2>
        </div>
        <Tabs />
      </section>

      <Aside numberOfPosts={3} />

      <Videos />

      <HireMe />
    </>
  )
}

export default HomePage
