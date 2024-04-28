import Dashboard from './components/Dashboard'

const Videos = () => {
  return (
    <section className="bg-black no-padding-bottom">
      <div className="container">
        <h2> 🎥 I create short tutorials.</h2>
        <div className="bg-dark-blue dashboard-wrapper border-radius">
          <div className="flex flex-responsive flex-gap space-between small-margin-bottom">
            <p>
              This video shows how to code a responsive dashboard like the one
              below 👇
            </p>
            <a
              href="https://www.youtube.com/watch?v=GQYJSmaSZow"
              rel="noreferrer"
              target="_blank"
              role="button"
              className="ternary pull-right inline-block"
            >
              Watch video
            </a>
          </div>
          <div className="border-radius video-dashboard">
            <Dashboard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos
