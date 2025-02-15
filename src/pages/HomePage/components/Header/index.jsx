import { Tooltip } from 'react-tooltip'
import Image from 'components/Image'
import cv from 'files/cv.pdf'
import { Link } from 'react-router-dom'
import ButtonCopy from 'components/ButtonCopy'

const Header = () => {
  return (
    <header className="container homepage-header header-padding-top header-padding-bottom">
      <div className="flex flex-responsive space-between flex-gap flex-y-center">
        <div className="max-w-50">
          <h2>👋</h2>
          <h1>
            I'm <span className="accent">Antonija</span>
          </h1>
          <p>
            I am a frontend developer from{' '}
            <span data-tooltip-id="my-tooltip">Sveta Nedelja</span>, Croatia,
            passionate about building beautiful, user-friendly web experiences.
            I craft interfaces that are not only visually engaging but also
            highly functional.
          </p>

          <div className="flex flex-gap-small small-margin-top">
            <ButtonCopy text="Copy Email" />

            <Link
              to={cv}
              target="_blank"
              download
              role="button"
              className="ternary inline-block"
            >
              Download CV
            </Link>
          </div>
        </div>

        <Image
          src="https://avatars.githubusercontent.com/u/5020758?v=4"
          alt="Antonija"
          hasColoredBackground
          className="hidden-mobile"
        />
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
        <span>A small town near the capital.</span>
      </Tooltip>
    </header>
  )
}

export default Header
