import { rootImageUrl } from '../../rootImageUrl'
import { useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { ThreeDots } from 'react-loader-spinner'
import Image from 'components/Image'
import './Events.scss'

const speakingEvents = [
  {
    name: 'Intersection observers and how to use them',
    year: 2023,
    link: 'https://www.meetup.com/javascript-zagreb/events/297302963/',
    organizer: 'JavaScript Zagreb',
    photo: rootImageUrl + 'meetups/javascript.jpg',
    content:
      'This was my first talk on Javascript Zagreb meetup. I had huge stage fright, but I managed to pull it off.',
    location: 'Zagreb',
  },
  {
    name: 'Mentoring for beginners',
    year: 2023,
    link: 'https://devshegoes.five.agency/',
    organizer: 'DevSheGoes',
    photo: rootImageUrl + 'meetups/dev.jpg',
    content:
      'I have been mentoring my whole career and I love to help beginners to start their journey. This event was a great opportunity to share my knowledge.',
    location: 'Zagreb',
  },
  {
    name: 'How to code a pure css keyboard',
    year: 2020,
    link: 'https://www.meetup.com/css-in-vienna/events/267266901/',
    organizer: 'CSS in Vienna',
    photo: rootImageUrl + 'meetups/vienna.jpg',
    content:
      'This was my first talk outside Croatia. I was so excited and I met a lot of new people. I coded a pure CSS keyboard in front of the live audience.',
    location: 'Vienna',
  },
]

const Events = () => {
  const [event, setEvent] = useState(speakingEvents[0])

  const speakingEventsSorted = [...speakingEvents].sort((a, b) => b.year - a.year)
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <section className="events-section">
      <div className="container events-container">
        <div className="events-heading">
          <p className="section-kicker">Talks and mentoring</p>
          <h2>I share what I learn.</h2>
        </div>

        {event ? (
          <div className="events-layout">
            <div className="events-list">
              {speakingEventsSorted.map((event, index) => (
                <button
                  key={index}
                  type="button"
                  className={`event-button ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => {
                    setEvent(event)
                    setActiveIndex(index)
                  }}
                >
                  <span>{event.year}</span>
                  <strong>{event.name}</strong>
                  <small>{event.organizer}</small>
                </button>
              ))}
            </div>
            <article className="event-card">
              <div className="event-meta">
                <span>
                  {event.organizer}, {event.location}
                </span>
                <a href={event.link} target="_blank" rel="noreferrer">
                  View event <FaExternalLinkAlt fontSize="0.85rem" />
                </a>
              </div>
              <Image src={event.photo} alt={event.name} className="w-full" />
              <h3>{event.name}</h3>
              <p>{event.content}</p>
            </article>
          </div>
        ) : (
          <div className="loader">
            <ThreeDots color="#f8f9fa" height={100} width={100} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Events
