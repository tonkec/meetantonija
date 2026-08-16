import Seo from 'components/Seo'
import ContactForm from 'components/ContactForm'
import { contact } from 'data/site'
import './ContactPage.scss'

const ContactPage = () => {
  return (
    <>
      <Seo path="/contact" />

      <header className="contact-hero">
        <div className="container contact-hero-grid">
          <h1>Let’s talk.</h1>
          <p>{contact.body}</p>
        </div>
      </header>

      <section className="contact-page-section" id="contact">
        <div className="container">
          <div className="contact-page-card">
            <ContactForm showIntro={false} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
