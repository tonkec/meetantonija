import './Dashboard.scss'

const Dashboard = ({ title }) => {
  const fakeTitle = title || 'Dashboard'
  const links = [fakeTitle, 'Users', 'Posts', 'Categories', 'Settings']

  return (
    <div className="dashboard flex-responsive">
      <aside>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <button type="button">{link}</button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main>
        <header>
          <div className="search">
            <input type="text" placeholder="Fake search in dashboard..." />
          </div>
        </header>
        <div className="flex flex-responsive stretch flex-gap-small">
          <div className="content content--left"></div>
          <div className="content content--right"></div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
