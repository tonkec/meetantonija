import { useEffect, useRef } from 'react'
import './PageTransition.scss'

const PageTransition = () => {
  const pageTransition = useRef(null)
  useEffect(() => {
    const current = pageTransition.current
    if (current) {
      setTimeout(() => {
        current.classList.add('enter')
      }, 100)

      setTimeout(() => {
        current.classList.remove('enter')
        current.classList.add('exit')
      }, 700)

      return () => {
        current.classList.remove('enter')
        current.classList.remove('exit')
      }
    }
  }, [pageTransition])

  return (
    <div ref={pageTransition} className="page-transition">
      <div className="transition-card" aria-label="Loading next page">
        <div className="transition-mark">
          <svg viewBox="0 0 100 100" className="animated-a" aria-hidden="true">
            <path d="M12,88 L50,12 L88,88 M31,56 L69,56" className="path" />
          </svg>
        </div>
        <p>Loading something thoughtful</p>
      </div>
    </div>
  )
}

export default PageTransition
