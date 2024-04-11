const HireMe = () => {
  return (
    <div className="hire-me">
      <h4>Are you ready to talk about your business?</h4>
      <p>If you are interested in working with me, please get in touch.</p>

      <button
        onClick={() => {
          navigator.clipboard.writeText('antonija1023@gmail.com')
        }}
      >
        Copy email address
      </button>
    </div>
  )
}

export default HireMe
