import routes from '../../routes'

const NotFound = () => {
  const filteredRoutes = routes.filter(
    (route) => route.path !== '*' && !route.path.includes(':')
  )
  return (
    <div className="container">
      <h1>Nothing to be found here. Some other pages you might like:</h1>

      <ul>
        {filteredRoutes.map((route, index) => (
          <li key={index}>
            <a href={route.path}>{route.path}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotFound
