import HomePage from '../pages/HomePage'
import PostsPage from '../pages/PostsPage'
import ProjectPage from '../pages/ProjectPage'
import AboutPage from '../pages/AboutPage'
import CvPage from '../pages/CvPage'
import NotFound from '../components/NotFound'
import PostPage from '../pages/PostPage'
import HobbyPage from '../pages/HobbyPage'
import HobbySubPage from '../pages/HobbySubPage'

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
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/cv',
    element: <CvPage />,
  },
  {
    path: '/post/:title',
    element: <PostPage />,
  },
  {
    path: '/project/:title',
    element: <ProjectPage />,
  },
  {
    path: '/hobby/:title',
    element: <HobbyPage />,
  },
  {
    path: '/hobby/:title/:subproject',
    element: <HobbySubPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
