import { useState, useEffect, useRef } from 'react';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import { StyledLayout } from './Layout.styles';
import { motion } from 'framer-motion';

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  const navWidth = 300;
  const footer = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(!toggle);
  };

  const toggleBodyOverflow = (toggle: boolean) => {
    if (toggle) {
      document
        .querySelector('body')
        ?.setAttribute('style', 'overflow-y: hidden;');

      document
        .querySelector('html')
        ?.setAttribute('style', 'overflow-y: hidden;');
    } else {
      document
        .querySelector('body')
        ?.setAttribute('style', 'overflow-y: auto;');

      document
        .querySelector('html')
        ?.setAttribute('style', 'overflow-y: auto;');
    }
  };

  const onLayoutClick = () => {
    if (toggle) {
      onClick();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const footerHeight = footer?.current?.getBoundingClientRect().height;
      section.current?.setAttribute(
        'style',
        `margin-bottom: ${footerHeight}px`
      );
    }, 0);
    toggleBodyOverflow(toggle);
  }, [toggle]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Nav width={navWidth} onClick={onClick} toggle={toggle} />
      <StyledLayout
        ref={section}
        toggle={toggle}
        offset={navWidth}
        onClick={onLayoutClick}
      >
        {children}
      </StyledLayout>
      <Footer ref={footer} offset={navWidth} toggle={toggle} />
    </motion.div>
  );
};

export default Layout;
