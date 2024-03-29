import React from "react";
import footerList from "./stylesheets/footerList";

const links = [
  { name: "linkedin", href: "https://www.linkedin.com/in/antonija-simic/" },
  { name: "github", href: "https://github.com/tonkec" },
  { name: "codepen", href: "https://codepen.io/tonkec/" },
  { name: "blog", href: "https://mytwocents.dev/" }
];

const FooterList = () => (
  <ul className={footerList}>
    {links.map((link, i) => (
      <li key={i}>
        <a
          href={link.href}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
);

export default FooterList;
