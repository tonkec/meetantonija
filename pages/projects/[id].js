import Header from "./../../components/Header"
import { paragraph, heading3, heading4 } from "../../utils/typography"
import {useState} from "react";
import Image from "next/image";
import Link from "next/link"
import { useRouter } from 'next/router'
const imageLoader = require("./../../loader.js");

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

    const onImageClick = () => {
        router.push(project.image);
    }
    return (
        <>
            <Header title={project.title} subtitle={project.subtitle} link={project.link} />

            <section className="bg-secondary py-20">
                <div className="flex flex-wrap w-full px-6 md:w-6/12 mx-auto">
                    <h3 className={`${heading3} text-white font-bold mb-10`}>
                        What kind of app is this?
                    </h3>

                    <p className={`${paragraph} text-white`}>
                        {project.description}
                    </p>
                </div>
            </section>

            <section className={`${project.image ? "bg-transparent" : "bg-ternary"}`}>
                <div className="flex w-full flex-wrap lg:flex-nowrap">
                    {project.image && <div className="lg:w-4/12 px-20 py-20 bg-primary cursor-pointer flex items-center justify-center">
                       <Image loader={imageLoader} src="/image.webp" width={200} height={200} onClick={showImage}/>
                    </div>}

                    <div className={`${project.image ? "lg:w-8/12 px-20" : "md:w-6/12 mx-auto"} px-6 py-20 bg-ternary`}>
                        <h3 className={`${heading3} font-bold mb-10`}>I was {project.roleTitle.startsWith("A") ? `an ${project.roleTitle}` : `a ${project.roleTitle}`}</h3>
                        {project.role.map((singleRole) => <p key={singleRole} className={`${paragraph} mt-20`}>{singleRole}</p>)}
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="flex w-6/12 mx-auto">
                    {project.hashtags.map((hash,i) => <a key={i} href={`/tags/${hash}`}><span className="font-bold inline-block mx-2">#{hash}</span></a> )}
                </div>
            </section>

            <section className="bg-gray py-20 px-6 sm:text-center">
                <Link href={`/projects/${randomProjects[randomNumber].title.toLowerCase()}`}>
                    <a className={`${heading4} font-bold flex items-center sm:justify-center`}>
                        <span>Read about {randomProjects[randomNumber].title} next</span> <span className="material-icons cursor-pointer text-6xl">&#xe5e1;</span>
                    </a>
                </Link>
            </section>

            {isImageShown && <div className="fixed w-8/12 md:w-8/12 lg:w-6/12 xl:w-5/12 h-[300px] md:h-[350px] top-2/4 left-2/4 flex justify-center items-center bg-neutral-50 -translate-y-1/2 -translate-x-1/2">
                <div className="absolute inset-0 bg-center bg-no-repeat bg-contain cursor-pointer" style={{backgroundImage: `url(${project.image})`}} onClick={onImageClick}></div>
                <button className="text-black absolute top-4 left-4 z-40" onClick={showImage}>
                    <span className="material-icons cursor-pointer">&#xe5cd;</span>
                </button>
            </div>}
        </>
    )
}

export default Project;

import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'data/projects.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return {
      props: {
          projects: objectData.projects
      }
    }
}

// dynamic route, all possible routes
export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'data/projects.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    const titles = Array.from(new Set(objectData.projects.map((project) => project.title.toLowerCase())))
    return {
        paths: titles.map((id) => ({
            params: { id } 
        })),
        fallback: false
    }
}