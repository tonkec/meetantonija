import { Tooltip } from 'react-tooltip'
import Image from './../../../../components/Image'
import './Header.scss'
import TypedText from '../../../../components/TypedText'

const Header = () => {
  return (
    <header className="container homepage-header">
      <div className="flex">
        <div>
          <h1>Hey 👋</h1>
          <h2>
            I am <span className="accent">Antonija</span>,
          </h2>
          <h3>
            a frontend developer from{' '}
            <span data-tooltip-id="my-tooltip">Sveta Nedelja</span>,
          </h3>
          <TypedText type="p">
            I enjoy creating beautiful user interfaces from scratch using HTML,
            CSS, Javascript and React.
          </TypedText>
        </div>

        <Image
          src="https://avatars.githubusercontent.com/u/5020758?v=4"
          alt="Antonija"
          hasBackground
        />
      </div>

      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: 'var(--color-black)',
          padding: '10px',
          borderRadius: '5px',
        }}
        className="tooltip"
      >
        <Image
          hasBackground={false}
          src="https://grad-svetanedelja.hr/wp-content/uploads/2020/04/Crkva-Sveta-Nedelja-zalazak-polje-800x450.jpg"
          alt="Sveta Nedelja"
        />
        <br />
        <span>A small town in Croatia.</span>
      </Tooltip>
    </header>
  )
}

export default Header
