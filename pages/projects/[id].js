import Header from "./../../components/Header"
import Nav from "./../../components/Nav"
import { paragraph, heading2, heading3 } from "../../utils/typography"
import Footer from "./../../components/Footer"
import {useState} from "react";
import Image from "next/image";
import Link from "next/link"

function Project() {
    const [isImageShown, setIsImageShown] = useState(false);
    const showImage = () => {
        setIsImageShown(!isImageShown);
    }
    return (
        <>
            <Nav />
            <Header title="Revuto" subtitle="2019 - Async Labs - React" link="https://revuto.com/" />

            <section className="bg-secondary py-20">
                <div className="flex flex-wrap w-6/12 mx-auto">
                    <h2 className={`${heading2} text-white font-bold mb-10`}>
                        What kind of app is this?
                    </h2>

                    <p className={`${paragraph} text-white`}>
                     Revuto is a web application for managing subscriptions using cryptocurrency revu tokens.                         The app was built using React.js. The cool package I discovered in this project was react-helmet, npm package that manges meta tags in React apps.
                    </p>
                </div>
            </section>

            <section>
                <div className="flex w-full">
                    <div className="w-4/12 px-20 py-20 bg-primary cursor-pointer flex items-center justify-center">
                       <Image src="/image.webp" width={200} height={200} onClick={showImage}/>
                    </div>

                    <div className="w-8/12 px-20 py-20 bg-ternary">
                        <h3 className={`${heading3} font-bold mb-10`}>I was a React developer</h3>
                        <p className={paragraph}>
                        I was working closely with backend developers and a designer. My task was to create user interface following designs from designer and to connect components via API provided by backend developers. 
                        </p>

                        <p className={`${paragraph} mt-20`}>
                        User authorization was handled with tokens. I loved working on this project because I was able to get my hands on Context API and React hooks. The cool part in login and signup form was custom made captcha. Originally, additions were much complex, but client wanted simplified captcha. Now user should know how to sum two numbers that are not larger than 10. 
                        </p>

                        <p className={`${paragraph} mt-20`}>
                        I used Context API for flash messages and hooks in the stateful functional components. I also really much enjoyed playing with CSS animations and transitions. The most valuable page to client was referral program page which has animation that I coded from scratch. The tricky part was reversing animation. I learned scss can not count nth children backwards.                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray py-20 text-center">
                <Link href="/">
                    <a className={`${heading3} font-bold flex items-center justify-center`}>
                        <span>Read about Span next</span> <span className="material-icons cursor-pointer text-8xl">&#xe5e1;</span>

                    </a>
                </Link>
            </section>

            <Footer />
        </>
    )
}

export default Project;

import fsPromises from 'fs/promises';
import path from 'path'
export async function getServerSideProps(context) {
    const filePath = path.join(process.cwd(), 'data/projects.json');
    const jsonData = await fsPromises.readFile(filePath);
    console.log('jsonData :>> ', jsonData);
    const objectData = JSON.parse(jsonData);
    return {
      props: objectData
    }
}
