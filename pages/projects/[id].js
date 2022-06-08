import Header from "./../../components/Header"
import Nav from "./../../components/Nav"
import { paragraph, heading2, heading3 } from "../../utils/typography"
import Footer from "./../../components/Footer"
import {useState} from "react";
import Image from "next/image";
import Link from "next/link"
import { useRouter } from 'next/router'

function Project(props) {
    const [isImageShown, setIsImageShown] = useState(false);
    const showImage = () => {
        setIsImageShown(!isImageShown);
    }
    const router = useRouter()
    const { id } = router.query
    const projects = props.projects; 
    const project = projects.filter((project) => project.title.toLowerCase() === id)[0];

    const randomProjects = projects.filter((p, i) => {
        return project.title.toLowerCase() !== p.title.toLowerCase() && !p.hidden
    });
    const randomNumber = Math.floor(Math.random() * randomProjects.length);
    return (
        <>
            <Nav />
            <Header title={project.title} subtitle={project.subtitle} link={project.link} />

            <section className="bg-secondary py-20">
                <div className="flex flex-wrap w-6/12 mx-auto">
                    <h3 className={`${heading3} text-white font-bold mb-10`}>
                        What kind of app is this?
                    </h3>

                    <p className={`${paragraph} text-white`}>
                        {project.description}
                    </p>
                </div>
            </section>

            <section className={`${project.image ? "bg-transparent" : "bg-ternary"}`}>
                <div className="flex w-full">
                    {project.image && <div className="w-4/12 px-20 py-20 bg-primary cursor-pointer flex items-center justify-center">
                       <Image src="/image.webp" width={200} height={200} onClick={showImage}/>
                    </div>}

                    <div className={`${project.image ? "w-8/12 px-20" : "w-6/12 mx-auto"} py-20 bg-ternary`}>
                        <h3 className={`${heading3} font-bold mb-10`}>I was a {project.roleTitle}</h3>
                        {project.role.map((singleRole) => <p key={singleRole} className={`${paragraph} mt-20`}>{singleRole}</p>)}
                    </div>
                </div>
            </section>

            <section className="py-10 px-20">
                <div className="flex">
                    {project.hashtags.map((hash,i) => <a key={i} href={`/tags/${hash}`}><span className="font-bold inline-block mx-2">#{hash}</span></a> )}
                </div>
            </section>

            <section className="bg-gray py-20 text-center">
                <Link href={randomProjects[randomNumber].title.toLowerCase()}>
                    <a className={`${heading3} font-bold flex items-center justify-center`}>
                        <span>Read about {randomProjects[randomNumber].title} next</span> <span className="material-icons cursor-pointer text-8xl">&#xe5e1;</span>
                    </a>
                </Link>
            </section>

            {isImageShown && <div className="fixed w-11/12 md:w-8/12 xl:w-5/12 h-[350px] top-2/4 left-2/4 flex justify-center items-center bg-neutral-50  -translate-y-1/2 -translate-x-1/2">
                <button className="text-black absolute top-4 left-4 z-40" onClick={showImage}>
                    <span className="material-icons cursor-pointer">&#xe5cd;</span>
                </button>
                <Image src={project.image} layout='fill'/>
            </div>}

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
    const objectData = JSON.parse(jsonData);
    return {
      props: objectData
    }
}