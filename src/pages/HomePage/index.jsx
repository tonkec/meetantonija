import Header from './components/Header'
import Previewer from './components/Previewer'
import Aside from './components/Aside'
import Videos from './components/Videos/'
import Seo from 'components/Seo'
import Testimonial from './components/Testimonial'
import MarqueeText from 'components/MarqueeText'
import FadeInSection from 'components/FadeInSection'
import HireMe from 'components/HireMe'
import Events from 'components/Events'
import CredibilityStrip from 'components/CredibilityStrip'
import CaseStudyCard from 'components/CaseStudyCard'
import EngineeringStories from 'components/EngineeringStories'
import TechnologiesSection from 'components/TechnologiesSection'
import { getValuesAndProperties } from 'utils'
import useTemperature from 'hooks/useTemperature'
import Temperature from 'components/Temperature'
import { Tooltip } from 'react-tooltip'
import services from 'data/services'
import testimonials from 'data/testimonials'
import { featuredCaseStudies } from 'data/caseStudies'
import { availability, person, seo } from 'data/site'
import './HomePage.scss'

const HomePage = () => {
  const temperatureData = useTemperature()
  const { values, properties } = getValuesAndProperties(temperatureData)

  return (
    <>
      <Seo title={seo.title} description={seo.description} path="/" />
      <Header />
      <CredibilityStrip />

      <div className="homepage-content">
        <FadeInSection>
          <section className="home-section about-section" id="about">
            <div className="container about-grid">
              <div>
                <p className="section-kicker">About me</p>
                <h2>Production mobile and frontend engineering.</h2>
              </div>
              <div className="about-card">
                <p>
                  My name is {person.alternateName} and I am a Senior React
                  Native and frontend engineer based in{' '}
                  {person.location.locality}, {person.location.country} (CET),
                  where it currently feels like{' '}
                  <span data-tooltip-id="temperature-tooltip">
                    <Temperature />
                  </span>
                  . I focus on shipping maintainable TypeScript applications and
                  production mobile features — subscriptions, analytics,
                  experiments and complex product flows.
                </p>
                <p>
                  I am reliable, collaborative and comfortable owning a feature
                  from implementation through testing and release. I like joining
                  teams where technical excellence and product sense meet.
                </p>
                <p className="about-availability">{availability.short}</p>
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
        </FadeInSection>

        <FadeInSection>
          <section className="home-section services-section" id="what-i-do">
            <div className="container">
              <p className="section-kicker">What I do</p>
              <div className="services-header">
                <h2>
                  I help teams ship reliable mobile and frontend product work.
                </h2>
                <p>
                  From React Native features in production apps to TypeScript
                  frontends with complex state, I bring care to UX details, code
                  quality and safe delivery.
                </p>
              </div>
              <div className="service-grid">
                {services.map((service, index) => (
                  <article className="service-card" key={service.id}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{service.title}</h3>
                    <p>{service.content}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <TechnologiesSection />
        </FadeInSection>

        <FadeInSection>
          <section className="home-section" id="selected-work">
            <div className="container">
              <p className="section-kicker">Selected work</p>
              <h2>Case studies from production products.</h2>
              <p className="selected-work-intro">
                A short list of strong projects — mobile subscriptions, a
                full-stack personal product and fintech platform work — rather
                than a long gallery of demos.
              </p>

              <div className="case-study-grid">
                {featuredCaseStudies.map((study) => (
                  <CaseStudyCard key={study.slug} study={study} />
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <EngineeringStories />
        </FadeInSection>

        <FadeInSection>
          <MarqueeText baseVelocity={-0.5}>
            React Native & Frontend
          </MarqueeText>
          <MarqueeText baseVelocity={0.5}>10+ years of experience</MarqueeText>
        </FadeInSection>

        {testimonials.length > 0 ? (
          <FadeInSection>
            <section className="home-section testimonials-section">
              <div className="container">
                <p className="section-kicker">Social proof</p>
                <h2>Kind words from people I have built with.</h2>
                <div className="testimonial-grid">
                  {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </section>
          </FadeInSection>
        ) : null}

        <FadeInSection>
          <Events />
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
          <MarqueeText baseVelocity={-0.5}>
            React Native & Frontend
          </MarqueeText>
          <MarqueeText baseVelocity={0.5}>
            {availability.short}
          </MarqueeText>
        </FadeInSection>

        <FadeInSection>
          <HireMe />
        </FadeInSection>
      </div>
    </>
  )
}

export default HomePage
