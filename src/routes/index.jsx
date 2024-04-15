import HomePage from '../pages/HomePage'
import PostsPage from '../pages/PostsPage'
import ProjectPage from '../pages/ProjectPage'
import AboutPage from '../pages/AboutPage'
import CvPage from '../pages/CvPage'
import NotFound from '../components/NotFound'

const routes = [
  {
    path: '/',
    element: <HomePage />,
    exact: true,
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
  {
    path: '/project/:id',
    element: <ProjectPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/cv',
    element: <CvPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
