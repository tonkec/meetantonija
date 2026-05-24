import { Tooltip } from 'react-tooltip'
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
          <p className="hero-description">
            I&apos;m <span className="accent">Antonija</span>, a React developer
            from <span data-tooltip-id="my-tooltip">Sveta Nedelja</span>,
            Croatia.
          </p>

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

        <Tooltip
          id="my-tooltip"
          style={{
            backgroundColor: 'var(--color-pink)',
            padding: '10px',
            borderRadius: '5px',
            maxWidth: '300px',
          }}
          className="tooltip"
        >
          <Image
            src="https://grad-svetanedelja.hr/wp-content/uploads/2020/04/Crkva-Sveta-Nedelja-zalazak-polje-800x450.jpg"
            alt="Sveta Nedelja"
          />
          <br />
          <span>A small town near Zagreb</span>
        </Tooltip>
      </header>
    </div>
  )
}

export default Header
