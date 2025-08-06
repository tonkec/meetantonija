import HomePage from 'pages/HomePage'
import PostsPage from 'pages/PostsPage'
import ProjectPage from 'pages/ProjectPage'
import CvPage from 'pages/CvPage'
import NotFound from 'components/NotFound'
import PostPage from 'pages/PostPage'

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
    path: '*',
    element: <NotFound />,
  },
]

export default routes
