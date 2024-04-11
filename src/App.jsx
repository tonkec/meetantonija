import './App.scss'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'
import routes from './routes'

function Layout() {
  return (
    <>
      <Navigation />
      <div className="container">
        <h6>Command + K</h6>
      </div>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Route>
    </Routes>
  )
}

export default App