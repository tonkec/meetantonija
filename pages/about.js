import Header from "../components/Header"
import { paragraph } from "../utils/typography"
import Image from "next/image";
import {useState} from "react";
import Head from 'next/head';
const imageLoader = require("./../loader.js");
export default function About(){
    const [isImageShown, setIsImageShown] = useState(false);
    const showImage = () => {
        setIsImageShown(!isImageShown);
    }
    return (
        <>
            <Head>
             <title>About Antonija</title>
            </Head>
            <Header title="About me" subtitle="My name is Antonija Šimić" />
            <section>
                <div className="flex flex-wrap lg:flex-nowrap w-full">
                    <div className="w-full lg:w-8/12 px-10 md:px-20 py-20 bg-gray">
                        <p className={paragraph}>
                        I am a freelance front end developer and a punk rock developer. I organize CSS meetup in Zagreb where I code funny things using only CSS. Encouraging others to start coding, especially minorities, like refugees, gives me a great sense of purpose. In my career, great pleasure also comes from mentoring less experienced developers. In my non coding time, I play basketball, volunteer in LGBTIQA+ organizations and explore music with drums and guitar.      
                        </p>

                        <p className={`${paragraph} mt-10 lg:mt-20`}>
                        I am a founder of coding school, Kodiraonica, where I teach HTML&amp;CSS, Javascript and React. Our courses are made for beginners.
                        </p>
                    </div>

                    <div className="w-full lg:w-4/12 px-20 py-20 bg-secondary cursor-pointer flex items-center lg:justify-center">
                       <Image loader={imageLoader} src="/image.webp" width={200} height={200} onClick={showImage}/>
                    </div>
                </div>
            </section>

            {isImageShown && <div className="fixed w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 h-[300px] md:h-[350px] top-2/4 left-2/4 flex justify-center items-center bg-neutral-50  -translate-y-1/2 -translate-x-1/2 bg-center bg-no-repeat bg-contain" style={{backgroundImage: `url(/antonija.jpg)`}}>
                <button className="text-black absolute top-4 left-4 z-40" onClick={showImage}>
                    <span className="material-icons cursor-pointer">&#xe5cd;</span>
                </button>
            </div>}
        </>
    )
}