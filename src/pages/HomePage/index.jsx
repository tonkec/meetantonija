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
import HireMe from 'components/HireMe'
import Events from 'components/Events'
import { getValuesAndProperties } from 'utils'
import useTemperature from 'hooks/useTemperature'
import Temperature from 'components/Temperature'
import { Tooltip } from 'react-tooltip'
import './HomePage.scss'

const SingleProject = ({ post }) => {
  const navigate = useNavigate()
  return (
    <div className="featured-project-card">
      <Image
        src={post.data.coverPhoto}
        isBackgroundImage
        style={{ minWidth: 'auto' }}
      />
      <div className="featured-project-copy">
        <p className="section-kicker">Selected project</p>
        <h3>{post.data.title}</h3>
        <p>{post.data.conclusion}</p>

        <button
          onClick={() => {
            navigate(`/project/${removeSpacesAndDashes(post.data.title)}`)
          }}
          className="primary small-margin-top"
        >
          Read the case study
        </button>
      </div>
    </div>
  )
}

const testimonials = [
  {
    content:
      'You’re honestly one of the best devs i’ve ever worked with, not just for your coding skills but for your attitude, mindset, and how you always worked proactively and responsibly towards us as a team, the client, and the overall quality of what we deliver.',
    author: 'Joanna Azzi',
    project: 'Funderpro',
    avatar: rootImageUrl + 'testimonials/joanna.jpeg',
  },
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

const services = [
  {
    title: 'Product interfaces',
    content:
      'React screens, flows and dashboards that stay usable as requirements grow.',
  },
  {
    title: 'Design systems',
    content:
      'Reusable component foundations, visual polish and patterns teams can ship with.',
  },
  {
    title: 'Frontend mentoring',
    content:
      'Practical guidance for teams that want cleaner architecture and stronger UI craft.',
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
        <section className="home-section about-section">
          <div className="container about-grid">
            <div>
              <p className="section-kicker">About me</p>
              <h2>Frontend engineering with product taste.</h2>
            </div>
            <div className="about-card">
              <p>
                My name is Antonija Šimić and I am a frontend developer from Sveta Nedelja, Croatia (CET),
                where it currently feels like{' '}
                <span data-tooltip-id="temperature-tooltip">
                  <Temperature />
                </span>
                . I am reliable, collaborative and focused on building web
                applications that are fast, accessible and easy to maintain.
              </p>
              <p>
                My work blends clean React architecture, thoughtful design and
                steady delivery. I like joining teams where technical excellence
                and creativity meet.
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

        <section className="home-section services-section">
          <div className="container">
            <p className="section-kicker">What I do</p>
            <div className="services-header">
              <h2>I help small teams ship polished frontend experiences.</h2>
              <p>
                From early product screens to mature component systems, I bring
                the same care to UX details, code quality and team momentum.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                  <p>{service.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FadeInSection>
          <MarqueeText baseVelocity={-0.5}>React developer</MarqueeText>
          <MarqueeText baseVelocity={0.5}>10 years of experience</MarqueeText>
        </FadeInSection>

        <FadeInSection>
          <section className="home-section">
            <div className="container">
              <p className="section-kicker">Client work</p>
              <h2>I work with clients on focused, useful products.</h2>

              <Paginated
                data={[...projects].sort((a, b) => b.from - a.from)}
                postsPerPage={1}
                singleEntry={(project) => <SingleProject post={project} />}
              />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="home-section testimonials-section">
            <div className="container">
              <p className="section-kicker">Testimonials</p>
              <h2>Kind words from people I have built with.</h2>
              <div className="testimonial-grid">
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
          <Aside numberOfPosts={2} />
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
