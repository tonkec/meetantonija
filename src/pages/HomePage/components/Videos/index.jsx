import Dashboard from './components/Dashboard'

const Videos = () => {
  return (
    <section className="bg-pink-light no-padding-bottom">
      <div className="container">
        <h2 className="text-black"> 🎥 I create short tutorials.</h2>
        <div className="bg-sky-blue dashboard-wrapper border-top-left-radius border-top-right-radius">
          <div className="flex flex-responsive flex-gap space-between small-margin-bottom align-start">
            <p className="text-black">
              This video shows how to code a responsive dashboard like the one
              below 👇
            </p>
            <a
              href="https://www.youtube.com/watch?v=GQYJSmaSZow"
              rel="noreferrer"
              target="_blank"
              role="button"
              className="primary pull-right inline-block text-center max-w-150"
            >
              Watch video 👀
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
