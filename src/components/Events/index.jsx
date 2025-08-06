import { rootImageUrl } from '../../rootImageUrl'
import { useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { ThreeDots } from 'react-loader-spinner'
import Image from 'components/Image'

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

  const speakingEventsSorted = speakingEvents.sort((a, b) => b.year - a.year)
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <section className="large-padding-bottom large-margin-top">
      <div className="container">
        <h2>🎤 I like to share my knowledge:</h2>

        {event ? (
          <div className="flex flex-responsive flex-gap space-between">
            <div className="flex-1">
              {speakingEventsSorted.map((event, index) => (
                <span
                  key={index}
                  className={`xs-margin-bottom xs-padding border-radius pointer block ${
                    index === activeIndex
                      ? 'bg-pink text-white'
                      : 'bg-pink-light'
                  }`}
                  onClick={() => {
                    setEvent(event)
                    setActiveIndex(index)
                  }}
                >
                  <p>
                    {event.name} @ {event.organizer}
                  </p>
                </span>
              ))}
            </div>
            <div className="bg-pink-light small-padding border-radius max-w-400">
              <div className="flex small-margin-bottom flex-y-center flex-gap-small">
                <p>
                  {event.organizer}, {event.year} in {event.location}{' '}
                  <a
                    className="text-black normal-font"
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt fontSize="1rem" />{' '}
                  </a>
                </p>
              </div>
              <Image src={event.photo} alt={event.name} className="w-full" />
              <p className="small-margin-top">{event.content}</p>
            </div>
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
