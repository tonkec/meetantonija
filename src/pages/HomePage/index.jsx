import HireMe from '../../components/HireMe'
import Header from './components/Header'
import Previewer from './components/Previewer'
import Slider from './components/Slider'
import Aside from './components/Aside'
import Videos from './components/Videos/'
import Steps from './components/Steps'
import projects from '../../data/projects'
import { Helmet } from 'react-helmet'
import Tabs from './components/Tabs'
import Testimonial from './components/Testimonial'

import { rootImageUrl } from '../../rootImageUrl'

const testimonials = [
  {
    content:
      "Antonija is a superb developer. She is detail focused and she helped us make a superb educational product. She is a pleasure to work with. I'd highly recommend her.",
    author: "Brian O'Grady",
    project: 'Code Institute',
    avatar: rootImageUrl + 'testimonials/brian.jpeg',
  },
  {
    content:
      'It was a pleasure to work with Antonija. She is a very fast working developer with a large scope of frontend technologies. She takes every task in great detail and brings her advice and insight into development.  In the end she did great development.',
    author: 'Mario Stipetić',
    project: 'Peaks',
    avatar: rootImageUrl + 'testimonials/mario.jpeg',
  },
  {
    content:
      "Thank you so much for staying dedicated and working hard on all of the TINT projects we give you. You've made our lives easier and have allowed Joel and I to focus more on growing our brand and enhancing our UX",
    author: 'Daniel Baldwin',
    project: 'TINT',
    avatar: rootImageUrl + 'testimonials/daniel.jpeg',
  },
]

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Meetantonija | Home </title>
      </Helmet>
      <Header />
      <Previewer />
      <Slider headline="🏢 I work with clients." items={projects} />

      <section>
        <div className="container">
          <h2>🗣 What they say about me.</h2>
          <div className="grid">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rose">
        <div className="container">
          <h2 className="text-white">🎨 I work on side projects.</h2>
        </div>
        <Tabs />
      </section>
      <Aside numberOfPosts={2} />
      <Videos />

      <HireMe />
    </>
  )
}

export default HomePage
