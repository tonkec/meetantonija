import { Tooltip } from 'react-tooltip'
import './Header.scss'

const Header = () => {
  return (
    <header className="container">
      <div className="flex">
        <div>
          <h1>Hey 👋</h1>
          <h2>
            I am <span className="accent">Antonija</span>,
          </h2>
          <h3>
            a frontend developer 👩‍💻 from{' '}
            <span data-tooltip-id="my-tooltip">Zagreb</span>,
          </h3>
          <p>I enjoy building beautiful user interfaces from scratch </p>
          <p>
            using React, Javascript, Typescript and CSS in all its form and
            glory.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://avatars.githubusercontent.com/u/5020758?v=4"
            alt="Antonija"
          />
        </div>
      </div>

      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: 'var(--color-black);',
          padding: '10px',
          borderRadius: '5px',
        }}
        className="tooltip"
      >
        <img
          src="https://i.natgeofe.com/n/a11e9ead-955f-4a4e-977c-d1b2f104ee75/zagrebgettyimages-1144074611hr_3x2.jpg"
          alt="Zagreb"
        />
        <br />
        <span>A capital of Croatia.</span>
      </Tooltip>
    </header>
  )
}

export default Header
