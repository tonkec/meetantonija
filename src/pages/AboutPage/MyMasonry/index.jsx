import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useState } from 'react'
import Modal from 'react-modal'
import Image from '../../../components/Image'
import { useLocalStorage } from '@uidotdev/usehooks'
import './Modal.scss'

const MyMasonry = ({ images }) => {
  const [isDarkLocalStorage] = useLocalStorage('dark-mode', false)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

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
              <Image src={image.src} alt={image.subtitle} className="pointer" />
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
              backgroundColor: isDarkLocalStorage
                ? 'rgba(0, 0, 0, 0.8)'
                : 'rgba(255, 255, 255, 0.8)',
            },
          }}
        >
          <div
            className="content border-radius"
            style={{ backgroundImage: `url(${selectedImage.src})` }}
          ></div>
          <p className="text-white">{selectedImage.subtitle}</p>
        </Modal>
      )}
    </>
  )
}

export default MyMasonry
