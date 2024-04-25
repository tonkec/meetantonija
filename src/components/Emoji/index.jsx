import './Emoji.scss'

const Emoji = () => {
  return (
    <div className="wrapper">
      <div className="face">
        <div className="straight-hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="eye eye-left">
          <div className="eyebrow"></div>
        </div>
        <div className="eye eye-right">
          <div className="eyebrow"></div>
        </div>
      </div>
      <div className="body"></div>
      <div className="laptop"></div>
    </div>
  )
}

export default Emoji