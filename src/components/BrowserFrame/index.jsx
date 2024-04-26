import { useEffect, useRef } from 'react'
import './BrowserFrame.scss'

const BrowserFrame = ({ children }) => {
  const fakeContentRef = useRef(null)
  useEffect(() => {
    const fakeContent = fakeContentRef.current
    const spans = Array.from({ length: 5 }, (_, i) => {
      const span = document.createElement('span')
      if (i === 4) {
        span.classList.add('image')
      }
      return span
    })

    spans.sort(() => Math.random() - 0.5)
    spans.forEach((span) => fakeContent.appendChild(span))
  }, [])
  return (
    <div className="browser">
      <div className="bar"></div>
      <div className="fake-content" ref={fakeContentRef}></div>

      <div className="content">{children}</div>
    </div>
  )
}

export default BrowserFrame
