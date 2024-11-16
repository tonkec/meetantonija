import { Tooltip } from 'react-tooltip'
import './HireMe.scss'
import ButtonCopy from 'components/ButtonCopy'

const HireMe = () => {
  return (
    <section className="small-padding large-margin-top">
      <div className="container text-center large-padding bg-pink border-radius">
        <h3 className="no-margin">Do you have a project in mind?</h3>
        <p className="small-margin-top small-margin-bottom">
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
          I really do not like when people call me on the phone, so please do
          not do that. Email is the best way to reach me.
        </Tooltip>

        <div className="small-margin-top">
          <ButtonCopy text="Copy Email" />
        </div>
      </div>
    </section>
  )
}

export default HireMe
