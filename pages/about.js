import Header from "../components/Header"
import Nav from "../components/Nav"

import Footer from "../components/Footer"
import { paragraph } from "../utils/typography"
import Image from "next/image";
import {useState} from "react";
export default function About(){
    const [isImageShown, setIsImageShown] = useState(false);
    const showImage = () => {
        setIsImageShown(!isImageShown);
    }
    return (
        <>
            <Nav />
            <Header title="About me" subtitle="My name is Antonija Šimić" />
            <section>
                <div className="flex w-full">
                    <div className="w-8/12 px-20 py-20 bg-gray">
                        <p className={paragraph}>
                        I am a freelance front end developer and a punk rock developer. I organize CSS meetup in Zagreb where I code funny things using only CSS. Encouraging others to start coding, especially minorities, like refugees, gives me a great sense of purpose. In my career, great pleasure also comes from mentoring less experienced developers. In my non coding time, I play basketball, volunteer in LGBTIQA+ organizations and explore music with drums and guitar.      
                        </p>

                        <p className={`${paragraph} mt-20`}>
                        I am a founder of coding school, Kodiraonica, where I teach HTML&amp;CSS, Javascript and React. Our courses are made for beginners.
                        </p>
                    </div>

                    <div className="w-4/12 px-20 py-20 bg-secondary cursor-pointer flex items-center justify-center">
                       <Image src="/image.webp" width={200} height={200} onClick={showImage}/>
                    </div>
                </div>
            </section>

            {isImageShown && <div className="fixed inset-x-80 inset-y-52 flex justify-center items-center bg-neutral-50">
                <button className="text-black absolute top-4 left-4" onClick={showImage}>
                    <span className="material-icons cursor-pointer">&#xe5cd;</span>
                </button>
                <Image src="/antonija.jpg" width={300} height={200}/>
            </div>}

            <Footer />
        </>
    )
}