import HomePage from '../pages/HomePage'
import AnswerPage from '../pages/AnswerPage'
import PostsPage from '../pages/PostsPage'

const routes = [
  {
    path: '/',
    element: <HomePage />,
    exact: true,
  },
  {
    path: '/answer/:id',
    element: <AnswerPage />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
]

export default routes
