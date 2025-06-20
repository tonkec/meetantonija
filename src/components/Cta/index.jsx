import { FaKeyboard } from 'react-icons/fa'

const Cta = () => {
  return (
    <section className="small-padding large-margin-top hidden-mobile">
      <div className="container text-center large-padding bg-sky-blue border-radius">
        <h3 className="no-margin text-black">Looking for something else?</h3>
        <p className="small-margin-top small-margin-bottom text-black">
          Press Shift + K to open the search bar.
        </p>
        <FaKeyboard
          className="text-black"
          fontSize="2rem"
          style={{ marginTop: '-7px' }}
        />
      </div>
    </section>
  )
}

export default Cta
