import { useState } from 'react'

const ButtonCopy = ({ text, className }) => {
  const [isCopied, setIsCopied] = useState(false)
  return (
    <button
      className={`primary ${className}`}
      onClick={() => {
        navigator.clipboard.writeText('antonija1023@gmail.com')
        setIsCopied(true)

        setTimeout(() => {
          setIsCopied(false)
        }, 1000)
      }}
    >
      {isCopied ? 'Email copied!' : text}
    </button>
  )
}

export default ButtonCopy
