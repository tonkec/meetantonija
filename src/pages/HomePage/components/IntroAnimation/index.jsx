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
      className={`small-padding bg-pink fixed text-center flex-y-center flex flex-column top-0 bottom-0 left-0 right-0 flex-x-center ${count === 0 ? 'fadeOut' : 'fadeIn'}`}
    >
      <div>
        <h1>{count}.</h1>
        <p>Nothing to load. Just playing with animations 😆</p>
      </div>
    </div>
  )
}

export default IntroAnimation
