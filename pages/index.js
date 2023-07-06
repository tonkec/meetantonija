import { useState } from 'react';
import Layout from '../components/Layout';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Layout>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
          <h5 className="text-bold">You found a secret fun fact about me!</h5>
          <p>Did you know I mentored over 200 students at Code Institute?</p>
        </div>
      </Modal>
      <section className="flex w-full relative">
        <div className="px-10 py-10 bg-green flex-1">
          <h1 className="text-9xl font-bold text-white leading-tight">
            Hi, I am Antonija
            <div
              className="ml-2 inline-block bg-white opacity-70 w-[20px] h-[20px] cursor-pointer"
              onClick={openModal}
            ></div>
            <div className="ml-2 inline-block bg-white w-[20px] h-[20px]"></div>
            <div className="ml-2 inline-block bg-white w-[20px] h-[20px]"></div>
          </h1>
        </div>
        <div className="bg-brown flex flex-col w-full flex-1">
          <div className="bg-brown">
            <div className="grid grid-cols-4">
              <div className="p-20 bg-green shine"></div>
              <div className="p-20 bg-brown shine"></div>
              <div className="p-20 bg-orange shine"></div>
              <div className="p-20 bg-green shine"></div>
              <div className="p-20 bg-brown shine"></div>
              <div className="p-20 bg-orange shine"></div>
              <div className="p-20 bg-green shine"></div>
              <div className="p-20 bg-brown shine"></div>
            </div>

            <div className="py-32 px-10">
              <p className="text-5xl">
                ...a freelance front end developer with high React skills...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brown p-20">
        <div className="flex">
          <p className="text-5xl max-w-lg">
            ...but I also coded some apps using Angular and React Native...
          </p>
        </div>
      </section>

      <section className="bg-orange">
        <div className="grid grid-cols-3">
          <div className="px-20 py-32 text-center bg-green">
            <p className="text-5xl text-white">Trustworthy</p>
          </div>
          <div className="px-20 py-32 text-center bg-orange">
            <p className="text-5xl text-white">Casumo</p>
          </div>
          <div className="px-20 py-32 text-center bg-brown">
            <p className="text-5xl text-green">Formunauts</p>
          </div>
          <div className="px-20 py-32 text-center bg-brown">
            <p className="text-5xl text-green">Revuto</p>
          </div>
          <div className="px-20 py-32 text-center bg-green">
            <p className="text-5xl text-white">Craftstrom</p>
          </div>
          <div>
            <p className="px-20 py-32 text-center text-5xl text-brown">
              ...and more...
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brown p-20">
        <div className="flex justify-end">
          <p className="text-5xl max-w-lg">
            ...this all means I am skilled in Javascript, Typescript, Redux,
            Styled Components...
          </p>
        </div>
      </section>

      <section className="">
        <div className="flex items-center bg-orange">
          <div className="bg-green px-20 py-20">
            <p className="text-5xl max-w-lg text-white">
              ...if you know the secret word, I will give you my CV
            </p>
          </div>

          <div className=" bg-orange px-32 h-full text-center">
            <button className="text-5xl"> Download CV</button>
          </div>
        </div>
      </section>

      <section className="bg-brown">
        <div className="px-20 py-20 flex justify-end">
          <div>
            <p className="text-5xl max-w-lg text-black">
              ...if you don't know it, you'll have to contact me...
            </p>
          </div>
        </div>
      </section>

      <section className="p-20 bg-orange">
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            className="bg-brown mb-4 w-full pl-6 py-6 text-green"
            placeholder="Email"
          />
          <input
            type="text"
            className="bg-brown mb-4 w-full pl-6 py-6 text-green"
            placeholder="Name"
          />
          <textarea
            type="text"
            className="bg-brown mb-4 w-full pl-6 py-6 text-green"
            placeholder="Message"
            cols={20}
            rows={10}
          />
          <input
            type="submit"
            className="bg-green w-full block py-6 text-brown text-2xl"
          />
        </form>
      </section>
    </Layout>
  );
}
