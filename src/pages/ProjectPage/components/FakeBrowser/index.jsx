import './FakeBrowser.scss'

const FakeBrowser = ({ children, className }) => (
  <div className={`fake-browser ${className}`}>
    <div class="bar"></div>
    <div class="fake-content">{children}</div>
  </div>
)

export default FakeBrowser
