import { Tooltip } from 'react-tooltip'
import Image from 'components/Image'
import { useWindowSize } from 'hooks/useWindowSize'
import ActionButtons from '../ActionButtons'
import Social from 'components/Social'

const Header = () => {
  const { width } = useWindowSize()
  const isMobile = width < 800
  const isExtraSmall = width < 400

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
            className={
              isMobile
                ? 'normal-font small-margin-bottom medium-margin-right line-height-2'
                : 'line-height-2'
            }
            style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
          >
            a React developer from{' '}
            <span data-tooltip-id="my-tooltip">Sveta Nedelja</span>, Croatia.
            For the past <span className="text-pink">10</span> years I have been
            crafting interfaces that are not only visually engaging but also
            highly functional.
          </p>

          {!isMobile && <ActionButtons />}
        </div>

        <div
          className={
            isMobile
              ? 'large-margin-top large-margin-bottom'
              : 'content-end flex flex-1 medium-margin-right'
          }
        >
          <Image
            src="https://avatars.githubusercontent.com/u/5020758?v=4"
            alt="Antonija"
            hasColoredBackground={isMobile ? false : true}
            style={{
              width: isExtraSmall ? '100%' : isMobile ? '320px' : 'auto',
              height: isExtraSmall ? '100%' : isMobile ? '320px' : '400px',
            }}
            className="border-radius-50 medium-margin-bottom"
          />
        </div>
      </div>

      {isMobile && <ActionButtons />}

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
