import { useState } from 'react'

const ButtonCopy = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false)
  return (
    <button
      className="primary"
      onClick={() => {
        navigator.clipboard.writeText('antonija1023@gmail.com')
        setIsCopied(true)

        setTimeout(() => {
          setIsCopied(false)
        }, 2000)
      }}
    >
      {isCopied ? 'Email copied!' : text}
    </button>
  )
}

export default ButtonCopy
