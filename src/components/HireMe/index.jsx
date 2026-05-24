import { Tooltip } from 'react-tooltip'
import ButtonCopy from 'components/ButtonCopy'
import './HireMe.scss'

const HireMe = () => {
  return (
    <section className="hire-me-section">
      <div className="container">
        <div className="hire-me-card">
          <p className="section-kicker">Let&apos;s work together</p>
          <h2>Have a React project that needs a careful frontend eye?</h2>
          <p>
            Send me a short note by <span data-tooltip-id="email">email</span>.
            I&apos;ll reply with next steps if it sounds like a good fit.
          </p>

          <Tooltip
            id="email"
            style={{
              backgroundColor: 'var(--color-white)',
              maxWidth: '400px',
              color: 'var(--color-black)',
            }}
          >
            Email is the best way to reach me, no phone calls please 🙏
          </Tooltip>

          <div className="hire-me-action">
            <ButtonCopy text="Get in Touch" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HireMe
