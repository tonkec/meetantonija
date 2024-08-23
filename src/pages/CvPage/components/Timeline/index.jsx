import './Timeline.scss'
import { useSearchParams } from 'react-router-dom'

const Timeline = ({ start }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <section className="container">
      <h1
        className="timeline pointer"
        onClick={() => {
          setSearchParams({ start })
        }}
      >
        {start}
      </h1>
    </section>
  )
}

export default Timeline
