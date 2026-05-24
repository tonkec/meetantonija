import './Timeline.scss'
import { useSearchParams } from 'react-router-dom'

const Timeline = ({ start }) => {
  const [, setSearchParams] = useSearchParams()
  return (
    <aside className="timeline">
      <button
        type="button"
        onClick={() => {
          setSearchParams({ start })
        }}
      >
        {start}
      </button>
    </aside>
  )
}

export default Timeline
