import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useState } from 'react'
import Modal from 'react-modal'
import Image from '../../../components/Image'
import './Modal.scss'

const MyMasonry = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
        <Masonry gutter="10" columnsCount={2}>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedImage(image)
                setIsModalOpen(true)
              }}
              className="masonry-item"
            >
              <Image src={image.src} alt={image.subtitle} />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {!!selectedImage && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="modal"
        >
          <div
            className="content"
            style={{ backgroundImage: `url(${selectedImage.src})` }}
          ></div>
          <p>{selectedImage.subtitle}</p>
        </Modal>
      )}
    </>
  )
}

export default MyMasonry
