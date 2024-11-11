import { Tooltip } from 'react-tooltip'
import Image from 'components/Image'

const Header = () => {
  return (
    <header className="container homepage-header header-padding-top header-padding-bottom">
      <div className="flex flex-responsive space-between flex-gap flex-y-center">
        <div className='max-w-50'>
          <h1 className='no-margin-bottom'>Hello!</h1>
          <h1>
            I'm <span className="accent">Antonija.</span>
          </h1>
          <p>
            I am frontend developer from{' '}
            <span data-tooltip-id="my-tooltip">Sveta Nedelja</span>, Croatia. I am  passionate about building beautiful, user-friendly web experiences. I craft interfaces that are not only visually engaging but also highly functional.
          </p>
         
        </div>

        <Image
          src="https://avatars.githubusercontent.com/u/5020758?v=4"
          alt="Antonija"
          hasColoredBackground
        />
      </div>
      
      <div className="flex small-margin-top flex-gap-small">
        <button className='primary'>
          Contact
        </button>

        <button className='ternary'>
          Download CV
        </button>
      </div>

      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: 'var(--color-pink)',
          padding: '10px',
          borderRadius: '5px',
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
