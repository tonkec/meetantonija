import { useLayoutEffect } from 'react';
import { List, StyledFooter } from './Footer.styles';
import { ImCodepen } from 'react-icons/im';
import { BiLogoLinkedin } from 'react-icons/bi';
import { LuGithub } from 'react-icons/lu';
import { TiDocument } from 'react-icons/ti';
const Footer = ({ offset, toggle }: { offset: number; toggle: boolean }) => {
  useLayoutEffect(() => {
    const siblingElement =
      document.querySelector('footer')?.previousElementSibling;
    const footerHeight = document.querySelector('footer')?.offsetHeight;
    siblingElement?.setAttribute('style', `margin-bottom: ${footerHeight}px`);
  }, []);

  return (
    <StyledFooter offset={offset} toggle={toggle}>
      <List>
        <li>
          <a
            href="https://github.com/tonkec"
            target="_blank"
            className="is-clickable"
          >
            <LuGithub color="#ffffff" fontSize={40} />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/tonkec"
            target="_blank"
            className="is-clickable"
          >
            <ImCodepen color="#ffffff" fontSize={40} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/antonija-simic/"
            target="_blank"
            className="is-clickable"
          >
            <BiLogoLinkedin color="#ffffff" fontSize={40} />
          </a>
        </li>
        <li>
          <a
            href="https://gist.github.com/tonkec/344482591e09ab240458ebbebbc3dc1b"
            target="_blank"
            className="is-clickable"
          >
            <TiDocument color="#ffffff" fontSize={40} />
          </a>
        </li>
      </List>
    </StyledFooter>
  );
};

export default Footer;
