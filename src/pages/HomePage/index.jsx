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

const SingleProject = ({ post }) => {
  const navigate = useNavigate()
  return (
    <div className="bg-pink-light xs-padding flex flex-responsive flex-gap space-between">
      <Image src={post.data.coverPhoto} isBackgroundImage />
      <div>
        <h2 className="no-padding">{post.data.title}</h2>
        <p className="small-margin-top">{post.data.conclusion}</p>

        <button
          onClick={() => {
            navigate(`/project/${removeSpacesAndDashes(post.data.title)}`)
          }}
          className="primary small-margin-top"
        >
          Read more
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
      'Antonija is a great developer. She is very detail oriented and she always delivers on time. I would highly recommend her to anyone looking for a React developer.',
    author: 'Dražen Lučanin',
    project: 'Craftstrom',
    avatar: rootImageUrl + 'testimonials/drazen.jpeg',
  },
]

const HomePage = () => {
  const myRef = useRef(null)
  const tldrRef = useRef(null)

  const handleScrollToElement = useCallback(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const handleScrollToTLDR = useCallback(() => {
    tldrRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

      <section className="small-padding large-margin-top">
        <div className="container text-center large-padding bg-sky-blue border-radius">
          <h3 className="text-black small-margin-bottom">
            🏃‍♀️ Are you in a hurry?
          </h3>
          <p className="text-black medium-margin-bottom">
            If you are in a hurry, you can skip to the TLDR; section below.
          </p>

          <button className="primary" onClick={handleScrollToTLDR}>
            Skip to TLDR;
          </button>
        </div>
      </section>

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

      <Aside numberOfPosts={3} />

      <Videos />

      <Cta />

      <section ref={tldrRef}>
        <div className="container">
          <h2> 🏃‍♀️ Here is a quick summary:</h2>

          <p className="medium-font">
            I am a{' '}
            <span className="font-weight-bold medium-font">senior react</span>{' '}
            developer from Croatia (CET) with major open source contributions on{' '}
            <a
              href="https://github.com/tonkec"
              target="_blank"
              rel="noopener noreferrer"
              className="medium-font"
            >
              GitHub
            </a>{' '}
            and{' '}
            <a
              href="https://codepen.io/tonkec"
              target="_blank"
              rel="noopener noreferrer"
              className="medium-font"
            >
              Codepen
            </a>
            . My skills include{' '}
            <span className="font-weight-bold medium-font">Javascript</span>,{' '}
            <span className="font-weight-bold medium-font">Typescript</span>,{' '}
            <span className="font-weight-bold medium-font">React</span>,{' '}
            <span className="font-weight-bold medium-font">Tailwind</span> and
            more. For the past 2 years I have been working with FinTech company
            where I was responsible for building and maintaining complex web
            applications. For the past 6 months I have been working on an open
            source project called Duga. Its source code is available on{' '}
            <a
              href="https://github.com/tonkec/duga_frontend_v2"
              target="_blank"
              rel="noopener noreferrer"
              className="medium-font"
            >
              Github
            </a>
            . I have plenty of experience in mentoring junior developers and
            helping them grow their skills.
          </p>
        </div>
      </section>
    </>
  )
}

export default HomePage
