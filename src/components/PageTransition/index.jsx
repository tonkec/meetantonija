import { useEffect, useRef } from 'react'
import { Blocks } from 'react-loader-spinner'
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
      <Blocks
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  )
}

export default PageTransition
