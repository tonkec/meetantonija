import React from "react";
import Footer from "./FooterContainer";
import footerList from "./stylesheets/footerList";

const links = [
  {
    name: "resume",
    href:
      "https://drive.google.com/file/d/1Xpp9JI6fI_QXVkzZDFOSY18A2eyJjeF7/view?usp=sharing"
  },
  { name: "linkedin", href: "https://www.linkedin.com/in/antonija-simic/" },
  { name: "github", href: "https://github.com/tonkec" },
  { name: "codepen", href: "https://codepen.io/tonkec/" },
  { name: "meetup", href: "https://www.meetup.com/S_CSS_Zagreb/" },
  { name: "blog", href: "https://mytwocents.dev/" }
];

const FooterList = () => (
  <ul className={footerList}>
    {links.map((link, i) => (
      <li key={i}>
        <a href={link.href} target="_blank" rel="noopener">
          {link.name}
        </a>
      </li>
    ))}
  </ul>
);

export default FooterList;
