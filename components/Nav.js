import Headroom from "react-headroom";
import Link from "next/link";
import { useState, useEffect } from "react";
const a =
  "text-4xl text-white font-bold inline-block my-4 hover:text-primary text-right";
const listItem = "lg:px-6 px-2 text-right";

export default function Nav() {
  const [isNavShown, setNav] = useState(false);

  useEffect(() => {
    if (isNavShown) {
      document.body.className = "overflow-hidden";
    } else {
      document.body.className = "overflow-auto";
    }
  }, [isNavShown]);

  const toggleNav = () => {
    setNav(!isNavShown);
  };

  const closeNav = () => {
    setNav(false);
  };

  const navContent = () => (
    <ul className="relative px-1 mt-[200px]">
      <li className={`${listItem}`} onClick={closeNav}>
        <Link href="/">
          <a className={`${a}`}>Home</a>
        </Link>
      </li>

      <li className={`${listItem}`} onClick={closeNav}>
        <Link href="/about">
          <a className={`${a}`}>About</a>
        </Link>
      </li>

      <li className={`${listItem}`} onClick={closeNav}>
        <Link href="/contact">
          <a className={`${a}`}>Contact</a>
        </Link>
      </li>
    </ul>
  );
  return (
    <>
      {isNavShown && (
        <div className="fixed w-full md:w-auto pl-20 pr-6 right-0 bottom-0 top-0 bg-black z-max">
          <button
            className="bg-ternary block py-2 px-6 absolute right-6 xs:right-10 top-16"
            onClick={toggleNav}
          >
            <span className="material-icons cursor-pointer text-4xl">
              &#xea61;
            </span>
          </button>
          {navContent()}
        </div>
      )}
      <Headroom className="print-hidden">
        <nav className="py-16 fixed lg:px-20 inset-0">
          <button
            className="bg-primary block py-2 px-6 absolute right-6"
            onClick={toggleNav}
          >
            <span className="material-icons cursor-pointer text-4xl">
              &#xea61;
            </span>
          </button>
        </nav>
      </Headroom>
    </>
  );
}
