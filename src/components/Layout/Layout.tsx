import { useState } from 'react';
import Footer from '../Footer';
import Nav from '../Nav';
import { StyledLayout } from './Layout.styles';

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  const navWidth = 250;
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Nav width={navWidth} onClick={onClick} toggle={toggle} />
      <StyledLayout toggle={toggle} offset={navWidth}>
        {children}
      </StyledLayout>
      <Footer offset={navWidth} toggle={toggle} />
    </>
  );
};

export default Layout;
