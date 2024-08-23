import { Tooltip } from 'react-tooltip'
import './HireMe.scss'
import ButtonCopy from '../ButtonCopy'

const HireMe = () => {
  return (
    <div className="bg-black container cta-section border-radius border-radius-none-xs">
      <h2>Do you have a project in mind?</h2>
      <p>
        If you are interested in working with me, please get in touch via{' '}
        <span data-tooltip-id="email">email</span>.
      </p>

      <Tooltip
        id="email"
        style={{
          backgroundColor: 'var(--color-blue)',
          maxWidth: '400px',
        }}
      >
        I really do not like when people call me on the phone, so please do not
        do that. Email is the best way to reach me.
      </Tooltip>

      <ButtonCopy text={"Copy Email"} />
    </div>
  )
}

export default HireMe
