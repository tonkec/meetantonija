import ContactForm from 'components/ContactForm'
import './HireMe.scss'

/**
 * Contact section used on homepage and other pages.
 */
const HireMe = ({ className = '' }) => {
  return (
    <section
      className={`hire-me-section ${className}`.trim()}
      id="contact"
    >
      <div className="container">
        <div className="hire-me-card">
          <ContactForm showIntro />
        </div>
      </div>
    </section>
  )
}

export default HireMe
