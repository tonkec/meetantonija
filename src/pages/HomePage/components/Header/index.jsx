import { Tooltip } from 'react-tooltip'
import Image from 'components/Image'
import cv from 'files/cv.pdf'
import { Link } from 'react-router-dom'
import ButtonCopy from 'components/ButtonCopy'
import { useWindowSize } from 'hooks/useWindowSize'

const Header = () => {
  const { width } = useWindowSize()
  const isMobile = width < 800
  const isExtraSmall = width < 576

  return (
    <header className="container header-padding-top header-padding-bottom">
      <div
        className={isMobile ? 'flex-column' : 'flex'}
        style={{
          flexDirection: isExtraSmall ? 'column' : 'row',
        }}
      >
        <div className="flex-1">
          <h2>👋</h2>
          <h1 className={isMobile ? 'normal-font' : ''}>
            I'm <span className="accent">Antonija</span>,
          </h1>
          <p
            className="small-margin-right large-margin-bottom"
            style={{ fontSize: isMobile ? '0.9rem' : '1.5rem' }}
          >
            a frontend developer from{' '}
            <span data-tooltip-id="my-tooltip">Sveta Nedelja</span>, Croatia,
            passionate about building beautiful, user-friendly web experiences.
            I craft interfaces that are not only visually engaging but also
            highly functional using React, Typescript and Tailwind CSS.
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

        <div
          className={
            isMobile ? '' : 'content-end flex flex-1 medium-margin-right'
          }
          style={{ order: isMobile ? -1 : 2 }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/5020758?v=4"
            alt="Antonija"
            hasColoredBackground={isMobile ? false : true}
            style={{
              width: isExtraSmall ? '220px' : isMobile ? '320px' : 'auto',
              height: isExtraSmall ? '220px' : isMobile ? '320px' : '400px',
              marginTop: isMobile ? '20px' : '0px',
            }}
            className="border-radius-50"
          />
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
  )
}

export default Header
