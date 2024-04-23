import { useEffect, useRef } from 'react'
import './PageTransition.scss'
import Emoji from '../Emoji'

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
      <Emoji />
    </div>
  )
}

export default PageTransition
