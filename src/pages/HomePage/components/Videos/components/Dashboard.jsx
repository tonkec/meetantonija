import './Dashboard.scss'

const Dashboard = ({ title }) => {
  const fakeTitle = title || 'Dashboard'
  return (
    <div className="dashboard">
      <aside>
        <nav>
          <ul>
            <li>
              <a href="#">{fakeTitle}</a>
            </li>
            <li>
              <a href="#">Users</a>
            </li>
            <li>
              <a href="#">Posts</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        <header>
          <div className="search">
            <input type="text" placeholder="Fake search in dashboard..." />
          </div>
        </header>
        <div className="flex flex-responsive stretch">
          <div className="content content--left"></div>
          <div className="content content--right"></div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
