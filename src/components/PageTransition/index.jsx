import { useEffect, useRef } from 'react'
import './PageTransition.scss'
import Emoji from '../Emoji'
import { Triangle } from 'react-loader-spinner'

const PageTransition = () => {
  const pageTransition = useRef(null)
  useEffect(() => {
    if (pageTransition.current) {
      setTimeout(() => {
        pageTransition.current.classList.add('enter')
      }, 100)

      setTimeout(() => {
        pageTransition.current.classList.add('exit')
      }, 2000)
    }
  }, [pageTransition])
  return (
    <div ref={pageTransition} className="page-transition">
      <Triangle color="#f8f9fa" height={100} width={100} />
    </div>
  )
}

export default PageTransition
