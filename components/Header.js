import { heading1, heading4 } from "../utils/typography"
import { useRef, useEffect, useState } from "react";
import Link from "next/link"

function Header({title, subtitle, link}){
    const magicDiv = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <header className='py-[200px] overflow-auto'>
           <div ref={magicDiv} style={{transform: `translateY(${scrollPosition * -1}px)`}}>
           <div className="bg-primary w-full px-4 py-2 md:w-3/4 xl:px-10 xl:w-2/4 float-right">
                <h1 className={`${heading1} text-right leading-normal font-bold`}>
                    {title} 
                </h1>
                <h4 className={`${heading4} text-right font-light mt-0`}>
                    {subtitle}
                    {link && <Link href={link}>
                        <a target="_blank"><span>
                            - <span className="underline cursor-pointer">Link </span>
                        </span></a>
                   </Link>}
                </h4>
            </div>
           </div>
        </header>
    )
}

export default Header;