import Header from './components/Header'
import Seo from 'components/Seo'
import FadeInSection from 'components/FadeInSection'
import HireMe from 'components/HireMe'
import CredibilityStrip from 'components/CredibilityStrip'
import ExperiencePreview from 'components/ExperiencePreview'
import Events from 'components/Events'
import Aside from './components/Aside'
import Videos from './components/Videos'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTheElement } from 'utils'
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
          <ExperiencePreview />
        </FadeInSection>

        <FadeInSection>
          <Events />
        </FadeInSection>

        <FadeInSection>
          <Aside numberOfPosts={2} />
        </FadeInSection>

        <FadeInSection>
          <Videos />
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
