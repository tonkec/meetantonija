import HomePage from '../pages/HomePage'
import AnswerPage from '../pages/AnswerPage'
import PostsPage from '../pages/PostsPage'
import QuestionsPage from '../pages/QuestionsPage'

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
  {
    path: '/questions',
    element: <QuestionsPage />,
  },
]

export default routes
