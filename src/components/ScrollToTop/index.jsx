import { FaAngleDoubleUp } from 'react-icons/fa'
import useScrollPosition from 'hooks/useScrollPosition'
import { useWindowSize } from 'hooks/useWindowSize'
const ScrollToTop = () => {
  const scrollPosition = useScrollPosition()
  const { width } = useWindowSize()
  const isMobile = width < 1000

  if (isMobile) {
    if (scrollPosition < 300) {
      return null
    }
  }

  if (scrollPosition < 600) {
    return
  }

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      className="primary fixed bottom-20 right-30 z-9"
    >
      <FaAngleDoubleUp />
    </button>
  )
}

export default ScrollToTop
