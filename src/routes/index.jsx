import HomePage from '../pages/HomePage'
import AnswerPage from '../pages/AnswerPage'
import PostsPage from '../pages/PostsPage'
import QuestionsPage from '../pages/QuestionsPage'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectPage from '../pages/ProjectPage'
import AboutPage from '../pages/AboutPage'
import CvPage from '../pages/CvPage'

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
  {
    path: '/projects',
    element: <ProjectsPage />,
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
]

export default routes
