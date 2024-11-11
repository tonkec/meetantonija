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
import { removeSpacesAndDashes } from 'utils'

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

      <Previewer />
      <section className="">
        <div className="container">
          <h2 className="text-black">🎨 I work on side projects.</h2>
        </div>
        <Tabs />
      </section>

      <section>
        <div className="container">
          <h2>💼 I work with clients.</h2>

          <div className="flex flex-responsive flex-wrap">
            {projects
              .sort((a, b) => b.from - a.from)
              .slice(0, 4)
              .map((project, index) => (
                <div
                  className="flex-50 small-padding no-padding-left"
                  key={index}
                >
                  <h3> {project.title}</h3>
                  <p>
                    <b>Headline:</b> {project.headline}
                  </p>
                  <p>
                    <b>Position: </b>
                    {project.position}
                  </p>
                  <p>
                    <b>About:</b> {project.description}
                  </p>
                  <span className="flex flex-wrap line-height-1">
                    <b>Skills: </b>{' '}
                    {project.skills.split(' ').map((skill, index) => (
                      <span key={index}>{skill}</span>
                    ))}
                  </span>
                  <a
                    className="primary small-margin-top inline-block"
                    role="button"
                    href={`project/${removeSpacesAndDashes(project.title)}`}
                  >
                    Read more
                  </a>
                </div>
              ))}
          </div>
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

      <Aside numberOfPosts={2} />

      <Videos />

      <HireMe />
    </>
  )
}

export default HomePage
