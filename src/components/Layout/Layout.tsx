import { useState, useLayoutEffect } from 'react';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import { StyledLayout } from './Layout.styles';

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  const navWidth = 300;
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(!toggle);
  };

  const toggleBodyOverflow = (toggle: boolean) => {
    if (toggle) {
      document
        .querySelector('body')
        ?.setAttribute('style', 'overflow-y: hidden;');
    } else {
      document
        .querySelector('body')
        ?.setAttribute('style', 'overflow-y: auto;');
    }
  };

  const onLayoutClick = () => {
    if (toggle) {
      onClick();
    }
  };

  useLayoutEffect(() => {
    toggleBodyOverflow(toggle);
  }, [toggle]);

  return (
    <>
      <Nav width={navWidth} onClick={onClick} toggle={toggle} />
      <StyledLayout toggle={toggle} offset={navWidth} onClick={onLayoutClick}>
        {children}
      </StyledLayout>
      <Footer offset={navWidth} toggle={toggle} />
    </>
  );
};

export default Layout;
