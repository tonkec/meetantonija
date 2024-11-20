import { useState, useEffect } from 'react'

const IntroAnimation = ({ introAnimationDuration }) => {
  const [count, setCount] = useState(introAnimationDuration / 1000)

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount((prevCount) => prevCount - 1)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [count])
  return (
    <div
      className={`bg-pink fixed text-center flex-y-center flex flex-column top-0 bottom-0 left-0 right-0 flex-x-center ${count === 0 ? 'fadeOut' : 'fadeIn'}`}
    >
      <h1>{count}</h1>
    </div>
  )
}

export default IntroAnimation
