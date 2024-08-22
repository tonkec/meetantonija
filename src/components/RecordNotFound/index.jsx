import { Helmet } from 'react-helmet'

const RecordNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Meetantonija | 404</title>
      </Helmet>
      <header className="header-padding-top header-padding-bottom project-header">
        <div className="container">
          <h1>Project not found.</h1>
          <p>The project you are looking for does not exist.</p>
          <p>
            Try to go back to the{' '}
            <a className="normal-font" href="/">
              homepage
            </a>{' '}
            and go from there.
          </p>
        </div>
      </header>
    </>
  )
}

export default RecordNotFound
