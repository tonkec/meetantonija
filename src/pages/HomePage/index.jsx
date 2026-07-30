import Header from './components/Header'
import Seo from 'components/Seo'
import FadeInSection from 'components/FadeInSection'
import HireMe from 'components/HireMe'
import CredibilityStrip from 'components/CredibilityStrip'
import CaseStudyCard from 'components/CaseStudyCard'
import EngineeringStories from 'components/EngineeringStories'
import ExperiencePreview from 'components/ExperiencePreview'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTheElement } from 'utils'
import { featuredCaseStudies } from 'data/caseStudies'
import { getPageMeta } from 'data/pagesMeta'
import { contact, seo } from 'data/site'
import './HomePage.scss'

const HomePage = () => {
  const location = useLocation()
  const pageMeta = getPageMeta('/')

  useEffect(() => {
    const hash = location.hash?.replace('#', '')
    if (!hash) {
      return undefined
    }
    const frame = window.requestAnimationFrame(() => {
      scrollToTheElement(hash)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [location.hash])

  return (
    <>
      <Seo
        title={pageMeta?.title || seo.title}
        description={pageMeta?.description || seo.description}
        path="/"
        jsonLd={pageMeta?.jsonLd}
      />
      <Header />
      <CredibilityStrip />

      <div className="homepage-content">
        <FadeInSection>
          <section className="home-section" id="selected-work">
            <div className="container">
              <p className="section-kicker">Selected work</p>
              <h2>Featured projects.</h2>
              <p className="selected-work-intro">
                Professional product work first, then an independent full-stack
                product — case studies rather than a long demo gallery.
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
          <EngineeringStories
            mode="homepage"
            previewOnly
            heading="Selected engineering challenges."
            intro="Short previews of production problems — open the case study for full context."
          />
        </FadeInSection>

        <FadeInSection>
          <ExperiencePreview />
        </FadeInSection>

        <FadeInSection>
          <HireMe />
        </FadeInSection>

        <p className="homepage-closing">{contact.closingNote}</p>
      </div>
    </>
  )
}

export default HomePage
