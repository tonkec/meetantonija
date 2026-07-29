import { useState } from 'react'
import { person } from 'data/site'

const ButtonCopy = ({ text, className }) => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <button
      type="button"
      className={`primary ${className || ''}`}
      aria-label={`Copy email address ${person.email}`}
      onClick={() => {
        navigator.clipboard.writeText(person.email)
        setIsCopied(true)

        setTimeout(() => {
          setIsCopied(false)
        }, 900)
      }}
    >
      {isCopied ? 'Email is copied!' : text}
    </button>
  )
}

export default ButtonCopy
