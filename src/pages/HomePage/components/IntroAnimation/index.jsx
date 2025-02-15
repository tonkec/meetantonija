import { useState, useEffect, useRef } from 'react'

const IntroAnimation = () => {
  const text = 'meetantonija'
  const [displayText, setDisplayText] = useState('')
  const currentIndexRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndexRef.current < text.length) {
        setDisplayText(text.slice(0, currentIndexRef.current + 1))
        currentIndexRef.current++
      } else {
        clearInterval(interval)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [text])

  return (
    <div
      className={`small-padding bg-pink fixed text-center flex-y-center flex flex-column top-0 bottom-0 left-0 right-0 flex-x-center ${
        displayText.length === text.length ? 'fadeOut' : 'fadeIn'
      }`}
    >
      <div>
        <h1 className="super-extra-large-font orbitron">{displayText}</h1>
      </div>
    </div>
  )
}

export default IntroAnimation
