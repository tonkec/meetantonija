import Dashboard from './components/Dashboard'
import './Videos.scss'

const Videos = () => {
  return (
    <section className="videos-section">
      <div className="container videos-container">
        <div className="videos-heading">
          <p className="section-kicker">Short tutorials</p>
          <h2>I turn UI ideas into bite-sized lessons.</h2>
        </div>

        <div className="tutorial-card">
          <div className="tutorial-copy">
            <p>
              A responsive dashboard walkthrough, from layout structure to the
              small details that make it feel like a real product.
            </p>
            <a
              href="https://www.youtube.com/watch?v=GQYJSmaSZow"
              rel="noreferrer"
              target="_blank"
              role="button"
              className="primary"
            >
              Watch video
            </a>
          </div>
          <div className="video-dashboard">
            <Dashboard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos
