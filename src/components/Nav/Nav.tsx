import { NavbarLink, Separator, StyledNav } from './Nav.styles';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';
import { BiDownload } from 'react-icons/bi';
import { FiPhone } from 'react-icons/fi';
import { PiRocketBold } from 'react-icons/pi';
import data from './../../data/projects.json';
import Headroom from 'react-headroom';
interface NavInterface {
  onClick: () => void;
  width: number;
  toggle: boolean;
}
const Nav = ({ onClick, width, toggle }: NavInterface) => {
  const titles = data.projects.map((project) => project.title);

  return (
    <>
      <Headroom>
        <BsChevronDoubleRight
          style={{
            position: 'fixed',
            top: 10,
            left: 10,
            zIndex: 99,
            backgroundColor: '#44756b',
            padding: 5,
          }}
          fontSize={40}
          color="#ffe8d1"
          cursor={'pointer'}
          onClick={onClick}
        />
      </Headroom>
      <StyledNav width={width} toggle={toggle}>
        <NavbarLink to="/">
          <HiOutlineHome fontSize={20} style={{ verticalAlign: 'text-top' }} />{' '}
          <span>Home</span>
        </NavbarLink>
        <p style={{ cursor: 'pointer' }}>
          <BiDownload
            color="#f5f5f5"
            fontSize={20}
            style={{ verticalAlign: 'text-top' }}
          />
          <span style={{ color: '#f5f5f5', paddingLeft: '5px' }}>CV</span>
        </p>

        <Separator />

        {titles.map((title) => (
          <NavbarLink to={`/project/${title.toLowerCase()}`}>
            <PiRocketBold fontSize={20} style={{ verticalAlign: 'text-top' }} />{' '}
            <span>{title}</span>
          </NavbarLink>
        ))}

        <Separator />

        <NavbarLink to="/contact">
          <FiPhone fontSize={20} style={{ verticalAlign: 'text-top' }} />{' '}
          <span>Contact</span>
        </NavbarLink>
      </StyledNav>
    </>
  );
};

export default Nav;