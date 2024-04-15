import './Videos.scss'
import Dashboard from './components/Dashboard'

const Videos = () => {
  return (
    <section className="bg-black">
      <div className="container">
        <h2> 🎥 I create short videos</h2>

        <div className="videos">
          <a
            href="https://www.youtube.com/watch?v=GQYJSmaSZow"
            rel="noreferrer"
            target="_blank"
          >
            Watch video
          </a>
          <div className="video">
            <div className="description">
              <p>
                {' '}
                This is a video which shows how to code a responsive dashboard
                like the one below 👇
              </p>
            </div>
            <Dashboard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos