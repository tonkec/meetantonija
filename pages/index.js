import Header from "./../components/Header";
import { heading2, heading3, heading4, heading5, paragraph } from "../utils/typography"
import Link from "next/link"
import {useState} from "react";
import Nav from "./../components/Nav"
import Footer from "./../components/Footer";
const button = "bg-secondary text-white py-4 px-10 text-2xl";
import {projects} from "./../data/projects"

export default function Home() {
  let [projectsShown, setProjects] = useState(projects)
  const onButtonFilterClick = (e) => {
    const filteredProjects = projects.filter((project) => e.target.value === project.stack);
    setProjects(filteredProjects)
  }
  return (
   <>
      <Nav />
      <Header title="I am Antonija" subtitle="A freelance front-end developer" />

    <section>
      <div className="grid grid-cols-2 w-full">
        <div className="bg-secondary pb-[200px] pt-[100px] text-center">
          <h2 className={`${heading2} text-white font-bold`}>Who am I?</h2>
          <p className={`${paragraph} text-white max-w-md mx-auto text-left font-light mt-12`}>I am a freelance front end developer based in Zagreb who has huge crash on design and CSS. I work mostly remotely with clients from all over the world. </p>
        </div>

        <div className="bg-white pb-[200px] pt-[100px] text-center">
          <h2 className={`${heading2} text-secondary font-bold`}>What do I do?</h2>
          <p className={`${paragraph} text-secondary max-w-md mx-auto text-left font-light mt-12`}>I code web applications using React.js, Next.js and all mighty CSS.</p>
        </div>
      </div>
    </section>


    <section className="bg-white py-20 px-20">
      <h2 className={`${heading3} text-secondary font-bold text-center`}>I am social.</h2>
      <p className={`${paragraph} text-center text-secondary mt-10`}>Linkedin Github Codepen</p>
    </section>

    <section className="bg-primary py-20 px-20 flex items-center justify-evenly">
      <h3 className={`${heading3} font-bold max-w-3xl`}>Do you have something interesting I could work on?</h3>
      <Link href="/contact">
        <a className={`${button}`}>Contact me</a>
      </Link>
    </section>

    <section className="bg-ternary py-20 overflow-auto">
      <h2 className={`${heading2} text-secondary font-bold text-center mb-20`}>Projects I am proud of.</h2>
      <div className="flex justify-center items-center mb-20">
        <button value="react" onClick={onButtonFilterClick} className="bg-gray py-2 px-10 inline-block hover:bg-primary font-bold text-2xl mr-2">React</button>
        <button value="angular" onClick={onButtonFilterClick} className="bg-gray py-2 px-10 inline-block hover:bg-primary font-bold text-2xl mr-2">Angular</button>

      </div>
      {projectsShown.map((project, i) => {
        return <div key={`projects/${project.title}`} className={`${i % 2 === 0 ? "float-left": "float-right"} bg-secondary px-20 py-6 w-2/4 clear-both mb-20 hover:bg-primary`}>
          <Link href={project.href}>
            <a>
              <h1 className={`${heading3} text-left text-white leading-normal font-bold`}>{project.title}</h1>
              <h4 className={`${heading5} text-left text-white font-light mt-0`}>{project.subtitle}</h4>
              </a>
            </Link>
          </div>
        })}
    </section>

   <section className="bg-primary py-20">
     <div className="flex items-center justify-center flex-wrap w-6/12 mx-auto">
       <h2 className={`${heading2} text-center font-bold`}>Kodiraonica</h2>
       <p className={`${paragraph} mt-20`}>I have been mentoring for the past 5 years. That inspired me to found my own <a href="https://kodiraonica.dev/" className="underline" target="_blank">coding school</a>. We teach HTML&amp;CSS, Javascript and React. Kodiraonica is one year old, we have many happy students and inspiring teachers. </p>
     </div>
   </section>

    <Footer />
  </>
  )
}
