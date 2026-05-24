import Image from 'components/Image'
import ActionButtons from '../ActionButtons'

import './Header.scss'

const Header = () => {
  return (
    <div className="header-wrapper hero-shell">
      <header className="container hero">
        <div className="hero-copy">
          <p className="hero-eyebrow">Frontend engineer</p>
          <h1>React interfaces with product sense.</h1>

          <ActionButtons />
        </div>

        <div className="hero-visual" aria-label="Antonija profile">
          <div className="hero-card">
            <Image
              src="https://avatars.githubusercontent.com/u/5020758?v=4"
              alt="Antonija"
              className="hero-photo"
            />
            <div className="hero-card-note">
              <span>Currently</span>
              <strong>crafting UIs</strong>
            </div>
          </div>
          <div className="hero-floating-card">
            <span>Available for</span>
            <strong>React work</strong>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
