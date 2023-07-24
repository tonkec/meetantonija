import { StyledHeader } from './Header.styles';
import { MainContainer } from 'styles/containers';
import { CSSProperties } from 'react';
const Header = ({
  children,
  backgroundColor,
  linearGradient,
  style,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  linearGradient?: string[];
  style?: CSSProperties;
}) => {
  return (
    <StyledHeader
      backgroundColor={backgroundColor}
      linearGradient={linearGradient}
      style={style}
    >
      <MainContainer>{children}</MainContainer>
    </StyledHeader>
  );
};

export default Header;
