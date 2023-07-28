import { NavbarLink, Separator, StyledNav } from './Nav.styles';
import { BsChevronDoubleRight, BsPerson } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';
import { PiRocketBold } from 'react-icons/pi';
import { CgNotes } from 'react-icons/cg';
import data from 'data/projects.json';
import Headroom from 'react-headroom';
import Secret from 'components/Secret';
import { useEffect, useRef } from 'react';
import Text from 'components/Text';
interface NavInterface {
  onClick: () => void;
  width: number;
  toggle: boolean;
}
const Nav = ({ onClick, width, toggle }: NavInterface) => {
  const nav = useRef<HTMLElement>(null);
  const titles = data.projects.map((project) => project.title);

  useEffect(() => {
    if (!toggle) {
      setTimeout(() => {
        nav?.current?.setAttribute('style', 'display: none');
      }, 500);
    }

    if (toggle) {
      nav?.current?.setAttribute('style', 'display: block');
    }
  }, [toggle]);
  return (
    <>
      <Headroom>
        <BsChevronDoubleRight
          style={{
            position: 'fixed',
            top: 30,
            left: 10,
            zIndex: 99,
            backgroundColor: '#0047B4',
            padding: 5,
          }}
          fontSize={40}
          color="#ffe8d1"
          cursor={'pointer'}
          onClick={onClick}
        />
      </Headroom>
      <StyledNav width={width} ref={nav}>
        <NavbarLink to="/">
          <HiOutlineHome fontSize={20} style={{ verticalAlign: 'text-top' }} />
          <span>Home</span>
        </NavbarLink>

        <NavbarLink to="/about">
          <BsPerson fontSize={20} style={{ verticalAlign: 'text-top' }} />
          <span>About</span>
        </NavbarLink>

        <NavbarLink to="/notes">
          <CgNotes
            fontSize={20}
            style={{ verticalAlign: 'text-top', color: '#ffffff' }}
          />
          <span>Notes</span>
        </NavbarLink>

        <Separator />

        {titles.map((title, index) => (
          <NavbarLink key={index} to={`/project/${title.toLowerCase()}`}>
            <PiRocketBold fontSize={20} style={{ verticalAlign: 'text-top' }} />
            <span>{title}</span>
          </NavbarLink>
        ))}

        <Separator />

        <Text type="p" color="white" style={{ fontSize: '100%' }}>
          Shift + F
        </Text>

        <Secret
          style={{ position: 'absolute', left: 15, bottom: 0 }}
          secretName="third"
          dotBackground="#0047b4"
        />
      </StyledNav>
    </>
  );
};

export default Nav;
