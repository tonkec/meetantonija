import { useState, useEffect, useRef } from 'react'
import './IntroAnimation.scss'

const IntroAnimation = () => {
  const text = 'ANTONIJA'
  const [displayText, setDisplayText] = useState('')
  const currentIndexRef = useRef(0)
  const letterDelay =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 768px)').matches
      ? 75
      : 100

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndexRef.current < text.length) {
        setDisplayText(text.slice(0, currentIndexRef.current + 1))
        currentIndexRef.current++
      } else {
        clearInterval(interval)
      }
    }, letterDelay)

    return () => clearInterval(interval)
  }, [text, letterDelay])

  return (
    <div
      className={`intro-animation ${
        displayText.length === text.length ? 'fadeOut' : 'fadeIn'
      }`}
    >
      <div className="intro-card">
        <p>Loading portfolio</p>
        <h1 aria-label={text}>
          {text.split('').map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className={index < displayText.length ? 'visible' : ''}
            >
              {letter}
            </span>
          ))}
        </h1>
        <div className="intro-progress" aria-hidden="true">
          {text.split('').map((letter, index) => (
            <span
              key={`${letter}-dot-${index}`}
              className={index < displayText.length ? 'visible' : ''}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IntroAnimation
