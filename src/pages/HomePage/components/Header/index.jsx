import { Tooltip } from 'react-tooltip'
import Image from 'components/Image'
import ActionButtons from '../ActionButtons'

import './Header.scss'

const Header = () => {
  return (
    <div className="header-wrapper hero-shell">
      <header className="container hero">
        <div className="hero-copy">
          <p className="hero-eyebrow">Independent frontend engineer</p>
          <h1>
            I build thoughtful React products with a sharp eye for UX.
          </h1>
          <p className="hero-description">
            I&apos;m <span className="accent">Antonija</span>, a React developer
            from <span data-tooltip-id="my-tooltip">Sveta Nedelja</span>,
            Croatia. I help teams turn complex product ideas into fast,
            maintainable interfaces.
          </p>

          <ActionButtons />

          <div className="hero-stats" aria-label="Experience summary">
            <div>
              <strong>10+</strong>
              <span>years frontend</span>
            </div>
            <div>
              <strong>7+</strong>
              <span>years React</span>
            </div>
            <div>
              <strong>CET</strong>
              <span>remote friendly</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Antonija profile">
          <div className="hero-card">
            <Image
              src="https://avatars.githubusercontent.com/u/5020758?v=4"
              alt="Antonija"
              className="hero-photo"
            />
            <div className="hero-card-note">
              <span>Currently crafting</span>
              <strong>accessible product UIs</strong>
            </div>
          </div>
          <div className="hero-floating-card">
            <span>Available for</span>
            <strong>React apps, design systems and product polish</strong>
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
