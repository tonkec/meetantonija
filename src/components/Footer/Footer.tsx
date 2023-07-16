import { forwardRef } from 'react';
import { List, StyledFooter } from './Footer.styles';
import { ImCodepen } from 'react-icons/im';
import { BiLogoLinkedin } from 'react-icons/bi';
import { LuGithub } from 'react-icons/lu';
import { TiDocument } from 'react-icons/ti';
import Secret from 'components/Secret';
import Text from 'components/Text';
import { FiCoffee } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';

type PropsType = {
  offset: number;
  toggle: boolean;
};

const Footer = forwardRef<HTMLElement, PropsType>(({ offset, toggle }, ref) => {
  return (
    <StyledFooter ref={ref} offset={offset} toggle={toggle}>
      <List>
        <li>
          <a
            href="https://github.com/tonkec"
            target="_blank"
            rel="noreferrer"
            className="is-clickable"
          >
            <LuGithub color="#ffffff" fontSize={40} />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/tonkec"
            target="_blank"
            rel="noreferrer"
            className="is-clickable"
          >
            <ImCodepen color="#ffffff" fontSize={40} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/antonija-simic/"
            target="_blank"
            rel="noreferrer"
            className="is-clickable"
          >
            <BiLogoLinkedin color="#ffffff" fontSize={40} />
          </a>
        </li>
        <li>
          <a
            href="https://gist.github.com/tonkec/344482591e09ab240458ebbebbc3dc1b"
            target="_blank"
            rel="noreferrer"
            className="is-clickable"
          >
            <TiDocument color="#ffffff" fontSize={40} />
          </a>
        </li>
      </List>
      <Text type="p" color="white" style={{ marginTop: 40 }}>
        Antonija Šimić has coded this website in the year of{' '}
        {new Date().getFullYear()} using{' '}
        <FiCoffee style={{ verticalAlign: 'middle' }} /> and a lots of{' '}
        <AiFillHeart style={{ verticalAlign: 'middle' }} />. <br />
        If you had a lot of fun on this website, you should hire her.
        <br />
        You can have my word for it. I am the footer, I know this kind of stuff.
        <br />
        Look at me. I am beautiful.
      </Text>
      <Secret
        style={{ position: 'absolute', right: 10, bottom: 10 }}
        dotBackground="#0047b4"
        secretName="second"
      />
    </StyledFooter>
  );
});

export default Footer;
