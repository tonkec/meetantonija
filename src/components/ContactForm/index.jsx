import { useId, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  availability,
  contact,
  person,
  socialLinks,
  cvAsset,
} from 'data/site'
import './ContactForm.scss'

const initialValues = {
  name: '',
  email: '',
  message: '',
  company: '', // honeypot — leave empty; bots often fill hidden fields
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const getEmailJsConfig = () => ({
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_bzujth7',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_49np9nm',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
})

/**
 * Contact form sends messages through EmailJS.
 * Template fields: from_name, from_email, message, reply_to
 * (also mirrored as name/email for older templates).
 */
const ContactForm = ({ showIntro = true }) => {
  const formId = useId()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState('')

  const validate = () => {
    const nextErrors = {}
    if (!values.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }
    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Please include a short message.'
    } else if (values.message.trim().length < 10) {
      nextErrors.message = 'Please write at least a sentence or two.'
    }
    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'submitting' || status === 'success') {
      return
    }

    // Honeypot filled → pretend success without sending.
    if (values.company) {
      setStatus('success')
      setStatusMessage('Thanks — your message is on its way.')
      return
    }

    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus('error')
      setStatusMessage('Please fix the highlighted fields.')
      return
    }

    const { serviceId, templateId, publicKey } = getEmailJsConfig()

    if (!publicKey) {
      setStatus('error')
      setStatusMessage(
        'Email is not configured yet. Please email me directly instead.'
      )
      return
    }

    setStatus('submitting')
    setStatusMessage('Sending…')
    setErrors({})

    const name = values.name.trim()
    const email = values.email.trim()
    const message = values.message.trim()

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          message,
          name,
          email,
        },
        {
          publicKey,
        }
      )

      setStatus('success')
      setStatusMessage('Thanks — your message is on its way.')
      setValues(initialValues)
    } catch {
      setStatus('error')
      setStatusMessage(
        `Something went wrong. Please try again or email ${person.email}.`
      )
    }
  }

  const linkedIn = socialLinks.find((link) => link.id === 'linkedin')
  const github = socialLinks.find((link) => link.id === 'github')
  const isDisabled = status === 'submitting' || status === 'success'

  return (
    <div className="contact-panel">
      <div className="contact-channels">
        {showIntro ? (
          <>
            <p className="section-kicker">Contact</p>
            <h2 id="contact-heading">{contact.headline}</h2>
            <p>{contact.body}</p>
            <p className="contact-closing">{contact.closingCta}</p>
          </>
        ) : (
          <>
            <p className="section-kicker">Direct channels</p>
            <h2 id="contact-heading">{contact.headline}</h2>
            <p className="contact-channels__lede">
              {availability.locationLine}
            </p>
            <p>{availability.short}</p>
            <dl className="contact-facts">
              <div>
                <dt>{availability.heroCardLabel}</dt>
                <dd>{availability.heroCardValue}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>React Native · TypeScript · product flows</dd>
              </div>
            </dl>
          </>
        )}

        <ul className="contact-links">
          <li>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </li>
          {linkedIn ? (
            <li>
              <a
                href={linkedIn.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          ) : null}
          {github ? (
            <li>
              <a href={github.href} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          ) : null}
          <li>
            <a
              href={cvAsset.href}
              target="_blank"
              rel="noopener noreferrer"
              download={cvAsset.downloadName}
            >
              {cvAsset.label}
            </a>
          </li>
        </ul>
      </div>

      <form
        className="contact-form"
        name="contact"
        onSubmit={handleSubmit}
        noValidate
        aria-labelledby="contact-heading"
      >
        <p className="contact-form__honeypot" aria-hidden="true">
          <label htmlFor={`${formId}-company`}>
            Company
            <input
              id={`${formId}-company`}
              name="company"
              value={values.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </p>

        <div className="contact-form__field">
          <label htmlFor={`${formId}-name`}>Name</label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            disabled={isDisabled}
            required
          />
          {errors.name ? (
            <p
              id={`${formId}-name-error`}
              className="contact-form__error"
              role="alert"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${formId}-email`}>Email</label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? `${formId}-email-error` : undefined
            }
            disabled={isDisabled}
            required
          />
          {errors.email ? (
            <p
              id={`${formId}-email-error`}
              className="contact-form__error"
              role="alert"
            >
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${formId}-message`}>Message</label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? `${formId}-message-error` : undefined
            }
            disabled={isDisabled}
            required
          />
          {errors.message ? (
            <p
              id={`${formId}-message-error`}
              className="contact-form__error"
              role="alert"
            >
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="primary"
          disabled={isDisabled}
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting'
            ? 'Sending…'
            : status === 'success'
              ? 'Message sent'
              : 'Send message'}
        </button>

        <p
          className={`contact-form__status ${status}`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      </form>
    </div>
  )
}

export default ContactForm
