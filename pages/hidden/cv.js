import Header from "./../../components/Header"
import { paragraph, heading2, heading4, heading5 } from "../../utils/typography"
import Link from "next/link"
import {useState, useRef} from "react";
import { useReactToPrint } from 'react-to-print';
import Head from "next/head";
export default function CV(props){
    const {projects} = props;
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const onSearch = (e) => {
        const filteredProject = projects.filter((project) => {
            if (e.target.value.trim() !== "") {
                const nameOfTheClient = project.title.toLowerCase().startsWith(e.target.value.toLowerCase()) || project.hashtags.filter((hastag) => hastag.toLowerCase().startsWith(e.target.value.toLowerCase()))[0]
                return nameOfTheClient;
            } 
        })
       
        setFilteredProjects(filteredProject);

        if (e.target.value.trim() === "") {
            setFilteredProjects(projects)
        }
        return filteredProject
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      bodyClass: "print",
      documentTitle: "antonija_simic_cv"
    });

    return <div>
        <Head>
            <title>Antonija's CV</title>
        </Head>
        <Header title="Antonija's CV" subtitle="Read more about my work" />
        <button onClick={handlePrint} className="bg-primary px-6 py-4 print-hidden">Save page as PDF (ctrl + p)</button>
        <section className="bg-gray print-hidden">
            <input onChange={onSearch} className="bg-transparent text-white placeholder-white w-full py-4 md:py-10 px-4 lg:px-20 text-sm md:text-xl lg:text-4xl border-none focus:outline-none" type="search" placeholder="Search by the name of a client or technology" />
        </section>
        <section className="bg-ternary py-20 px-10 md:px-20" ref={componentRef} >
            <h2 className={`${heading2}`}>Work history</h2>

            {filteredProjects.length > 0 ? filteredProjects.map((project) =>{
                return <div key={project.title} className="project">
                    <div>
                        <h4 className={`${heading4} underline mb-5 mt-20`}><a href={project.link} target="_blank">{project.title}</a></h4>
                        <h5 className={`${heading5}`}>{project.date}</h5>
                    </div>

                    <div className="md:pl-10 pl-4 mt-6 md:mt-10 mb-5">
                        <ul className="list-disc">
                            {project.tasks.map((task, i) => <li key={i} className="text-md md:text-2xl">{task}</li>)}
                        </ul>
                    </div>

                    <div className="flex hashtags">
                        {project.hashtags.map((hash,i) => <a key={i} href={`/tags/${hash}`}><span className="font-bold inline-block mb-10 mx-2">#{hash}</span></a> )}
                    </div>

                    <Link href={`/projects/${project.route.toLowerCase()}`}>
                        <a className="underline text-sm md:text-lg"> Read More</a>
                    </Link>
                </div>
            } ) : <div>Nothing to show</div>}
        </section>
    </div>
}

import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'data/cv.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return {
      props: {
          projects: objectData.projects
      }
    }
}
