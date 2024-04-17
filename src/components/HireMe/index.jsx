import './HireMe.scss'
import { useState } from 'react'

const HireMe = () => {
  const [isCopied, setIsCopied] = useState(false)
  return (
    <div className="hire-me">
      <h2>Are you ready to talk?</h2>
      <p>If you are interested in working with me, please get in touch.</p>

      <button
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
