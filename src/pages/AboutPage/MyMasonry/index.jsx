import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useState } from 'react'
import Modal from 'react-modal'
import Image from '../../../components/Image'
import usePrefersDarkMode from '../../../hooks/usePrefersDarkMode'
import './Modal.scss'

const MyMasonry = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const isDark = usePrefersDarkMode()

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
        <Masonry gutter="20px" columnsCount={2}>
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
          style={{
            overlay: {
              zIndex: 1000,
              backgroundColor: isDark
                ? 'rgba(0, 0, 0, 0.8)'
                : 'rgba(255, 255, 255, 0.8)',
            },
          }}
        >
          <div
            className="content border-radius"
            style={{ backgroundImage: `url(${selectedImage.src})` }}
          ></div>
          <p>{selectedImage.subtitle}</p>
        </Modal>
      )}
    </>
  )
}

export default MyMasonry
