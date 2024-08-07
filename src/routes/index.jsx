import HomePage from '../pages/HomePage'
import PostsPage from '../pages/PostsPage'
import ProjectPage from '../pages/ProjectPage'
import AboutPage from '../pages/AboutPage'
import CvPage from '../pages/CvPage'
import NotFound from '../components/NotFound'
import PostPage from '../pages/PostPage'

const routes = [
  {
    path: '/',
    element: <HomePage />,
    exact: true,
    navigationName: 'Home',
  },
  {
    path: '/posts',
    element: <PostsPage />,
    navigationName: 'Posts',
  },
  {
    path: '/about',
    element: <AboutPage />,
    navigationName: 'About',
  },
  {
    path: '/cv',
    element: <CvPage />,
    navigationName: 'CV',
  },
  {
    path: '/post/:title',
    element: <PostPage />,
    navigationName: 'Post',
  },
  {
    path: '/project/:id',
    element: <ProjectPage />,
    navigationName: 'Project',
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
