import { useEffect, useRef } from 'react'
import './PageTransition.scss'

const PageTransition = () => {
  const pageTransition = useRef(null)
  useEffect(() => {
    if (pageTransition.current) {
      setTimeout(() => {
        pageTransition.current.classList.add('enter')
      }, 100)

      setTimeout(() => {
        pageTransition.current.classList.add('exit')
      }, 1000)
    }
  }, [pageTransition])
  return (
    <div ref={pageTransition} className="page-transition">
      <h1>Getting you there...</h1>
    </div>
  )
}

export default PageTransition
