import { useEffect, useRef } from 'react'
import { Triangle } from 'react-loader-spinner'
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
      <Triangle color="#fcfcfc" height={150} width={150} />
    </div>
  )
}

export default PageTransition
