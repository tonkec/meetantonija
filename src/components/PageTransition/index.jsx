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
      <svg
        viewBox="0 0 100 100"
        width="200"
        height="200"
        className="animated-a"
      >
        <path d="M10,90 L50,10 L90,90 M30,55 L70,55" className="path" />
      </svg>
    </div>
  )
}

export default PageTransition
