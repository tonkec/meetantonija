const BrowserFrame = ({ children }) => {
  return (
    <div className="browser">
      <div className="bar"></div>
      <div className="fake-content"></div>
      <div className="image"></div>
      <div className="fake-content"></div>

      <div className="content">{children}</div>
    </div>
  )
}

export default BrowserFrame
