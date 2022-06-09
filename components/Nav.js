import Headroom from "react-headroom"
import Link from "next/link";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Router from 'next/router'
import {projects} from "./../data/projects"
import {useState, useEffect} from "react";
const a = "text-4xl text-white font-bold inline-block my-4 hover:text-primary"
const listItem = "lg:px-6 px-2"

const options = projects.map((project) => project.title)
const defaultOption = "Projects";
  
export default function Nav() {
   const [isNavShown, setNav] = useState(false)
   const _onSelect = (e) => {
    Router.push(`/projects/${e.value.toLowerCase()}`)
    setNav(false)
   }

   useEffect(() => {
    if (isNavShown) {
        document.body.className = "overflow-hidden";
    } else {
        document.body.className = "overflow-auto";
    }

    document.addEventListener('keydown', (e) => {
        e.key === 'Escape' && setNav(!isNavShown)
    })
    return () => {
        document.removeEventListener('keydown', (e) => e)
    }
   }, [isNavShown])

   const toggleNav = () => {
    setNav(!isNavShown)
   }

   const closeNav = () => {
       setNav(false);
   }

   const navContent = () => (
    <ul className="relative md:px-20 px-1 top-2/4 -translate-y-2/4 lg:w-4/12">
        <li className={`${listItem}`}onClick={closeNav}>
            <Link href="/">
            <a className={`${a}`}>Home</a>
            </Link>
        </li>

        <li className={`${listItem}`} onClick={closeNav}>
            <Link href="/about">
                <a className={`${a}`}>About</a>
            </Link>
        </li>

        <li className={`${listItem}`}>
            <Dropdown onChange={_onSelect} arrowClassName="!hidden" controlClassName="!hover:text-primary !border-0 !my-4 !text-4xl !py-0 !px-0 text-uppercase !font-bold !bg-transparent !text-white" options={options} value={defaultOption} placeholder="Projects" />
        </li>

        <li className={`${listItem}`} onClick={closeNav}>
            <Link href="/contact">
                <a className={`${a}`}>Contact</a>
            </Link>
        </li>
    </ul>
   )
  return (
      <> 
        {isNavShown && <div className="fixed inset-0 bg-black z-max">
            <div className="bg-primary absolute left-2/4 right-0 top-0 bottom-0 hidden lg:block">
            </div>
            <button className="bg-ternary block py-2 px-6 absolute right-6 xs:right-10 top-16" onClick={toggleNav}>
                <span className="material-icons cursor-pointer text-4xl">&#xea61;</span>
            </button>
            {navContent()}
      </div>}
    <Headroom className="print-hidden">
        <nav className="py-16 fixed lg:px-20 inset-0">
           <button className="bg-primary block py-2 px-6 absolute right-6" onClick={toggleNav}>
                <span className="material-icons cursor-pointer text-4xl">&#xea61;</span>
           </button>
       </nav>
   </Headroom>
 </>
   
  )
}
