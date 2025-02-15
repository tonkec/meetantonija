import { useEffect, useRef } from 'react'
import './PageTransition.scss'
import { Triangle } from 'react-loader-spinner'

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
      <Triangle color="#000" height={100} width={100} />
    </div>
  )
}

export default PageTransition
