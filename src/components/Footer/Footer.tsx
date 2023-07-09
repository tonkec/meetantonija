import { useLayoutEffect } from 'react';
import { GridContainer } from '../../styles/containers';
import Section from '../Section/Section';
import Text from '../Text/Text';
import { StyledFooter } from './Footer.styles';

const Footer = () => {
  useLayoutEffect(() => {
    const siblingElement =
      document.querySelector('footer')?.previousElementSibling;
    const footerHeight = document.querySelector('footer')?.offsetHeight;
    siblingElement?.setAttribute('style', `margin-bottom: ${footerHeight}px`);
  }, []);

  return (
    <StyledFooter>
      <GridContainer>
        <Section
          backgroundColor="transparent"
          justifyContent="flex-start"
        ></Section>
      </GridContainer>
    </StyledFooter>
  );
};

export default Footer;
