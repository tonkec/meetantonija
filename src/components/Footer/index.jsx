import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; meetantonija {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
export default Footer
