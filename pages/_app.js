import Layout from '../components/Layout'
import '../styles/globals.css'
import { motion } from "framer-motion"
import {useEffect, useState} from "react";
import {projects} from "./../data/projects"
import { heading4 } from '../utils/typography';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
function MyApp({ Component, pageProps, router }) {
  const [isSearchShown, setSearch] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "f") {
        setSearch(!isSearchShown)
      }
    })
    return document.removeEventListener("keydown", (e) => e);
  })

  const onSearch = (e) => {
    const filteredProject = projects.filter((project) => {
      if (e.target.value.trim() !== "") {
        const nameOfTheClient = project.title.toLowerCase().startsWith(e.target.value.trim().toLowerCase())
        return nameOfTheClient;
      } 
    })
 
    setFilteredProjects(filteredProject);
    if (e.target.value.trim() === "") {
      setFilteredProjects(projects)
    }
    return filteredProject
  }

  return(
    <>
     <CustomCursor
      targets={['.link', '.your-css-selector']}
      customClass='custom-cursor'
      fill='#3b82f6'
      smoothness={{
        movement: 1,
        scale: 1,
        opacity: 1
      }}
      targetOpacity={1}
      dimensions={150}
/>
    <motion.div
      style={{backgroundColor: "#050A30", position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 999}}
      key={router.route}
      initial={{ transform: "translateX(0%)", width: "150%"}}
      animate={{ transform: "translateX(100%)" , width: "100%"}}
      transition={{ type: 'linear', duration: 2 }}
    >
    </motion.div>
      <Layout> 
        {isSearchShown && <section className='bg-ternary fixed inset-0 z-max'>
         <input autoFocus onChange={onSearch} className="bg-white text-black placeholder-black w-full py-4 md:py-10 px-10 text-2xl lg:text-4xl focus:outline-none" type="search" placeholder="Search by the name of a client" />
         {filteredProjects.length > 0 ? filteredProjects.map((project) =>{
            return <a  href={`/projects/${project.title.toLowerCase()}`} key={project.title} className="px-10 block">
              <h4 className={`${heading4} underline mb-5 mt-5`}>{project.title}</h4>
            </a>
          }) : <div>Nothing to show</div>}
        </section>}
        <Component {...pageProps} />
      </Layout>
      </>)
}

export default MyApp