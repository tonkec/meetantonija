import { credibilityItems } from 'data/site'
import './CredibilityStrip.scss'

const CredibilityStrip = () => {
  return (
    <section
      className="credibility-strip"
      aria-label="Professional highlights"
    >
      <div className="container">
        <p className="credibility-strip__kicker">Quick facts</p>
        <ul className="credibility-strip__list">
          {credibilityItems.map((item, index) => (
            <li key={item.id} className="credibility-chip">
              <span className="credibility-chip__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="credibility-chip__copy">
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CredibilityStrip
