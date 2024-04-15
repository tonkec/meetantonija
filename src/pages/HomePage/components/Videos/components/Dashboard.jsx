const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside>
        <nav>
          <ul>
            <li>
              <a href="#">Dashboard</a>
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
      <header>
        <div className="search">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search..." />
        </div>
      </header>
      <main>
        <div className="content content--left"></div>
        <div className="content content--right"></div>
      </main>
    </div>
  )
}

export default Dashboard
