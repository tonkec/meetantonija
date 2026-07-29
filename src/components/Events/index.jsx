import { useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { ThreeDots } from 'react-loader-spinner'
import Image from 'components/Image'
import speakingEvents from 'data/speakingEvents'
import './Events.scss'

const Events = () => {
  const speakingEventsSorted = [...speakingEvents].sort(
    (a, b) => b.year - a.year
  )
  const [event, setEvent] = useState(speakingEventsSorted[0] || null)
  const [activeIndex, setActiveIndex] = useState(0)

  if (!speakingEventsSorted.length) {
    return null
  }

  return (
    <section className="events-section" aria-labelledby="events-heading">
      <div className="container events-container">
        <div className="events-heading">
          <p className="section-kicker">Beyond product work</p>
          <h2 id="events-heading">Talks and mentoring.</h2>
        </div>

        {event ? (
          <div className="events-layout">
            <div className="events-list" role="tablist" aria-label="Talks">
              {speakingEventsSorted.map((item, index) => (
                <button
                  key={`${item.name}-${item.year}`}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  className={`event-button ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => {
                    setEvent(item)
                    setActiveIndex(index)
                  }}
                >
                  <span>{item.year}</span>
                  <strong>{item.name}</strong>
                  <small>{item.organizer}</small>
                </button>
              ))}
            </div>
            <article className="event-card" role="tabpanel">
              <div className="event-meta">
                <span>
                  {event.organizer}, {event.location}
                </span>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View event <FaExternalLinkAlt fontSize="0.85rem" aria-hidden />
                </a>
              </div>
              <Image src={event.photo} alt="" className="w-full" />
              <h3>{event.name}</h3>
              <p>{event.content}</p>
            </article>
          </div>
        ) : (
          <div className="loader" role="status" aria-label="Loading events">
            <ThreeDots color="#f8f9fa" height={100} width={100} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Events
