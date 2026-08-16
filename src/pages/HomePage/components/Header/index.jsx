import Image from 'components/Image'
import ActionButtons from '../ActionButtons'
import { availability, hero, person } from 'data/site'

import './Header.scss'

const Header = () => {
  return (
    <div className="header-wrapper hero-shell">
      <header className="container hero">
        <div className="hero-copy">
          <h1>{hero.headline}</h1>
          <p className="hero-supporting">{hero.supporting}</p>
          <p className="hero-location">{availability.locationLine}</p>
          <p className="hero-status">{availability.statusLine}</p>

          <ActionButtons />
        </div>

        <div className="hero-visual" aria-label={`${person.name} profile`}>
          <div className="hero-card">
            <div className="hero-photo-frame">
              <Image
                src={person.image}
                alt={person.name}
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
