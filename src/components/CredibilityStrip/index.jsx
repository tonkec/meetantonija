import { credibilityItems } from 'data/site'
import './CredibilityStrip.scss'

const CredibilityStrip = () => {
  return (
    <section className="credibility-strip" aria-label="Professional highlights">
      <div className="container">
        <ul className="credibility-strip__list">
          {credibilityItems.map((item) => (
            <li key={item.id} className="credibility-item">
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CredibilityStrip
