import { Tooltip } from 'react-tooltip'
import ButtonCopy from 'components/ButtonCopy'

const HireMe = () => {
  return (
    <section className="small-padding large-margin-top">
      <div className="container text-center large-padding bg-sky-blue border-radius">
        <h3 className="no-margin text-black">
          Do you have a project in mind? 🤔
        </h3>
        <p className="small-margin-top small-margin-bottom text-black">
          If you are interested in working with me, please get in touch via{' '}
          <span data-tooltip-id="email">email</span>.
        </p>

        <Tooltip
          id="email"
          style={{
            backgroundColor: 'var(--color-white)',
            maxWidth: '400px',
            color: 'var(--color-black)',
          }}
        >
          Email is the best way to reach me.
        </Tooltip>

        <div className="small-margin-top">
          <ButtonCopy text="Get in Touch" />
        </div>
      </div>
    </section>
  )
}

export default HireMe
