import Headroom from "react-headroom"
import Link from "next/link";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Router from 'next/router'
import {projects} from "./../data/projects"

const a = "text-2xl text-secondary font-bold"
const listItem = "lg:px-6 px-2"

const options = projects.map((project) => project.title)
const defaultOption = "Projects";
  
export default function Nav() {
    const _onSelect = (e) => {
        Router.push(`/projects/${e.value.toLowerCase()}`)
    }
  return (
   <Headroom>
       <nav className="py-20 fixed lg:px-20 inset-0">
           <ul className="flex relative w-full">
               <li className={`${listItem}`}>
                   <Link href="/">
                       <a className={`${a}`}>Home</a>
                   </Link>
               </li>

               <li className={`${listItem}`}>
                   <Link href="/about">
                       <a className={`${a}`}>About</a>
                   </Link>
               </li>

               <li className={`${listItem}`}>
                    <Dropdown onChange={_onSelect} arrowClassName="!hidden" controlClassName="!border-0 !text-2xl !py-0 text-uppercase !font-bold !bg-transparent" options={options} value={defaultOption} placeholder="Projects" />
               </li>

               <li className={`${listItem} absolute right-6`}>
                   <Link href="/contact">
                       <a className={`${a}`}>Contact</a>
                   </Link>
               </li>
           </ul>
       </nav>
   </Headroom>
  )
}
