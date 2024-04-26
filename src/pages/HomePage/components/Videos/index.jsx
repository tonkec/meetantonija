import Dashboard from './components/Dashboard'

const Videos = () => {
  return (
    <section>
      <div className="container">
        <h2> 🎥 I create short tutorials.</h2>

        <div>
          <a
            href="https://www.youtube.com/watch?v=GQYJSmaSZow"
            rel="noreferrer"
            target="_blank"
            role="button"
            className="primary"
          >
            Watch video
          </a>
          <div className="border-radius">
            <div className="description">
              <p>
                {' '}
                This video shows how to code a responsive dashboard like the one
                below 👇
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
