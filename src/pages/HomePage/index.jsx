import Header from './components/Header'
import Previewer from './components/Previewer'
import Aside from './components/Aside'
import Videos from './components/Videos/'
import projects from '../../data/projects'
import { Helmet } from 'react-helmet'
import Testimonial from './components/Testimonial'
import { rootImageUrl } from '../../rootImageUrl'
import Paginated from 'components/Paginated'
import { removeSpacesAndDashes } from 'utils'
import { useNavigate } from 'react-router-dom'
import Image from 'components/Image'
import MarqueeText from 'components/MarqueeText'
import FadeInSection from 'components/FadeInSection'
import Duga from './remove_me.png'
import HireMe from 'components/HireMe'
import Events from 'components/Events'
import { getValuesAndProperties } from 'utils'
import useTemperature from 'hooks/useTemperature'
import Temperature from 'components/Temperature'
import { Tooltip } from 'react-tooltip'

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
  const temperatureData = useTemperature()
  const { values, properties } = getValuesAndProperties(temperatureData)
  return (
    <>
      <Helmet>
        <title>Meetantonija | Home </title>
      </Helmet>
      <Header />

      <div className="homepage-content">
        <div className="pattern large-margin-bottom large-margin-top">
          <section>
            <div className="container flex flex-responsive flex-gap-large align-start space-between">
              <div className="bg-pink-light small-padding">
                <h1 className="small-margin-bottom text-pink">About me</h1>
                <p className="line-height-2 medium-padding-right">
                  I am a frontend developer from Sveta Nedelja, Croatia (CET)
                  which currently has a{' '}
                  <span data-tooltip-id="temperature-tooltip">
                    <Temperature />
                  </span>{' '}
                  weather. I'm a reliable and responsible front-end engineer
                  with a passion for building cutting-edge web applications.
                  Collaboration is at the heart of my work, and I thrive in
                  environments where creativity and technical excellence merge.
                  With over 6 years of React experience and a decade in frontend
                  development, I excel at crafting intuitive, high‑performance
                  user interfaces that deliver exceptional user experiences. I’m
                  driven by problem‑solving, continuous learning, and staying at
                  the forefront of modern web technologies. My approach blends
                  clean, maintainable code with thoughtful design, ensuring
                  every project I work on is scalable, accessible, and built to
                  last.
                </p>
              </div>

              <Tooltip
                id="temperature-tooltip"
                style={{
                  backgroundColor: 'var(--color-pink)',
                  padding: '10px',
                  borderRadius: '5px',
                  color: 'var(--color-white)',
                }}
                className="tooltip"
              >
                {properties.map((property, index) => (
                  <span className="block" key={index}>
                    {property}: {values[index]}
                  </span>
                ))}
              </Tooltip>
            </div>
          </section>
        </div>

        <FadeInSection>
          <section className="large-margin-bottom large-margin-top">
            <div className="container">
              <h2>Just published Duga 💪</h2>

              <div className="flex flex-gap flex-responsive">
                <div className="flex-1">
                  <p className="line-height-2">
                    I built Duga using React, Typescript and React Query for a
                    responsive, state managed frontend, and Socket.IO for real
                    time communication. The backend runs on Node.js/Express with
                    PostgreSQL via Sequelize, enabling instant chat,
                    notifications, and seamless collaboration across devices.
                  </p>

                  <div className="small-margin-top flex flex-gap-small">
                    <a
                      href="https://github.com/tonkec/duga_frontend_v2"
                      className="primary"
                      role="button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View source
                    </a>
                    <a
                      href="https://staging--dugaprod.netlify.app/"
                      className="outlined"
                      role="button"
                      target="_blank"
                      rel="noreferrer"
                      style={{ backgroundColor: 'var(--color-white)' }}
                    >
                      Open Demo
                    </a>
                  </div>
                </div>

                <div className="flex-1">
                  <Image src={Duga} style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <MarqueeText baseVelocity={-0.5}>React developer</MarqueeText>
          <MarqueeText baseVelocity={0.5}>10 years of experience</MarqueeText>
        </FadeInSection>

        <FadeInSection>
          <section className="large-margin-top large-margin-bottom">
            <div className="container">
              <h2>💼 I work with clients.</h2>

              <Paginated
                data={projects.sort((a, b) => b.from - a.from)}
                postsPerPage={1}
                singleEntry={(project) => <SingleProject post={project} />}
              />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="pattern-black">
            <div className="container large-margin-bottom">
              <h2>🗣 What they say about me.</h2>
              <div className="grid">
                {testimonials.map((testimonial, index) => (
                  <Testimonial key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <Previewer />
        </FadeInSection>

        <FadeInSection>
          <Aside numberOfPosts={3} />
        </FadeInSection>

        <FadeInSection>
          <Videos />
        </FadeInSection>

        <FadeInSection>
          <MarqueeText baseVelocity={-0.5}>React developer</MarqueeText>
          <MarqueeText baseVelocity={0.5}>10 years of experience</MarqueeText>
        </FadeInSection>

        <FadeInSection>
          <Events />
        </FadeInSection>

        <FadeInSection>
          <HireMe />
        </FadeInSection>
      </div>
    </>
  )
}

export default HomePage
