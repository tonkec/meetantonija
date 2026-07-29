import Image from 'components/Image'
import ActionButtons from '../ActionButtons'
import { availability, hero, person } from 'data/site'

import './Header.scss'

const Header = () => {
  return (
    <div className="header-wrapper hero-shell">
      <header className="container hero">
        <div className="hero-copy">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p className="hero-supporting">{hero.supporting}</p>
          <p className="hero-location">{availability.locationLine}</p>

          <ActionButtons />
        </div>

        <div className="hero-visual" aria-label={`${person.name} profile`}>
          <div className="hero-card">
            <Image
              src={person.image}
              alt={person.name}
              className="hero-photo"
            />
            <div className="hero-card-note">
              <span>{availability.heroCardLabel}</span>
              <strong>{availability.heroCardValue}</strong>
            </div>
          </div>
          <div className="hero-floating-card">
            <span>{availability.floatingLabel}</span>
            <strong>{availability.floatingValue}</strong>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
