import { FaAngleDoubleUp } from 'react-icons/fa'
import useScrollPosition from './../../hooks/useScrollPosition'
const ScrollToTop = () => {
  const scrollPosition = useScrollPosition()
  
  if (scrollPosition < 500) {
    return null
  }

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      className="primary fixed bottom-20 right-20"
    >
      <FaAngleDoubleUp />
    </button>
  )
}

export default ScrollToTop
