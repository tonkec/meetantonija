import { Tooltip } from 'react-tooltip'
import './HireMe.scss'
import { useState } from 'react'

const HireMe = () => {
  const [isCopied, setIsCopied] = useState(false)
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

      <button
        className="secondary inline-block small-margin-top"
        onClick={() => {
          navigator.clipboard.writeText('antonija1023@gmail.com')
          setIsCopied(true)

          setTimeout(() => {
            setIsCopied(false)
          }, 2000)
        }}
      >
        {isCopied ? 'Copied!' : 'Copy email'}
      </button>
    </div>
  )
}

export default HireMe
