import Header from "./../../components/Header"
import { paragraph, heading2, heading4, heading5 } from "../../utils/typography"
import Link from "next/link"
import {useState} from "react";

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
    return <>
        <Header title="Antonija's CV" subtitle="Read more about my work" />
        <section className="bg-gray">
            <input onChange={onSearch} className="bg-transparent text-white placeholder-white w-full py-4 md:py-10 px-4 lg:px-20 text-sm md:text-xl lg:text-4xl border-none focus:outline-none" type="search" placeholder="Search by the name of a client or technology" />
        </section>
        <section className="bg-ternary py-20 px-10 md:px-20">
            <h2 className={`${heading2}`}>Work history</h2>

            {filteredProjects.length > 0 ? filteredProjects.map((project) =>{
                return <div key={project.title}>
                    <div>
                        <h4 className={`${heading4} underline mb-5 mt-20`}><a href={project.link} target="_blank">{project.title}</a></h4>
                        <p className={`${paragraph}`}>{project.date}</p>
                    </div>

                    <div className="md:pl-10 pl-4 mt-6 md:mt-10 mb-5">
                        <ul className="list-disc">
                            {project.tasks.map((task, i) => <li key={i} className="text-md md:text-2xl">{task}</li>)}
                        </ul>
                    </div>

                    <div className="flex">
                        {project.hashtags.map((hash,i) => <a key={i} href={`/tags/${hash}`}><span className="font-bold inline-block mb-10 mx-2">#{hash}</span></a> )}
                    </div>

                    <Link href={`/projects/${project.route.toLowerCase()}`}>
                        <a className="underline text-sm md:text-lg"> Read More</a>
                    </Link>
                </div>
            } ) : <div>Nothing to show</div>}
        </section>

        <section className="bg-secondary text-white py-10 md:py-20 px-10 md:px-20">
            <h2 className={`${heading2}`}>Hobby projects</h2>
            <div>
                <h4 className={`${heading4} underline mt-10 md:mt-20`}><a href="https://duga.app/" target="_blank">Duga</a></h4>
                <p className={`${paragraph}`}>2021</p>
            </div>

            <div className="pl-10 mt-10">
                <ul className="list-disc">
                    <li className="text-md md:text-2xl">A landing page for dating app built with React</li>
                </ul>

                <a href="https://www.duga.app/" className="underline mt-6 inline-block -ml-10">
                    Open 
                </a>
            </div>
        </section>

        <section className="bg-secondary text-white px-10 py-10 md:py-20 md:px-20">
            <h2 className={`${heading2}`}>Some other projects.</h2>
            <div>
                <h4 className={`${heading4} underline mt-10 md:mt-20`}><a href="https://www.tintup.com/" target="_blank">TINT</a></h4>
                <p className={`${paragraph}`}>2016</p>
            </div>

            <div className="pl-10 mt-10">
                <ul className="list-disc">
                    <li className="text-md md:text-2xl">Turning designs into the Jekyll system</li>
                </ul>

                <a href="https://antonijasimic.bitbucket.io/tintold/index.html" className="underline mt-6 inline-block -ml-10">
                    Open 
                </a>
            </div>

            <div>
                <h4 className={`${heading4} underline mt-10 md:mt-20`}><a href="https://www.tintup.com/" target="_blank">TINT2</a></h4>
                <p className={`${paragraph}`}>2016</p>
            </div>

            <div className="pl-10 mt-10">
                <ul className="list-disc">
                    <li className="text-2xl">Turning designs into the Jekyll system</li>
                </ul>

                <a href="https://antonijasimic.bitbucket.io/tint/index.html" className="underline mt-6 inline-block -ml-10">
                    Open 
                </a>
            </div>
        </section>
    </>
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
